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
		
		return userDto;
	}

}
