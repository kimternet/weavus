package com.example.posbackend.mapper;

import java.util.stream.Collectors;

import com.example.posbackend.modal.Order;
import com.example.posbackend.payload.dto.OrderDTO;

public class OrderMapper {
	
	public static OrderDTO toDTO(Order order) {
		return OrderDTO.builder()
				.id(order.getId())
				.totalAmount(order.getTotalAmount())
				.branchId(order.getBranch().getId())
				.cashier(UserMapper.toDTO(order.getCashier()))
				.customer(order.getCustomer())
				.paymentType(order.getPaymentType())
				.createdAt(order.getCreatedAt())
				.items(order.getItems().stream()
						.map(OrderItemMapper::toDTO)
						.collect(Collectors.toList()))
				.build();
	}

}
