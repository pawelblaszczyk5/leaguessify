import { callErrorToast } from './callErrorToast';

export const handleRequestNotOk = async (response: Response): Promise<void> => {
	const errorText = await response.text();

	callErrorToast(errorText);
};
