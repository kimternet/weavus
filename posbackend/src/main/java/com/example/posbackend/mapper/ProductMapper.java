package com.example.posbackend.mapper;

import com.example.posbackend.modal.Product;
import com.example.posbackend.modal.Store;
import com.example.posbackend.payload.dto.ProductDTO;

public class ProductMapper {
	
	public static ProductDTO toDTO(Product product) {
		
		return ProductDTO.builder()
				.id(product.getId())
				.name(product.getName())
				.sku(product.getSku())
				.description(product.getDescription())
				.mrp(product.getMrp())
				.sellingPrice(product.getSellingPrice())
				.brand(product.getBrand())
				.storeId(product.getStore()!=null?product.getStore().getId():null)
				.image(product.getImage())
				.createdAt(product.getCreatedAt())
				.updatedAt(product.getUpdatedAt())
				.build();
				
	}
	
	public static Product toEntity(ProductDTO productDTO, Store store) {
		return Product.builder()
				.name(productDTO.getName())
				.sku(productDTO.getSku())
				.description(productDTO.getDescription())
				.mrp(productDTO.getMrp())
				.sellingPrice(productDTO.getSellingPrice())
				.brand(productDTO.getBrand())
				.build();
	}

}
