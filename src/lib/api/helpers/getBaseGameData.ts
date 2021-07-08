import type { BaseGameData } from '../model/baseGameData';
import type { MappedGameData } from '../model/mappedGameData';

export const getBaseGameData = (fullGameData: MappedGameData): BaseGameData => ({
	gameId: fullGameData.gameId,
	gameRegion: fullGameData.gameRegion,
	participants: fullGameData.participants.map((participant) => ({
		championId: participant.championId,
		championName: participant.championName,
		position: participant.position
	})),
	teams: [{}, {}]
});
