package com.SesoverApp.Sesover.Controllers;


import com.SesoverApp.Sesover.Services.TeamService;
import com.SesoverApp.Sesover.entities.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teams")
public class TeamController {
    @Autowired
    private TeamService teamService;

    @PostMapping("/register")
    public ResponseEntity<String> registerTeam(@RequestBody Team team) {
        // Call the service method and get the result message
        String result = teamService.saveTeam(team);

        // Check if the result indicates a failure
        if (result.contains("already exists")) {
            // Return a Bad Request (400) if the team name or leader is already taken
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(result);
        }

        // If registration is successful, return a Created (201) response
        return ResponseEntity.status(HttpStatus.CREATED).body(result);
    }
}
