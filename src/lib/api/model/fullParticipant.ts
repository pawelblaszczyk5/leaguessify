import type { Position } from './enums/position';

export interface FullParticipant {
	kills: number;
	deaths: number;
	assists: number;
	champLevel: number;
	championId: number;
	championName: number;
	item0: number;
	item1: number;
	item2: number;
	item3: number;
	item4: number;
	item5: number;
	item6: number;
	perks: {
		styles: Array<{ style: number; selections: Array<{ perk: number }> }>;
	};
	teamPosition: Position;
}
