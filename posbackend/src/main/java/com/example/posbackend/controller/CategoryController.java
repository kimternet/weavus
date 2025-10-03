package com.example.posbackend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.example.posbackend.payload.dto.CategoryDTO;
import com.example.posbackend.payload.response.ApiResponse;
import com.example.posbackend.service.CategoryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/categories")
public class CategoryController {
	
	private final CategoryService categoryService;
	
	@PostMapping
	public ResponseEntity<CategoryDTO> createCategory(
			@RequestBody CategoryDTO categoryDTO) throws Exception {
		return ResponseEntity.ok(				
				categoryService.createCategory(categoryDTO)		
		);
	}
	
	@GetMapping("/store/{storeId}")
	public ResponseEntity<List<CategoryDTO>> getCategoriesByStoreId(
			@PathVariable Long storeId) throws Exception {
		return ResponseEntity.ok(				
				categoryService.getCategoriesByStore(storeId)
		);
	}
	

	@PutMapping("/{id}")
	public ResponseEntity<CategoryDTO> updateCategory(
			@RequestBody CategoryDTO categoryDTO,
			@PathVariable Long id) throws Exception {
		return ResponseEntity.ok(				
				categoryService.updateCategory(id,categoryDTO)
		);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteCategory(
			@RequestBody CategoryDTO categoryDTO,
			@PathVariable Long id) throws Exception {
		
		categoryService.updateCategory(id, categoryDTO);
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setMessage("category deleted Successfully ");
		return ResponseEntity.ok(				
				apiResponse
		);
	}
	
	

}
