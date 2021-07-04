import type { GameRegion } from '../../shared/model/enums/gameRegion';
import type { MappedTeam } from '../model/mappedGameData';

import { getGameStats } from './getGameStats';

export const getTeam = async (
	gameRegion: GameRegion,
	gameId: number,
	teamId: number
): Promise<MappedTeam> => {
	const gameStats = await getGameStats(gameRegion, gameId);
	const team = gameStats.teams[teamId];

	if (team) {
		return team;
	} else {
		throw {
			status: 404,
			message: "Couldn't find team with given ID"
		};
	}
};
