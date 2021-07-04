import type { BaseGameData } from '../../shared/model/baseGameData';
import type { MappedGameData } from '../model/mappedGameData';

export const getBaseGameData = (fullGameData: MappedGameData): BaseGameData => ({
	gameDuration: fullGameData.gameDuration,
	gameId: fullGameData.gameId,
	gameRegion: fullGameData.gameRegion,
	participants: fullGameData.participants.map((participant) => ({
		championId: participant.championId,
		championName: participant.championName,
		position: participant.position
	}))
});
