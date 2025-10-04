package com.example.posbackend.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.posbackend.modal.Order;
import com.example.posbackend.modal.User;

public interface OrderRepository extends JpaRepository<Order, Long>{
	
	List<Order>findByCustomerId(Long customerId);
	List<Order>findByBranchId(Long branchId);
	List<Order>findByCashierId(Long cashierId);
	List<Order>findByBranchIdAndCreatedAtBetween(Long branchId, LocalDateTime from, LocalDateTime to);
	List<Order>findByCashierAndCreatedAtBetween(User cashier, LocalDateTime from, LocalDateTime to);
	List<Order> findTop5ByBranchIdOrderByCreatedAtDesc(Long branchId);
	
	

}
