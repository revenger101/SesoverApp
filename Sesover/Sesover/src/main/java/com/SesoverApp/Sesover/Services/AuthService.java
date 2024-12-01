package com.SesoverApp.Sesover.Services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.SesoverApp.Sesover.Repositories.UserRepository;
import com.SesoverApp.Sesover.entities.AuthRequest;
import com.SesoverApp.Sesover.entities.AuthResponse;
import com.SesoverApp.Sesover.entities.RegisterRequest;
import com.SesoverApp.Sesover.entities.Role;
import com.SesoverApp.Sesover.entities.User;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {
	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;

	public AuthResponse register(RegisterRequest request) {
		// Build a User entity from the RegisterRequest
		var user = User.builder().nomMember(request.getNomMember()) // Correct field name
				.prenomMember(request.getPrenomMember()) // Correct field name
				.emailMember(request.getEmailMember()) // Correct field name
				.telephoneMember(request.getTelephoneMember()) // Correct field name
				.passwordMember(passwordEncoder.encode(request.getPasswordMember()))
				.c_PasswordMember(passwordEncoder.encode(request.getC_PasswordMember()))// Encode password
				.role(Role.USER) // Automatically set role to USER
				.build();

		// Save the user in the repository
		repository.save(user);

		// Generate JWT tokens for the user
		var jwtToken = jwtService.generateToken(user); // Generate access token
		var refreshToken = jwtService.generateRefreshToken(user); // Generate refresh token

		// Return an authentication response containing both tokens
		return AuthResponse.builder().accessToken(jwtToken).refreshToken(refreshToken).build();
	}

	public AuthResponse authenticate(AuthRequest request) {
		// Authenticate the user using the AuthenticationManager
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

		// Find the user by email
		var user = repository.findByEmailMember(request.getEmail())
				.orElseThrow(() -> new RuntimeException("User not found"));

		// Generate the access and refresh tokens
		var jwtToken = jwtService.generateToken(user);
		var refreshToken = jwtService.generateRefreshToken(user);

		// Return an authentication response containing both tokens
		return AuthResponse.builder().accessToken(jwtToken).refreshToken(refreshToken).build();
	}

}
