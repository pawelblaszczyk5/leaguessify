import type { MappedGameData } from '../model/mappedGamedata';
import type { UnmappedGameData } from '../model/unmappedGameData';

export const mapDataFromApi = (dataFromApi: UnmappedGameData): MappedGameData => {
	return {
		gameDuration: dataFromApi.gameDuration,
		participants: dataFromApi.participants.map((participant) => ({
			kills: participant.kills,
			deaths: participant.deaths,
			assists: participant.assists,
			championLevel: participant.champLevel,
			championId: participant.championId,
			championName: participant.championName,
			items: [
				participant.item0,
				participant.item1,
				participant.item2,
				participant.item3,
				participant.item4,
				participant.item5,
				participant.item6
			],
			keystoneId: participant.perks.styles[0].selections[0].perk,
			secondaryRunePathId: participant.perks.styles[1].style,
			position: participant.teamPosition
		})),
		teams: dataFromApi.teams.map((team) => ({
			kills: team.objectives.champion.kills,
			towerKills: team.objectives.tower.kills,
			inhibitorKills: team.objectives.inhibitor.kills,
			dragonKills: team.objectives.dragon.kills,
			baronKills: team.objectives.baron.kills,
			riftHeraldKills: team.objectives.riftHerald.kills,
			bans: team.bans.map((ban) => ban.championId),
			win: team.win
		}))
	};
};
