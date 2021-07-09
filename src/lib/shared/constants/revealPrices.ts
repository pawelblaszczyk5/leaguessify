import { RevealType } from '../model/enums/revealType';

export const revealPrices: Record<RevealType, number> = {
	[RevealType.DURATION]: 200,
	[RevealType.CHAMPION_KILLS]: 300,
	[RevealType.TOWER_KILLS]: 750,
	[RevealType.DRAGON_KILLS]: 500,
	[RevealType.RIFT_HERALD_KILLS]: 300,
	[RevealType.BARON_NASHOR_KILLS]: 800,
	[RevealType.INHIBITOR_KILLS]: 950,
	[RevealType.SUMMONERS]: 100,
	[RevealType.RUNES]: 100,
	[RevealType.CHAMPION_LEVEL]: 300,
	[RevealType.ITEMS]: 400,
	[RevealType.KDA]: 450,
	[RevealType.GOLD]: 300
};
