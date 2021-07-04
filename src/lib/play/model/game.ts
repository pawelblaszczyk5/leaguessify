import type { GameRegion } from '$lib/shared/model/enums/gameRegion';
import type { Position } from '$lib/shared/model/enums/position';

export interface Game {
	gameId: number;
	gameRegion: GameRegion;
	gameDuration: number;
	participants: [
		Participant,
		Participant,
		Participant,
		Participant,
		Participant,
		Participant,
		Participant,
		Participant,
		Participant
	];
	teams: [Team, Team];
}

export interface Participant {
	kills?: number;
	deaths?: number;
	assists?: number;
	championLevel?: number;
	championId: number;
	championName: string;
	gold?: number;
	items?: Array<number>;
	keystoneId?: number;
	secondaryRunePathId?: number;
	summoner1Id?: number;
	summoner2Id?: number;
	position: Position;
}

export interface Team {
	championKills?: number;
	towerKills?: number;
	inhibitorKills?: number;
	dragonKills?: number;
	baronKills?: number;
	riftHeraldKills?: number;
	bans?: Array<number>;
}
