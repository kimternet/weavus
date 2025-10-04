package com.example.posbackend.mapper;

import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.UserDto;

public class UserMapper {

	public static com.example.posbackend.payload.dto.UserDto toDTO(User savedUser) {
		
		UserDto userDto = new com.example.posbackend.payload.dto.UserDto();
		userDto.setId(savedUser.getId());
		userDto.setFullName(savedUser.getFullName());
		userDto.setEmail(savedUser.getEmail());
		userDto.setRole(savedUser.getRole());
		userDto.setCreatedAt(savedUser.getCreatedAt());
		userDto.setUpdatedAt(savedUser.getUpdatedAt());
		userDto.setLastLogin(savedUser.getLastLogin());
		userDto.setPhone(savedUser.getPhone());
		userDto.setStoreId(savedUser.getStore()!=null?savedUser.getStore().getId():null);
		userDto.setBranchId(savedUser.getBranch()!=null?savedUser.getBranch().getId():null);
		
		return userDto;
	}
	
	public static User toEntity(UserDto userDto) {
		User createdUser = new User();
		
		createdUser.setEmail(userDto.getEmail());
		createdUser.setFullName(userDto.getFullName());
		createdUser.setRole(userDto.getRole());
		createdUser.setCreatedAt(userDto.getCreatedAt());
		createdUser.setUpdatedAt(userDto.getUpdatedAt());
		createdUser.setLastLogin(userDto.getLastLogin());
		createdUser.setPhone(userDto.getPhone());
		createdUser.setPassword(userDto.getPassword());
		
		return createdUser;
		
	}

}
