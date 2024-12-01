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
		// Check if the email already exists
		if (repository.existsByEmailMember(request.getEmailMember())) {
			throw new EmailAlreadyExistsException("Email already exists.");
		}

		// Build a User entity from the RegisterRequest
		var user = User.builder()
				.nomMember(request.getNomMember())
				.prenomMember(request.getPrenomMember())
				.emailMember(request.getEmailMember())
				.telephoneMember(request.getTelephoneMember())
				.passwordMember(passwordEncoder.encode(request.getPasswordMember()))
				.c_PasswordMember(passwordEncoder.encode(request.getC_PasswordMember())) // Encode password
				.role(Role.USER) // Automatically set role to USER
				.build();

		// Save the user in the repository
		repository.save(user);

		// Generate JWT tokens for the user
		var jwtToken = jwtService.generateToken(user);
		var refreshToken = jwtService.generateRefreshToken(user);

		// Return an authentication response containing both tokens
		return AuthResponse.builder()
				.accessToken(jwtToken)
				.refreshToken(refreshToken)
				.build();
	}


	public AuthResponse authenticate(AuthRequest request) {
		// Authenticate the user
		authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

		// Find the user by email
		var user = repository.findByEmailMember(request.getEmail())
				.orElseThrow(() -> new RuntimeException("User not found"));

		// Generate tokens
		var jwtToken = jwtService.generateToken(user);
		var refreshToken = jwtService.generateRefreshToken(user);

		// Log the user data to ensure 'name' is available
		System.out.println("User Details: " + user.getNomMember() + ", " + user.getEmailMember());

		// Return response with name, email, and tokens
		return AuthResponse.builder()
				.accessToken(jwtToken)
				.refreshToken(refreshToken)
				.email(user.getEmailMember())    // Include email
				.name(user.getNomMember())       // Include name (nomMember)
				.build();
	}


}
