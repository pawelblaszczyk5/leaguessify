import { GameRegion } from '$lib/model/enums/gameRegion';

export const riotApiURL: Record<GameRegion, string> = {
	[GameRegion.EUNE]: 'europe',
	[GameRegion.EUW]: 'europe',
	[GameRegion.KR]: 'asia',
	[GameRegion.JP]: 'asia',
	[GameRegion.NA]: 'americas'
};
