import type { RevealType } from '$lib/shared/model/enums/revealType';

import { revealPrices } from '$lib/shared/constants/revealPrices';
import { toast } from '$lib/shared/stores/toast';
import { score } from '../stores/score';
import { requestInProgress } from '$lib/shared/stores/requestInProgress';

export const checkDoesHaveSufficientScoreToReveal = (revealType: RevealType): boolean => {
	const isSufficient = score.checkDoesHaveGivenScore(revealPrices[revealType]);

	if (!isSufficient) {
		requestInProgress.endRequest();
		toast.warning("You don't have sufficient score to reveal that information");
	}
	return isSufficient;
};
