package com.example.posbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.posbackend.modal.Store;

public interface StoreRepository extends JpaRepository<Store, Long>{
	
	Store findByStoreAdminId(Long adminId);
	
	

}
