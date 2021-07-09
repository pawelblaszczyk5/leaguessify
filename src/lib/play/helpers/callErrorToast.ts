import { toast } from '$lib/shared/stores/toast';

export const callErrorToast = (message?: string): void => {
	message
		? toast.error(message)
		: toast.error('Unexpected error while retriving data, please try again');
};
