import { toast } from '$lib/shared/stores/toast';

export const callRequestInProgressToast = (): void => {
	toast.warning('Request already in progress, please wait');
};
