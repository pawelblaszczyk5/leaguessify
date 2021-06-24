import { riotApiURL } from '$lib/constants/riotApiURL';
import type { GameRegion } from '$lib/model/enums/gameRegion';

export const gameStats = async (region: GameRegion, id: number): Promise<unknown> => {
	const apiKey = import.meta.env.VITE_LEAGUE_OF_LEGENDS_API_KEY as string;
	const gameStatsResponse = await fetch(
		`https://${riotApiURL[region]}.api.riotgames.com/lol/match/v5/matches/${region}_${id}`,
		{
			headers: {
				'X-Riot-Token': apiKey
			}
		}
	);
	const gameStatsData = await gameStatsResponse.json();

	return gameStatsData;
};
