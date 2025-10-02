package com.example.posbackend.payload.dto;

import java.time.LocalDateTime;

import com.example.posbackend.domain.StoreStatus;
import com.example.posbackend.modal.StoreContact;
import com.example.posbackend.modal.User;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import lombok.Data;


@Data
public class StoreDTO {
	
	private Long id;

	private String brand;
	
	private UserDto storeAdmin;
	
	private LocalDateTime createdAt;
	
	private LocalDateTime updatedAt;
	
	private String description;
	
	private String storeType;
	
	private StoreStatus status;
	
	private StoreContact contact;
	
	
	}

}
