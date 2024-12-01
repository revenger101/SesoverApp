package com.SesoverApp.Sesover.Repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SesoverApp.Sesover.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	Optional<User> findByEmailMember(String emailMember);
	boolean existsByEmailMember(String emailMember);
}
