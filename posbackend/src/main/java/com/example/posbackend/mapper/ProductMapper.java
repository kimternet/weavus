package com.example.posbackend.mapper;

import com.example.posbackend.modal.Category;
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
				.category(CategoryMapper.toDTO(product.getCategory()))
				.storeId(product.getStore()!=null?product.getStore().getId():null)
				.image(product.getImage())
				.createdAt(product.getCreatedAt())
				.updatedAt(product.getUpdatedAt())
				.build();
				
	}
	
	public static Product toEntity(ProductDTO productDTO, Store store, Category category) {
		return Product.builder()
				.name(productDTO.getName())
				.store(store)
				.category(category)
				.sku(productDTO.getSku())
				.description(productDTO.getDescription())
				.mrp(productDTO.getMrp())
				.sellingPrice(productDTO.getSellingPrice())
				.brand(productDTO.getBrand())
				.build();
	}

}
