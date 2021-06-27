import type { Position } from './enums/position';

export interface BaseGameStats {
	gameDuration: number;
	participants: Array<BaseParticipant>;
	teams: Array<BaseTeam>;
	bans: Array<number>;
}

interface BaseTeam {
	kills: number;
	towerKills: number;
	inhibitorKills: number;
	dragonKills: number;
	baronKills: number;
	riftHeraldKills: number;
	win: boolean;
}

interface BaseParticipant {
	kills: number;
	deaths: number;
	assists: number;
	championLevel: number;
	championId: number;
	championName: string;
	items: Array<number>;
	keystoneId: number;
	secondaryRunePathId: number;
	position: Position;
}
