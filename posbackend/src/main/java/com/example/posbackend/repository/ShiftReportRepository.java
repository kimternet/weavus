package com.example.posbackend.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.posbackend.modal.ShiftReport;
import com.example.posbackend.modal.User;

public interface ShiftReportRepository extends JpaRepository<ShiftReport, Long>{
	
	List<ShiftReport> findByCashierId(Long id);
	List<ShiftReport> findByBranchId(Long id);
	
	Optional<ShiftReport> findTopByCashierAndShiftEndIsNullOrderByShiftStartDesc(User cashier);
	
	Optional<ShiftReport> findByCashierAndShiftStartBetween(User cashier, LocalDateTime start, LocalDateTime end);

}
