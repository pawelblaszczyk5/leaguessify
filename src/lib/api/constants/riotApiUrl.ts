import { GameRegion } from '$lib/shared/model/enums/gameRegion';

export const riotAPI: Record<GameRegion, string> = {
	[GameRegion.EUNE]: 'europe',
	[GameRegion.EUW]: 'europe',
	[GameRegion.KR]: 'asia',
	[GameRegion.JP]: 'asia',
	[GameRegion.NA]: 'americas'
};
