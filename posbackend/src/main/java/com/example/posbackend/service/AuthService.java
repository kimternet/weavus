package com.example.posbackend.service;

import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.payload.dto.UserDto;
import com.example.posbackend.payload.response.AuthResponse;

public interface AuthService {
	
	
	AuthResponse signup(UserDto userDto) throws UserException;
	AuthResponse login(UserDto userDto) throws UserException;

}
