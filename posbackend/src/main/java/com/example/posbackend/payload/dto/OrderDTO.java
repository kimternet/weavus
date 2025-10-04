package com.example.posbackend.payload.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.example.posbackend.domain.PaymentType;
import com.example.posbackend.modal.Customer;
import com.example.posbackend.modal.OrderItem;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class OrderDTO {

	private Long id;
	
	private Double totalAmount;
	
	private LocalDateTime createdAt;
	
	private Long branchId;
	private Long customerId;
	
	private BranchDTO branch;
	
	private UserDto cashier;

	private Customer customer;
	
	private PaymentType paymentType;
	
	private List<OrderItemDTO> items;

}
