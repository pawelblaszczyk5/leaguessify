import type { MappedGameData } from '../model/mappedGameData';
import type { UnmappedGameData } from '../model/unmappedGameData';

export const mapDataFromApi = ({ info }: UnmappedGameData, id: string): MappedGameData => ({
	gameId: id,
	gameDuration: info.gameDuration,
	participants: info.participants.map((participant) => ({
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
		position: participant.teamPosition,
		gold: participant.goldEarned,
		summoner1Id: participant.summoner1Id,
		summoner2Id: participant.summoner2Id
	})),
	teams: info.teams.map((team) => ({
		championKills: team.objectives.champion.kills,
		towerKills: team.objectives.tower.kills,
		inhibitorKills: team.objectives.inhibitor.kills,
		dragonKills: team.objectives.dragon.kills,
		baronKills: team.objectives.baron.kills,
		riftHeraldKills: team.objectives.riftHerald.kills,
		bans: team.bans.map((ban) => ban.championId),
		win: team.win
	}))
});
