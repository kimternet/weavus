package com.example.posbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.posbackend.modal.Customer;
import com.example.posbackend.repository.CustomerRepository;
import com.example.posbackend.service.CustomerService;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor


public class CustomerServiceImpl implements CustomerService {
	
	private final CustomerRepository customerRepository;
	
	
	@Override
	public Customer createCustomer(Customer customer) {
		return customerRepository.save(customer);
	}

	@Override
	public Customer updateCustomer(Long id, Customer customer) throws Exception {
		Customer customerToUpdate = customerRepository.findById(id).orElseThrow(
				() -> new Exception("Customer not found")
		);
		customer.setFullName(customer.getFullName());
		customer.setEmail(customer.getEmail());
		customer.setPhone(customer.getPhone());
		
		
		return customerRepository.save(customer);
	}

	@Override
	public void deleteCustomer(Long id) throws Exception {
		Customer customerToUpdate = customerRepository.findById(id).orElseThrow(
				() -> new Exception("Customer not found")
		);
		customerRepository.delete(customerToUpdate);
		
	}

	@Override
	public Customer getCustomer(Long id) throws Exception {

		return customerRepository.findById(id).orElseThrow(
				() -> new Exception("Customer not found")
		);
	}

	@Override
	public List<Customer> getAllCustomers() throws Exception {
		return customerRepository.findAll();
	}

	@Override
	public List<Customer> searchCustomers(String keyword) throws Exception {
		return customerRepository.findByFullNameContainingIgnoreCaseOrEmailContainingIgnoreCase(
				keyword, keyword
		);
	}
	
}
