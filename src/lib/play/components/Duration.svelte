<script lang="ts">
	import { tooltip } from '$lib/shared/actions/tooltip';
	import Icon from '$lib/shared/components/Icon.svelte';
	import { formatTime } from '$lib/play/helpers/timeFormatter';
	import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';
	import { get } from 'svelte/store';
	import { game } from '../stores/game';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';
	import { callErrorToast } from '../helpers/callErrorToast';
	import { checkCanSendRequest } from '../helpers/checkCanSendRequest';
	import { handleRequestNotOk } from '../helpers/handleRequestNotOk';
	import { checkDoesHaveSufficientScoreToReveal } from '../helpers/checkDoesHaveSufficientScoreToReveal';
	import { RevealType } from '$lib/shared/model/enums/revealType';
	import { reduceScoreAfterRevealing } from '../helpers/reduceScoreAfterRevealing';
	import RevealButton from './RevealButton.svelte';

	export let gameDuration: number;

	const revealGameDuration = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.DURATION;

		if (!checkDoesHaveSufficientScoreToReveal(revealType)) {
			return;
		}
		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region
		}).toString();

		try {
			const gameDurationResponse = await fetch(`api/game/duration?${params}`);

			if (!gameDurationResponse.ok) {
				await handleRequestNotOk(gameDurationResponse);
				return;
			}
			const gameDurationData: { duration: number } = await gameDurationResponse.json();

			reduceScoreAfterRevealing(revealType);
			gameDuration = gameDurationData.duration;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};
</script>

<p
	class="flex justify-center items-center mb-2 relative"
	use:tooltip={{ content: 'Game duration' }}
>
	<Icon --size="1rem">
		<FaRegClock />
	</Icon>
	<span class="sr-only">Game duration</span>
	&nbsp;{gameDuration ? formatTime(gameDuration) : '??:??'}
	{#if !gameDuration}
		<RevealButton ariaLabel="Reveal game duration" on:click={revealGameDuration} />
	{/if}
</p>
