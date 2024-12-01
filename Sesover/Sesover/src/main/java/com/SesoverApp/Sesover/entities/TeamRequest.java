package com.SesoverApp.Sesover.entities;

import java.util.List;

import lombok.Data;

@Data
public class TeamRequest {
	private String teamName;
	private String leaderName;
	private String description;
	private Games game;
	private List<String> inGameNames;
}