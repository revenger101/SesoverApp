package com.SesoverApp.Sesover.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

	private Integer idMember;
	private String nomMember;
	private String prenomMember;
	private String emailMember;
	private Integer telephoneMember;
	private String passwordMember;
	private String c_PasswordMember;
	private Role role;
}
