package com.example.posbackend.mapper;

import com.example.posbackend.modal.Store;
import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.StoreDTO;

public class StoreMapper {
	
	
	public static StoreDTO toDTO(Store store) {
		StoreDTO storeDTO = new StoreDTO();
		storeDTO.setId(store.getId());
		storeDTO.setBrand(store.getBrand());
		storeDTO.setDescription(store.getDescription());
		storeDTO.setStoreAdmin(UserMapper.toDTO(store.getStoreAdmin()));
		storeDTO.setStoreType(store.getStoreType());
		storeDTO.setContact(store.getContact());
		storeDTO.setCreatedAt(store.getCreatedAt());
		storeDTO.setUpdatedAt(store.getUpdatedAt());
		storeDTO.setStatus(store.getStatus());
		
		
		
		return storeDTO;
	}
	
	public static Store toEntity(StoreDTO storeDTO, User storeAdmin) {
		Store store = new Store();
		
		store.setId(storeDTO.getId());
		store.setBrand(store.getBrand());
		store.setBrand(storeDTO.getBrand());
		store.setDescription(storeDTO.getDescription());
		store.setStoreAdmin(storeAdmin);
		store.setStoreType(storeDTO.getStoreType());
		store.setContact(storeDTO.getContact());
		store.setCreatedAt(storeDTO.getCreatedAt());
		store.setUpdatedAt(storeDTO.getUpdatedAt());	
		
		return store;
		
	}

}
