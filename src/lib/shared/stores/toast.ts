import type { Toast } from '../model/toast';

import { writable } from 'svelte/store';
import { ToastType } from '../model/enums/toastType';

const createToastStore = () => {
	const { subscribe, update } = writable<Array<Toast>>([]);

	const addToast = (content: string, type: ToastType): Toast => {
		const toast = {
			content,
			type
		};

		update((currentToasts) => [...currentToasts, toast]);
		setTimeout(() => {
			removeToast(toast);
		}, 3000);
		return toast;
	};

	const removeToast = (toastToRemove: Toast) => {
		update((currentToasts) => currentToasts.filter((toast) => toast !== toastToRemove));
	};

	return {
		subscribe,
		warning: (content: string) => {
			return addToast(content, ToastType.WARNING);
		},
		error: (content: string) => {
			return addToast(content, ToastType.ERROR);
		},
		success: (content: string) => {
			return addToast(content, ToastType.SUCCESS);
		},
		removeToast
	};
};

export const toast = createToastStore();
