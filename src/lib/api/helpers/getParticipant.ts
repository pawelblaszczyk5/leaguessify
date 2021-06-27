import type { GameRegion } from '../model/enums/gameRegion';
import type { MappedParticipant } from '../model/mappedGameData';

import { getGameStats } from './getGameStats';

export const getParticipant = async (
	gameRegion: GameRegion,
	gameId: number,
	participantId: number
): Promise<MappedParticipant> => {
	const gameStats = await getGameStats(gameRegion, gameId);
	const participant = gameStats.participants.find(
		(participant) => participant.championId === participantId
	);

	if (participant) {
		return participant;
	} else {
		throw {
			status: 404,
			message: "Couldn't find participant with given ID"
		};
	}
};
