package com.example.posbackend.service;

import java.util.List;

import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.payload.dto.CategoryDTO;

public interface CategoryService {
	
	CategoryDTO createCategory(CategoryDTO dto) throws UserException, Exception;
	List<CategoryDTO> getCategoriesByStore(Long storeId);
	CategoryDTO updateCategory(Long id, CategoryDTO dto) throws Exception;
	void deleteCategory(Long id) throws Exception;
	

}
