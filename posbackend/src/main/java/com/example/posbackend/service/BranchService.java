package com.example.posbackend.service;

import java.util.List;

import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.BranchDTO;

public interface BranchService {
	
	BranchDTO createBranch(BranchDTO branchDTO) throws UserException;
	BranchDTO updateBranch(Long id, BranchDTO branchDTO) throws Exception;
	void deleteBranch(Long id) throws Exception;
	List<BranchDTO> getAllBranchesByStoreId(Long storeId);
	
	BranchDTO getBranchById(Long id) throws Exception;
	

}
