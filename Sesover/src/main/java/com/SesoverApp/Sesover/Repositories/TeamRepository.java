package com.SesoverApp.Sesover.Repositories;

import com.SesoverApp.Sesover.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Long> {
    boolean existsByName(String name);
    boolean existsByLeader(String leader);
}
