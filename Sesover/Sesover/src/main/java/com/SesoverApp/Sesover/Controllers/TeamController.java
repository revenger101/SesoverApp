package com.SesoverApp.Sesover.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.SesoverApp.Sesover.Services.TeamService;
import com.SesoverApp.Sesover.entities.Team;
import com.SesoverApp.Sesover.entities.TeamRequest;

@RestController
@RequestMapping("/teams")
@CrossOrigin("*")
public class TeamController {
	@Autowired
	private TeamService teamService;

	@PostMapping("/add")
	public ResponseEntity<Team> addTeam(@RequestBody TeamRequest request) {
		Team team = new Team();
		team.setTeamName(request.getTeamName());
		team.setLeaderName(request.getLeaderName());
		team.setDescription(request.getDescription());
		team.setGame(request.getGame());
		team.setInGameNames(request.getInGameNames()); // Populate in-game names

		Team savedTeam = teamService.addTeam(team);

		return ResponseEntity.ok(savedTeam);
	}
}
