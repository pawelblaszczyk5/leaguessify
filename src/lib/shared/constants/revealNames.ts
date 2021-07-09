import { RevealType } from '../model/enums/revealType';

export const revealNames: Record<RevealType, string> = {
	[RevealType.DURATION]: 'Game duration',
	[RevealType.CHAMPION_KILLS]: 'Champion kills',
	[RevealType.TOWER_KILLS]: 'Tower kills',
	[RevealType.DRAGON_KILLS]: 'Dragon kills',
	[RevealType.RIFT_HERALD_KILLS]: 'Rift Herald Kills',
	[RevealType.BARON_NASHOR_KILLS]: 'Baron Nashor Kills',
	[RevealType.INHIBITOR_KILLS]: 'Inhibitor Kills',
	[RevealType.SUMMONERS]: 'Summoner spells',
	[RevealType.RUNES]: 'Runes',
	[RevealType.CHAMPION_LEVEL]: 'Champion level',
	[RevealType.ITEMS]: 'Items',
	[RevealType.KDA]: 'K/D/A',
	[RevealType.GOLD]: 'Gold'
};
