package com.example.posbackend.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.posbackend.modal.Branch;


public interface BranchRepository extends JpaRepository<Branch, Long>{
	
	List<Branch> findByStoreId(Long storeId);

}
