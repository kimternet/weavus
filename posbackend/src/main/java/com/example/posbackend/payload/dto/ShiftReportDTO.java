package com.example.posbackend.payload.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.example.posbackend.modal.Branch;
import com.example.posbackend.modal.Order;
import com.example.posbackend.modal.PaymentSummary;
import com.example.posbackend.modal.Product;
import com.example.posbackend.modal.Refund;
import com.example.posbackend.modal.User;

import jakarta.persistence.CascadeType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ShiftReportDTO {
	
	private Long id;
	
	private LocalDateTime shiftStart;
	private LocalDateTime shiftEnd;
	
	private Double totalSales;
	private Double totalRefunds;
	private Double netSale;
	private int totalOrders;
	
	private UserDto cashier;
	private Long cashierId;
	private Long branchId;
	
	private BranchDTO branch;
	
	private List<PaymentSummary> paymentSummaries;
	
	private List<ProductDTO> topSellingProducts;
	
	private List<OrderDTO> recentOrders;
	
	private List<RefundDTO> refunds;
	
	
}
