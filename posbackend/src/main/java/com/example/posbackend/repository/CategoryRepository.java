package com.example.posbackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.posbackend.modal.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
	
	
	List<Category> findByStoreId(long storeId);
}

