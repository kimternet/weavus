package com.example.posbackend.mapper;

import com.example.posbackend.modal.Category;
import com.example.posbackend.payload.dto.CategoryDTO;

public class CategoryMapper {

	public static CategoryDTO toDTO(Category category) {
		
		return CategoryDTO.builder()
				.id(category.getId())
				.name(category.getName())
				.storeId(category.getStore()!=null?category.getStore().getId():null)
				.build();
	}
}

