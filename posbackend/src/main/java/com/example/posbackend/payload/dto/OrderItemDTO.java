package com.example.posbackend.payload.dto;

import com.example.posbackend.modal.Order;
import com.example.posbackend.modal.Product;

import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Data;


@Data
@Builder
public class OrderItemDTO {
	
	private Long id;
	
	private Integer quantity;
	
	private Double price;
	
	private ProductDTO product;
	
	private Long productId;
	
	private Long orderId;


}
