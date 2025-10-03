package com.example.posbackend.payload.dto;

import java.time.LocalDateTime;

import com.example.posbackend.modal.Store;

import lombok.Builder;
import lombok.Data;


@Data
@Builder

public class CategoryDTO {

	private Long id;
	
	private String name;
	
//	private Store store;
	
	private Long storeId;

}
