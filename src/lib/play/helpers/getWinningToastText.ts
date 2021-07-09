const winningToastrTexts: ReadonlyArray<string> = <const>[
	'Congrats, keep going!',
	'Keep it on, you rock!',
	'Nice one!'
];

export const getWinningToastText = (): string =>
	winningToastrTexts[Math.floor(Math.random() * winningToastrTexts.length)];
