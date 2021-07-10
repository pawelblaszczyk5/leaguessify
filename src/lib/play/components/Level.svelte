<script lang="ts">
	import { get } from 'svelte/store';
	import { game } from '../stores/game';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';
	import Icon from '$lib/shared/components/Icon.svelte';
	import { tooltip } from '$lib/shared/actions/tooltip';
	import { checkCanSendRequest } from '../helpers/checkCanSendRequest';
	import { handleRequestNotOk } from '../helpers/handleRequestNotOk';
	import { callErrorToast } from '../helpers/callErrorToast';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';
	import { RevealType } from '$lib/shared/model/enums/revealType';
	import { checkDoesHaveSufficientScoreToReveal } from '../helpers/checkDoesHaveSufficientScoreToReveal';
	import { reduceScoreAfterRevealing } from '../helpers/reduceScoreAfterRevealing';

	export let championLevel: number;
	export let participantId: number;

	const revealChampionLevel = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.CHAMPION_LEVEL;

		if (!checkDoesHaveSufficientScoreToReveal(revealType)) {
			return;
		}
		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			participantId: participantId.toString()
		}).toString();

		try {
			const championLevelResponse = await fetch(`api/game/participant/level?${params}`);

			if (!championLevelResponse.ok) {
				await handleRequestNotOk(championLevelResponse);
				return;
			}
			const championLevelData: { level: number } = await championLevelResponse.json();

			reduceScoreAfterRevealing(revealType);
			championLevel = championLevelData.level;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};
</script>

<div
	class="absolute h-6 w-6 rounded-full bg-blue-500 bottom-0 right-0 flex items-center justify-center text-xs text-gray-200"
	class:bg-opacity-80={!championLevel}
	use:tooltip={{
		content: 'Champion level'
	}}
>
	<span class="sr-only">Champion level</span>
	{championLevel ?? '??'}
	{#if !championLevel}
		<button
			aria-label="Reveal level"
			on:click={revealChampionLevel}
			class="absolute bg-blue-500 bg-opacity-80"
		>
			<Icon --size="1rem">
				<FaEye />
			</Icon>
		</button>
	{/if}
</div>
