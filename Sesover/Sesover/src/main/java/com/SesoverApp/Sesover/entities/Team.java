package com.SesoverApp.Sesover.entities;

import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "team")
public class Team {
	@Id
	@GeneratedValue
	private int id;
	private String teamName;
	private String leaderName;
	private String description;
	@Enumerated(EnumType.STRING)
	private Games game;

	@ElementCollection(fetch = FetchType.LAZY)
	@CollectionTable(name = "team_in_game_names", joinColumns = @JoinColumn(name = "team_id"))
	@Column(name = "in_game_name")
	private List<String> inGameNames; // List of in-game names, stored in the same team table

}
