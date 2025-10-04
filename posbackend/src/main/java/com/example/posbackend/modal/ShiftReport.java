package com.example.posbackend.modal;

import java.time.LocalDateTime;

import com.example.posbackend.domain.PaymentType;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ShiftReport {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

}
