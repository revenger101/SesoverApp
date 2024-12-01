package com.SesoverApp.Sesover.Services;

import com.SesoverApp.Sesover.Repositories.TeamRepository;
import com.SesoverApp.Sesover.entities.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    public String saveTeam(Team team) {
        // Validate the team name and leader
        if (team.getName() == null || team.getName().trim().isEmpty()) {
            return "Team name is required.";
        }

        if (team.getLeader() == null || team.getLeader().trim().isEmpty()) {
            return "Team leader is required.";
        }

        // Check if the team name already exists
        if (teamRepository.existsByName(team.getName())) {
            return "Team name already exists.";
        }

        // Check if the team leader already exists
        if (teamRepository.existsByLeader(team.getLeader())) {
            return "Team leader already exists.";
        }

        // Try saving the team to the database
        try {
            teamRepository.save(team); // Persist the team object
            return "Team successfully registered!";
        } catch (DataIntegrityViolationException e) {
            // Handle potential database errors (e.g., constraint violations)
            return "Error saving team. Please try again.";
        }
    }
}
