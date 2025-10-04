package com.example.posbackend.payload.dto;

import java.time.LocalDateTime;

import com.example.posbackend.domain.PaymentType;
import com.example.posbackend.modal.Branch;
import com.example.posbackend.modal.Order;
import com.example.posbackend.modal.ShiftReport;
import com.example.posbackend.modal.User;

import lombok.Builder;
import lombok.Data;

@Data
@Builder

public class RefundDTO {
	
	private Long id;
	
	private OrderDTO order;
	private Long orderId;
	
	private String reason;
	
	private Double amount;
	
//	private ShiftReport shiftReport;
	private Long shiftReportId;
	
	private UserDto cashier;
	private String cashierName;
	
	private BranchDTO branch;
	private Long branchId;
	
	private PaymentType paymentType;
	
	private LocalDateTime createdAt;
	
	

}
