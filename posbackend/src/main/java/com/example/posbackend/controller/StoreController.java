package com.example.posbackend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.posbackend.domain.StoreStatus;
import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.mapper.StoreMapper;
import com.example.posbackend.modal.Store;
import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.StoreDTO;
import com.example.posbackend.payload.response.ApiResponse;
import com.example.posbackend.service.StoreService;
import com.example.posbackend.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/stores")

public class StoreController {
	
	
	private final StoreService storeService;
	private final UserService userService;
	
	
	@PostMapping
	public ResponseEntity<StoreDTO> createStore(@RequestBody StoreDTO storeDTO,
												@RequestHeader("Authorization")String jwt) throws UserException{
		
		User user = userService.getUserFromJwtToken(jwt);
		return ResponseEntity.ok(storeService.createStore(storeDTO, user));		
		
	}
	
//	@GetMapping("/{id}")
//	public ResponseEntity<StoreDTO> getStoreById(
//			@PathVariable Long id,
//			@RequestHeader("Authorization")String jwt) throws Exception{
//		
//		return ResponseEntity.ok(storeService.getStoreById(id));		
//		
//	}
	
	@GetMapping()
	public ResponseEntity<List<StoreDTO>> getAllStore(
			@RequestHeader("Authorization")String jwt) throws Exception{
		
		return ResponseEntity.ok(storeService.getAllStores());		
		
	}
	
	@GetMapping("/admin")
	public ResponseEntity<StoreDTO> getStoreByAdmin(
			@RequestHeader("Authorization")String jwt) throws Exception{
		
		return ResponseEntity.ok(StoreMapper.toDTO(storeService.getStoreByAdmin()));		
		
	}
	
	
	@GetMapping("/employee")
	public ResponseEntity<StoreDTO> getStoreByEmployee(
			@RequestHeader("Authorization")String jwt) throws Exception{
		
		return ResponseEntity.ok(storeService.getStoreByEmployee());		
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<StoreDTO> updateStore(@PathVariable Long id,
												@RequestBody StoreDTO storeDTO) throws Exception {
		return ResponseEntity.ok(storeService.updateStore(id, storeDTO));
	}
	
	@PutMapping("/{id}/moderate")
	public ResponseEntity<StoreDTO> moderateStore(@PathVariable Long id,
												@RequestParam StoreStatus status
	) throws Exception {
		
		return ResponseEntity.ok(storeService.moderateStore(id, status));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<StoreDTO> getStoreById(
			@PathVariable Long id,
			@RequestHeader("Authorization")String jwt) throws Exception{
		
		return ResponseEntity.ok(storeService.getStoreById(id));		
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<ApiResponse> deleteStore(@PathVariable Long id) throws Exception {
		
		storeService.deleteStore(id);
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setMessage("store deleted successfully");
		return ResponseEntity.ok(apiResponse);
	}
	
}
