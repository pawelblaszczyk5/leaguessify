import type { GameRegion } from '$lib/shared/model/enums/gameRegion';
import type { Position } from '$lib/shared/model/enums/position';

export interface BaseGameData {
	gameId: number;
	gameRegion: GameRegion;
	participants: Array<BaseParticipant>;
	teams: Array<Record<string, never>>;
}

interface BaseParticipant {
	championName: string;
	championId: number;
	position: Position;
}
