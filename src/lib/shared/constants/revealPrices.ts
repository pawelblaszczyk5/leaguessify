import { RevealType } from '../model/enums/revealType';

export const revealPrices: Record<RevealType, number> = {
	[RevealType.DURATION]: 250,
	[RevealType.CHAMPION_KILLS]: 600,
	[RevealType.TOWER_KILLS]: 750,
	[RevealType.DRAGON_KILLS]: 500,
	[RevealType.RIFT_HERALD_KILLS]: 450,
	[RevealType.BARON_NASHOR_KILLS]: 800,
	[RevealType.INHIBITOR_KILLS]: 950,
	[RevealType.SUMMONERS]: 100,
	[RevealType.RUNES]: 100,
	[RevealType.CHAMPION_LEVEL]: 350,
	[RevealType.ITEMS]: 450,
	[RevealType.KDA]: 500,
	[RevealType.GOLD]: 400
};
