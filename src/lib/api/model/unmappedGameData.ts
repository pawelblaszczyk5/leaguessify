import type { Position } from './enums/position';

export interface UnmappedGameData {
	info: {
		gameDuration: number;
		teams: Array<UnmappedTeam>;
		participants: Array<UnmappedParticipant>;
	};
}

interface UnmappedTeam {
	bans: Array<{ championId: number }>;
	objectives: {
		baron: { kills: number };
		champion: { kills: number };
		dragon: { kills: number };
		riftHerald: { kills: number };
		inhibitor: { kills: number };
		tower: { kills: number };
	};
	win: boolean;
}

interface UnmappedParticipant {
	kills: number;
	deaths: number;
	assists: number;
	champLevel: number;
	championId: number;
	championName: string;
	goldEarned: number;
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
	summoner1Id: number;
	summoner2Id: number;
	teamPosition: Position;
}
