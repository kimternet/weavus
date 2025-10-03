package com.example.posbackend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.posbackend.domain.UserRole;
import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.mapper.CategoryMapper;
import com.example.posbackend.modal.Category;
import com.example.posbackend.modal.Store;
import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.CategoryDTO;
import com.example.posbackend.repository.CategoryRepository;
import com.example.posbackend.repository.StoreRepository;
import com.example.posbackend.service.CategoryService;
import com.example.posbackend.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class CategoryServiceImpl implements CategoryService{
	
	private final CategoryRepository categoryRepository;
	private final UserService userService;
	private final StoreRepository storeRepository;
	
	@Override
	public CategoryDTO createCategory(CategoryDTO dto) throws Exception {
		User user = userService.getCurrentUser();
		
		Store store = storeRepository.findById(dto.getStoreId()).orElseThrow(
				
				() -> new Exception("Store not found")
		);
		
		Category category = Category.builder()
				.store(store)
				.name(dto.getName())
				.build();
		
		checkAuthority(user, category.getStore());
		
		return CategoryMapper.toDTO(categoryRepository.save(category));
	}

	@Override
	public List<CategoryDTO> getCategoriesByStore(Long storeId) {
		List<Category> categories = categoryRepository.findByStoreId(storeId);
		
		return categories.stream()
				.map(
						
						CategoryMapper::toDTO				
				).collect(Collectors.toList());
	}

	@Override
	public CategoryDTO updateCategory(Long id, CategoryDTO dto) throws Exception {
		Category category = categoryRepository.findById(id).orElseThrow(
				()-> new Exception("category not exist")
		
		);
		User user = userService.getCurrentUser();
		
		
		category.setName(dto.getName());
		checkAuthority(user, category.getStore());
		return CategoryMapper.toDTO(categoryRepository.save(category));
	}

	@Override
	public void deleteCategory(Long id) throws Exception {
		Category category = categoryRepository.findById(id).orElseThrow(
				()-> new Exception("category not exist")	
		);
		User user = userService.getCurrentUser();
		checkAuthority(user, category.getStore());
		categoryRepository.delete(category);
	}
	
	private void checkAuthority(User user, Store store) throws Exception {
		boolean isAdmin = user.getRole().equals(UserRole.ROLE_STORE_ADMIN);
		boolean isManager = user.getRole().equals(UserRole.ROLE_STORE_MANAGER);
		boolean isSameStore = user.equals(store.getStoreAdmin());
		
		if(!(isAdmin && isSameStore)&& !isManager) {
			throw new Exception("you don't have permission to manage this category");
		}
	}
}



