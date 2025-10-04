package com.example.posbackend.service.impl;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.posbackend.exceptions.UserException;
import com.example.posbackend.mapper.BranchMapper;
import com.example.posbackend.modal.Branch;
import com.example.posbackend.modal.Store;
import com.example.posbackend.modal.User;
import com.example.posbackend.payload.dto.BranchDTO;
import com.example.posbackend.repository.BranchRepository;
import com.example.posbackend.repository.StoreRepository;
import com.example.posbackend.service.BranchService;
import com.example.posbackend.service.UserService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor


public class BranchServiceImpl implements BranchService{
	
	private final BranchRepository branchRepository;
	private final StoreRepository storeRepository;
	private final UserService userService;

	@Override
	public BranchDTO createBranch(BranchDTO branchDTO) throws UserException {
		User currentUser=userService.getCurrentUser();
		Store store=storeRepository.findByStoreAdminId(currentUser.getId());
		
		Branch branch=BranchMapper.toEntity(branchDTO, store);
		Branch savedBranch=branchRepository.save(branch);
		
		return BranchMapper.toDTO(savedBranch);
	}

	@Override
	public BranchDTO updateBranch(Long id, BranchDTO branchDTO) throws Exception {
		
		Branch exiting=branchRepository.findById(id).orElseThrow(
				()-> new Exception("branch not exist..")
		);
		exiting.setName(branchDTO.getName());
		exiting.setWorkingDays(branchDTO.getWorkingDays());
		exiting.setEmail(branchDTO.getEmail());
		exiting.setPhone(branchDTO.getPhone());
		exiting.setAddress(branchDTO.getAddress());
		exiting.setOpenTime(branchDTO.getOpenTime());
		exiting.setCloseTime(branchDTO.getCloseTime());
		exiting.setUpdatedAt(LocalDateTime.now());
		
		Branch updatedBranch=branchRepository.save(exiting);		
		return BranchMapper.toDTO(updatedBranch);
	}
	
	

	@Override
	public void deleteBranch(Long id) throws Exception {
		Branch exiting=branchRepository.findById(id).orElseThrow(
				()-> new Exception("branch not exist..")
		);
		branchRepository.delete(exiting);
	}

	@Override
	public List<BranchDTO> getAllBranchesByStoreId(Long storeId) {
		List<Branch> branches= branchRepository.findByStoreId(storeId);
		return branches.stream().map(BranchMapper::toDTO)
				.collect(Collectors.toList());
	}

	@Override
	public BranchDTO getBranchById(Long id) throws Exception {
		Branch exiting=branchRepository.findById(id).orElseThrow(
				()-> new Exception("branch not exist..")
		);
		return BranchMapper.toDTO(exiting);
	}
	
	

}
