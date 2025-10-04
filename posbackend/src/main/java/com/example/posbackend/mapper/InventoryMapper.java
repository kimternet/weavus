package com.example.posbackend.mapper;

import com.example.posbackend.modal.Branch;
import com.example.posbackend.modal.Inventory;
import com.example.posbackend.modal.Product;
import com.example.posbackend.payload.dto.InventoryDTO;

public class InventoryMapper {
	
	public static InventoryDTO toDTO(Inventory inventory) {
		
		return InventoryDTO.builder()
				.id(inventory.getId())
				.branchId(inventory.getBranch().getId())
				.productId(inventory.getProduct().getId())
				.product(ProductMapper.toDTO(inventory.getProduct()))
				.quantity(inventory.getQuantity())
				.build();
	}
	
	public static Inventory toEntity(InventoryDTO inventoryDTO,Branch branch,Product product) {
		
		return Inventory.builder()
				.branch(branch)
				.product(product)
				.quantity(inventoryDTO.getQuantity())
				.build();
	}

}
