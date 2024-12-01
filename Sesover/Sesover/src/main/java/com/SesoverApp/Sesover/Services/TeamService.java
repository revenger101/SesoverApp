package com.SesoverApp.Sesover.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SesoverApp.Sesover.Repositories.TeamRepository;
import com.SesoverApp.Sesover.entities.Team;

@Service
public class TeamService {
	@Autowired
	private TeamRepository teamRepository;

	public Team addTeam(Team team) {
		return teamRepository.save(team);
	}
}
