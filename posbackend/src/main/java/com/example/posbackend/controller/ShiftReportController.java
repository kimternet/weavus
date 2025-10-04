package com.example.posbackend.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.posbackend.payload.dto.ShiftReportDTO;
import com.example.posbackend.service.ShiftReportService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/shift-reports")
public class ShiftReportController {
	
	private final ShiftReportService shiftReportService;
	
	@PostMapping("/start")
	public ResponseEntity<ShiftReportDTO> startShift() throws Exception {
		
		return ResponseEntity.ok(
				shiftReportService.startShift()	
		);
		
	}
	
	@PatchMapping("/end")
	public ResponseEntity<ShiftReportDTO> endShift() throws Exception {
		
		return ResponseEntity.ok(
				shiftReportService.endShift(null, null)
		);
		
	}
	
	@GetMapping("/current")
	public ResponseEntity<ShiftReportDTO> getCurrentShiftProgress() throws Exception {
		return ResponseEntity.ok(
				
				shiftReportService.getCurrentShiftProgress(null)
		);
		
	}
	
	@GetMapping("/cashier/{cashierId}/by-date")
	public ResponseEntity<ShiftReportDTO> getShiftReportByDate(
			@PathVariable Long cashierId,
			@RequestParam @DateTimeFormat (iso = DateTimeFormat.ISO.DATE)
			LocalDateTime date
	) throws Exception {
		return ResponseEntity.ok(
				
				shiftReportService.getShiftByCashierAndDate(cashierId, date)
		);
		
	}
	
	@GetMapping("/cashier/{cashierId}")
	public ResponseEntity<List<ShiftReportDTO>> getShiftReportByCashier(
			@PathVariable Long cashierId

	) throws Exception {
		return ResponseEntity.ok(
				
				shiftReportService.getShiftReportsByCashierId(cashierId)
		);
		
	}
	
	@GetMapping("/branch/{branchId}")
	public ResponseEntity<List<ShiftReportDTO>> getShiftReportByBranch(
			@PathVariable Long branchId

	) throws Exception {
		return ResponseEntity.ok(
				
				shiftReportService.getShiftReportsByBranchId(branchId)
		);
		
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<ShiftReportDTO> getShiftReportById(
			@PathVariable Long id

	) throws Exception {
		return ResponseEntity.ok(
				
				shiftReportService.getShiftReportById(id)
		);
		
	}

}
