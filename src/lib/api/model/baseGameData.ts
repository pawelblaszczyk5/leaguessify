import type { GameRegion } from './enums/gameRegion';
import type { Position } from './enums/position';

export interface BaseGameData {
	gameId: number;
	gameRegion: GameRegion;
	gameDuration: number;
	participants: Array<BaseParticipant>;
}

interface BaseParticipant {
	championName: string;
	championId: number;
	position: Position;
}
