package com.example.posbackend.repository;

import com.example.posbackend.modal.Store;
import com.example.posbackend.modal.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByEmail(String email);
	
	List<User> findByStore(Store store);
	List<User> findByBranchId(Long branchId);
	

}
