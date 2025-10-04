package com.example.posbackend.modal;

import com.example.posbackend.domain.PaymentType;

import lombok.Data;

@Data
public class PaymentSummary {
	
	private PaymentType type;
	private Double totalAmount;
	private int transactionCount;
	private double percentage;
	
	

}
