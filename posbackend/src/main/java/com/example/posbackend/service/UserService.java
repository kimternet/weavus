package com.example.posbackend.service;

import java.util.List;

import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.modal.User;

public interface UserService {
	
	User getUserFromJwtToken(String token) throws UserException;
	User getCurrentUser() throws UserException;
	User getUserByEmail(String email) throws UserException;
	User getUserById(Long id) throws UserException, Exception;
	List<User> getAllUsers() throws UserException;
	

}
