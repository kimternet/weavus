package com.example.posbackend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.ProductDTO;
import com.example.posbackend.payload.response.ApiResponse;
import com.example.posbackend.service.ProductService;
import com.example.posbackend.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")

public class ProductController {
	private final ProductService productService;
	private final UserService userService;
	
	
	@PostMapping
	public ResponseEntity<ProductDTO> create(@RequestBody ProductDTO productDTO, @RequestHeader("Authorization") String jwt) throws Exception{
		
		
		User user = userService.getUserFromJwtToken(jwt);
		return ResponseEntity.ok(
				productService.createProduct(
						productDTO, user
				)
				
		);
		
	}
	
	@GetMapping("/store/{storeid}")
	public ResponseEntity<List<ProductDTO>> getByStoreId(
			@PathVariable Long storeId, 
			@RequestHeader("Authorization") String jwt) throws Exception{
		
		return ResponseEntity.ok(
				productService.getProductsByStoreId(
						storeId
				)
		);
		
	}
	
	@PatchMapping("/{id}")
	public ResponseEntity<ProductDTO> update(
			@PathVariable Long id,
			@RequestBody ProductDTO productDTO,
			@RequestHeader("Authorization") String jwt) throws Exception{
		
		User user = userService.getUserFromJwtToken(jwt);
		return ResponseEntity.ok(
				productService.updateProduct(
						id,productDTO, user
				)
				
		);
		
	}
	
	
	@GetMapping("/store/{storeId}/search")
	public ResponseEntity<List<ProductDTO>> searchByKeyword(
			@PathVariable Long storeId, 
			@RequestParam String keyword,
			@RequestHeader("Authorization") String jwt) throws Exception{
		
		return ResponseEntity.ok(
				productService.searchByKeyword(
						storeId, keyword
				)
		);
		
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> delete(
			@PathVariable Long id,
			@RequestHeader("Authorization") String jwt) throws Exception{
		
		User user = userService.getUserFromJwtToken(jwt);
		
				productService.deleteProduct(
						id,user
				);
				
				ApiResponse apiResponse = new ApiResponse();
				apiResponse.setMessage("Product deleted successfully");

				return ResponseEntity.ok(apiResponse);
	}

}
