package com.example.posbackend.service;

import java.util.List;

import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.modal.Store;
import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.StoreDTO;

public interface StoreService {
	
	StoreDTO createStore(StoreDTO storeDTO, User user);
	StoreDTO getStoreById(Long id) throws Exception;
	List<StoreDTO> getAllStores();
	Store getStoreByAdmin() throws UserException;
	StoreDTO updateStore(Long id, StoreDTO storeDTO);
	StoreDTO deleteStore(Long id);
	StoreDTO getStoreByEmployee() throws UserException;	

}
