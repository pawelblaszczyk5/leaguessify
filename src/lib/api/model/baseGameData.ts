import type { Position } from './enums/position';

export interface BaseGameData {
	gameId: string;
	gameDuration: number;
	participants: Array<BaseParticipant>;
}

interface BaseParticipant {
	championName: string;
	championId: number;
	position: Position;
}
