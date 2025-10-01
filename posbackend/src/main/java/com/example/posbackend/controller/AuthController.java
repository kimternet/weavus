package com.example.posbackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor

public class AuthController {	
	private final com.example.posbackend.service.AuthService authService;
	
	// http://localhost:5000/auth/signup
	@PostMapping("/signup")
	public ResponseEntity<com.example.posbackend.payload.response.AuthResponse> signupHandler(
			@RequestBody com.example.posbackend.payload.dto.UserDto userDto
			
	
	) throws com.example.posbackend.exceptions.UserException {
		
		return ResponseEntity.ok(
				authService.signup(userDto)				
		);		
	}
	@PostMapping("/login")
	public ResponseEntity<com.example.posbackend.payload.response.AuthResponse> loginHandler(
			@RequestBody com.example.posbackend.payload.dto.UserDto userDto
			
	
	) throws com.example.posbackend.exceptions.UserException {
		
		return ResponseEntity.ok(
				authService.login(userDto)				
		);		
	}
		

}
