package com.SesoverApp.Sesover.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SesoverApp.Sesover.entities.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, Integer> {

}
