package com.example.posbackend.payload.response;

import lombok.Data;

@Data
public class AuthResponse {
	
	private String jwt;
	private String message;
	private com.example.posbackend.payload.dto.UserDto user;
	

}
