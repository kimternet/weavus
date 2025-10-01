package com.example.posbackend.repository;

import com.example.posbackend.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
	

}
