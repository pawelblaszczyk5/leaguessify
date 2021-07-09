import { callErrorToast } from './callErrorToast';

export const handleRequestNotOk = async (response: Response) => {
	const errorText = await response.text();

	callErrorToast(errorText);
};
