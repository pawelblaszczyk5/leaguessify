import type { BaseGameData } from '../model/baseGameData';
import type { MappedGameData } from '../model/mappedGamedata';

export const getBaseGameData = (fullGameData: MappedGameData): BaseGameData => ({
	gameDuration: fullGameData.gameDuration,
	gameId: fullGameData.gameId,
	participants: fullGameData.participants.map((participant) => ({
		championId: participant.championId,
		championName: participant.championName,
		position: participant.position
	}))
});
