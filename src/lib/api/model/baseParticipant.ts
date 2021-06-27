import type { Position } from './enums/position';

export interface BaseParticipant {
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
