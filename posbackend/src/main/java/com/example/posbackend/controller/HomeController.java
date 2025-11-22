package com.example.posbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.posbackend.payload.response.ApiResponse;


@RestController
public class HomeController {
	
	@GetMapping
	public ResponseEntity<ApiResponse> home() {
		ApiResponse apiResponse = new ApiResponse();
		apiResponse.setMessage("POSシステムにようこそ");
		return ResponseEntity.ok(apiResponse);
		
	}

}
