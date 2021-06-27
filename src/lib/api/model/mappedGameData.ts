import type { GameRegion } from './enums/gameRegion';
import type { Position } from './enums/position';

export interface MappedGameData {
	gameId: number;
	gameRegion: GameRegion;
	gameDuration: number;
	participants: Array<MappedParticipant>;
	teams: Array<MappedTeam>;
}

export interface MappedTeam {
	championKills: number;
	towerKills: number;
	inhibitorKills: number;
	dragonKills: number;
	baronKills: number;
	riftHeraldKills: number;
	bans: Array<number>;
	win: boolean;
}

export interface MappedParticipant {
	kills: number;
	deaths: number;
	assists: number;
	championLevel: number;
	championId: number;
	championName: string;
	gold: number;
	items: Array<number>;
	keystoneId: number;
	secondaryRunePathId: number;
	summoner1Id: number;
	summoner2Id: number;
	position: Position;
}
