import type { RevealType } from '$lib/shared/model/enums/revealType';

import { revealPrices } from '$lib/shared/constants/revealPrices';
import { toast } from '$lib/shared/stores/toast';
import { score } from '../stores/score';
import { requestInProgress } from '$lib/shared/stores/requestInProgress';

export const checkDoesHaveSufficientScoreToReveal = (revealType: RevealType): boolean => {
	const revealPrice = revealPrices[revealType];
	const isSufficient = score.checkDoesHaveGivenScore(revealPrice);

	if (!isSufficient) {
		requestInProgress.endRequest();
		toast.warning(`You need to have ${revealPrice} points to reveal that information!`);
	}
	return isSufficient;
};
