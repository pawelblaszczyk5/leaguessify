import type { BaseParticipant } from './baseParticipant';
import type { BaseTeam } from './baseTeam';

export interface BaseGameStats {
	gameDuration: number;
	participants: Array<BaseParticipant>;
	teams: Array<BaseTeam>;
	bans: Array<number>;
}
