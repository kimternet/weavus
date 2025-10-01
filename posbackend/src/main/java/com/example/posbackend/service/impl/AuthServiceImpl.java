package com.example.posbackend.service.impl;



import java.time.LocalDateTime;
import java.util.Collection;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.posbackend.domain.UserRole;
import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.mapper.UserMapper;
import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.UserDto;
import com.example.posbackend.payload.response.AuthResponse;
import com.example.posbackend.repository.UserRepository;
import com.example.posbackend.service.AuthService;
import com.example.posbackend.configuration.JwtProvider;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{
	
	
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtProvider jwtprovider;
	private final CustomUserImplementation customUserImplementation;
	
	
	@Override
	public AuthResponse signup(UserDto userDto) throws UserException {
		User user = userRepository.findByEmail(userDto.getEmail());
		if (user != null) {
			throw new UserException("email id already registered !");
		}
		if(userDto.getRole().equals(UserRole.ROLE_ADMIN)) {
			throw new UserException("role admin is not allowed!");
		}
		
		User newUser =new User();
		newUser.setEmail(userDto.getEmail());
		newUser.setPassword(passwordEncoder.encode(userDto.getPassword()));
		newUser.setRole(userDto.getRole());
		newUser.setFullName(userDto.getFullName());
		newUser.setPhone(userDto.getPhone());
		newUser.setLastLogin(LocalDateTime.now());
		newUser.setCreatedAt(LocalDateTime.now());
		
		newUser.setUpdatedAt(LocalDateTime.now());
		
		userRepository.save(newUser);
		
		User savedUser = userRepository.save(newUser);
		
		Authentication authentication = 
				new UsernamePasswordAuthenticationToken(userDto.getEmail(), userDto.getPassword());
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String jwt = jwtprovider.generateToken(authentication);
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(jwt);
		authResponse.setMessage("Registered Successfully");
		authResponse.setUser(UserMapper.toDTO(savedUser));
		
		
		
		return authResponse;
	}

	@Override
	public AuthResponse login(UserDto userDto) throws UserException {
		String email = userDto.getEmail();
		String password = userDto.getPassword();
		Authentication authentication = authenticate(email,password);
				
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
		
		String role = authorities.iterator().next().getAuthority();
		
		String jwt = jwtprovider.generateToken(authentication);
		
		User user = userRepository.findByEmail(email);
		
		user.setLastLogin(LocalDateTime.now());
		userRepository.save(user);
		
		AuthResponse authResponse = new AuthResponse();
		authResponse.setJwt(jwt);
		authResponse.setMessage("Login Successfully");
		authResponse.setUser(UserMapper.toDTO(user));
		
		
		return authResponse;
	}

	private Authentication authenticate(String email, String password) throws UserException {
		
		UserDetails userDetails = customUserImplementation.loadUserByUsername(email);
		
		if(userDetails == null) {
			throw new UserException("email id doesn't exist"+email);
		}
		
		if(!passwordEncoder.matches(password, userDetails.getPassword())) {
			throw new UserException("password doesn't match");
		}
		
		
		
		return new UsernamePasswordAuthenticationToken(userDetails, password,userDetails.getAuthorities());
	}
	
	

}
