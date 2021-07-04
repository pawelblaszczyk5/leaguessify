import type { GameRegion } from '../../api/model/enums/gameRegion';
import type { Position } from '../../api/model/enums/position';

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
