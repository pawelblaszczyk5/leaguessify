import { RevealType } from '../model/enums/revealType';

export const revealPrices: Record<RevealType, number> = {
	[RevealType.DURATION]: 200,
	[RevealType.CHAMPION_KILLS]: 400,
	[RevealType.TOWER_KILLS]: 800,
	[RevealType.DRAGON_KILLS]: 600,
	[RevealType.RIFT_HERALD_KILLS]: 300,
	[RevealType.BARON_NASHOR_KILLS]: 700,
	[RevealType.INHIBITOR_KILLS]: 900,
	[RevealType.SUMMONERS]: 100,
	[RevealType.RUNES]: 100,
	[RevealType.CHAMPION_LEVEL]: 200,
	[RevealType.ITEMS]: 400,
	[RevealType.KDA]: 500,
	[RevealType.GOLD]: 300
};
