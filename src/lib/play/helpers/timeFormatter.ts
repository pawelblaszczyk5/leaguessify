const formatter = new Intl.DateTimeFormat('default', {
	minute: 'numeric',
	second: 'numeric',
	timeZone: 'UTC'
});

export const formatTime = (time: number): string => {
	return formatter.format(time);
};
