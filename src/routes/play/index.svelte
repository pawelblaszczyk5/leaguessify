<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const baseGameResponse = await input.fetch('api/game/base');

			if (!baseGameResponse.ok) {
				const errorText = await baseGameResponse.text();

				throw { status: baseGameResponse.status, message: errorText };
			}
			const baseGameData = await baseGameResponse.json();

			return {
				props: {
					gameStats: baseGameData
				}
			};
		} catch (e) {
			return {
				status: e.status ?? 500,
				error: e.message ?? 'Unexpected error occurred'
			};
		}
	};
</script>

<script lang="ts">
	import type { Game } from '$lib/play/model/game';

	import Team from '$lib/play/components/Team.svelte';
	import { game } from '$lib/play/stores/game';
	import Duration from '$lib/play/components/Duration.svelte';
	import Score from '$lib/play/components/Score.svelte';
	import { checkCanSendRequest } from '$lib/play/helpers/checkCanSendRequest';
	import { get } from 'svelte/store';
	import { handleRequestNotOk } from '$lib/play/helpers/handleRequestNotOk';
	import { callErrorToast } from '$lib/play/helpers/callErrorToast';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';

	export let gameStats: Game;

	game.setGameData({ id: gameStats.gameId, region: gameStats.gameRegion });

	const fetchNewGame = async () => {};

	const handleLoss = () => {};

	const handleWin = () => {};

	const checkGuess = async (event: CustomEvent<number>) => {
		if (!checkCanSendRequest()) {
			return;
		}

		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			winner: event.detail.toString()
		}).toString();

		try {
			const resultResponse = await fetch(`api/game/result?${params}`);

			if (!resultResponse.ok) {
				await handleRequestNotOk(resultResponse);
				return;
			}
			const resultData: { result: 'WIN' | 'LOST' } = await resultResponse.json();

			resultData.result === 'WIN' ? handleWin() : handleLoss();
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};
</script>

<section class="flex flex-col justify-center items-center">
	<Score />
	{#if gameStats}
		<Duration gameDuration={gameStats.gameDuration} />
		<div class="flex items-center justify-center flex-col md:flex-row my-4">
			<Team
				participants={gameStats.participants.slice(0, 5)}
				team={gameStats.teams[0]}
				teamIndex={0}
				on:guess={checkGuess}
			/>
			<Team
				participants={gameStats.participants.slice(5, 10)}
				team={gameStats.teams[1]}
				teamIndex={1}
				on:guess={checkGuess}
			/>
		</div>
	{/if}
</section>
