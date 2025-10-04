package com.example.posbackend.mapper;

import java.util.List;
import java.util.stream.Collectors;

import com.example.posbackend.modal.Order;
import com.example.posbackend.modal.Product;
import com.example.posbackend.modal.Refund;
import com.example.posbackend.modal.ShiftReport;
import com.example.posbackend.payload.dto.OrderDTO;
import com.example.posbackend.payload.dto.ProductDTO;
import com.example.posbackend.payload.dto.RefundDTO;
import com.example.posbackend.payload.dto.ShiftReportDTO;

public class ShiftReportMapper {
	
	public static ShiftReportDTO toDTO(ShiftReport entity) {
		return ShiftReportDTO.builder()
				.id(entity.getId())
				.shiftEnd(entity.getShiftEnd())
				.shiftStart(entity.getShiftStart())
				.totalSales(entity.getTotalSales())
				.totalOrders(entity.getTotalOrders())
				.totalRefunds(entity.getTotalRefunds())
				.netSale(entity.getNetSale())
				.totalOrders(entity.getTotalOrders())
				.cashier(UserMapper.toDTO(entity.getCashier()))
				.cashierId(entity.getCashier().getId())
				.branchId(entity.getBranch().getId())
				.recentOrders(mapOrders(entity.getRecentOrders()))
				.topSellingProducts(mapProducts(entity.getTopSellingProducts()))
				.refunds(mapRefunds(entity.getRefunds()))
				.paymentSummaries(entity.getPaymentSummaries())
				.build();
	}

	private static List<RefundDTO> mapRefunds(List<Refund> refunds) {
		if (refunds == null || refunds.isEmpty()) {return null;}
		return refunds.stream().map(RefundMapper::toDTO).collect(Collectors.toList());
	}

	private static List<ProductDTO> mapProducts(List<Product> topSellingProducts) {
		if (topSellingProducts == null || topSellingProducts.isEmpty()) {return null;}
		return topSellingProducts.stream().map(ProductMapper::toDTO)
				.collect(Collectors.toList());
	}

	private static List<OrderDTO> mapOrders(List<Order> recentOrders) {
		if (recentOrders == null || recentOrders.isEmpty()) {return null;}
		return recentOrders.stream()
				.map(OrderMapper::toDTO).collect(Collectors.toList());
	}
}
