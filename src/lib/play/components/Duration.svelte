<script lang="ts">
	import { tooltip } from '$lib/shared/actions/tooltip';
	import Icon from '$lib/shared/components/Icon.svelte';
	import { formatTime } from '$lib/play/helpers/timeFormatter';
	import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';
	import { get } from 'svelte/store';
	import { game } from '../stores/game';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';
	import { callErrorToast } from '../helpers/callErrorToast';
	import { callRequestInProgressToast } from '../helpers/callRequestInProgressToast';

	export let gameDuration: number;

	const revealGameDuration = async () => {
		const isRequestInProgress = get(requestInProgress);

		if (isRequestInProgress) {
			callRequestInProgressToast();
			return;
		}
		requestInProgress.startRequest();

		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region
		}).toString();

		try {
			const gameDurationResponse = await fetch(`api/game/duration?${params}`);

			if (!gameDurationResponse.ok) {
				const errorText = await gameDurationResponse.text();

				callErrorToast(errorText);
				return;
			}
			const gameDurationData: { duration: number } = await gameDurationResponse.json();

			gameDuration = gameDurationData.duration;
		} catch (e) {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};
</script>

<p
	class="flex justify-center items-center mb-2 relative"
	use:tooltip={{ content: 'Game duration', shouldShow: Boolean(gameDuration) }}
>
	<Icon --size="1rem">
		<FaRegClock />
	</Icon>
	<span class="sr-only">Game duration</span>
	&nbsp;{gameDuration ? formatTime(gameDuration) : '??:??'}
	{#if !gameDuration}
		<button
			aria-label="Reveal game duration"
			on:click={revealGameDuration}
			class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
		>
			<Icon --size="1rem">
				<FaEye />
			</Icon>
		</button>
	{/if}
</p>
