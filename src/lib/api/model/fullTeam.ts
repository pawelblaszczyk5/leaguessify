export interface FullTeam {
	bans: Array<{ championId: number }>;
	objectives: {
		baron: { kills: number };
		champion: { kills: number };
		dragon: { kills: number };
		riftHerald: { kills: number };
		inhibitor: { kills: number };
	};
	win: boolean;
}
