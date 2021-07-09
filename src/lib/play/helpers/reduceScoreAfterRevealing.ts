import type { RevealType } from '$lib/shared/model/enums/revealType';

import { revealPrices } from '$lib/shared/constants/revealPrices';
import { score } from '../stores/score';

export const reduceScoreAfterRevealing = (revealType: RevealType): void => {
	score.decrease(revealPrices[revealType]);
};
