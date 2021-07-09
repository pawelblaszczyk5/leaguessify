import { requestInProgress } from '$lib/shared/stores/requestInProgress';
import { toast } from '$lib/shared/stores/toast';
import { get } from 'svelte/store';

export const checkCanSendRequest = (): boolean => {
	const isRequestInProgress = get(requestInProgress);

	if (isRequestInProgress) {
		toast.warning('Request already in progress, please wait');
		return false;
	}

	requestInProgress.startRequest();
	return true;
};
