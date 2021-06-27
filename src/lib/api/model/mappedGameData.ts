import type { Position } from './enums/position';

export interface MappedGameData {
	gameId: string;
	gameDuration: number;
	participants: Array<MappedParticipant>;
	teams: Array<MappedTeam>;
}

interface MappedTeam {
	championKills: number;
	towerKills: number;
	inhibitorKills: number;
	dragonKills: number;
	baronKills: number;
	riftHeraldKills: number;
	bans: Array<number>;
	win: boolean;
}

interface MappedParticipant {
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
