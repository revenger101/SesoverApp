package com.SesoverApp.Sesover;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.SesoverApp.Sesover.Repositories.UserRepository;
import com.SesoverApp.Sesover.entities.Role;
import com.SesoverApp.Sesover.entities.User;

@SpringBootApplication
public class SesoverApplication {

	private final UserRepository repository;

	private final PasswordEncoder passwordEncoder;

	public SesoverApplication(UserRepository repository, PasswordEncoder passwordEncoder) {
		this.repository = repository;
		this.passwordEncoder = passwordEncoder;
	}

	public static void main(String[] args) {
		SpringApplication.run(SesoverApplication.class, args);
	}

	@Bean
	CommandLineRunner run() {
		return args -> {
			// Check if admin already exists
			if (repository.findByEmailMember("admin@sesover.com").isEmpty()) {
				User admin = User.builder().nomMember("Admin").prenomMember("AdminPrenom")
						.emailMember("admin@sesover.com").telephoneMember(0000000000)
						.passwordMember(passwordEncoder.encode("admin123"))
																			// admin
																			// password
						.role(Role.ADMIN) // Assign ADMIN role
						.build();

				repository.save(admin);
				System.out.println("Admin user created with email: admin@sesover.com and password: admin123");
			}
		};
	}
}
