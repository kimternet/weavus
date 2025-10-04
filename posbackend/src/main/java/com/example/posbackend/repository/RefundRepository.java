package com.example.posbackend.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.posbackend.modal.Refund;
import com.example.posbackend.modal.User;

public interface RefundRepository extends JpaRepository<Refund, Long>{
	
	List<Refund> findByCashierIdAndCreatedAtBetween(
			Long cashier,
			LocalDateTime from,
			LocalDateTime to
	);
	
	List<Refund> findByCashierId(Long id);
	List<Refund> findByShiftReportId(Long id);
	List<Refund> findByBranchId(Long id);

}
