package com.example.posbackend.modal;

import java.time.LocalDateTime;
import java.util.List;

import com.example.posbackend.domain.PaymentType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ShiftReport {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private LocalDateTime shiftStart;
	private LocalDateTime shiftEnd;
	
	private Double totalSales;
	private Double totalRefunds;
	private Double netSale;
	private int totalOrders;
	
	@ManyToOne
	private User cashier;
	
	@ManyToOne
	private Branch branch;
	
	@Transient
	private List<PaymentSummary> paymentSummaries;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Product> topSellingProducts;
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Order> recentOrders;
	
	@OneToMany(mappedBy="shiftReport", cascade=CascadeType.ALL)
	private List<Refund> refunds;

}
