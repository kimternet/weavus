package com.example.posbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.posbackend.modal.OrderItem;
import com.example.posbackend.payload.dto.OrderItemDTO;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>{

}
