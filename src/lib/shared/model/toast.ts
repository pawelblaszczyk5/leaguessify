import type { ToastType } from './enums/toastType';

export interface Toast {
	type: ToastType;
	content: string;
}
