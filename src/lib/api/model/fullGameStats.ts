import type { FullParticipant } from './fullParticipant';
import type { FullTeam } from './fullTeam';

export interface FullGameStats {
	gameDuration: number;
	teams: Array<FullTeam>;
	participants: Array<FullParticipant>;
}
