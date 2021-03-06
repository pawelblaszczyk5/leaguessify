<script lang="ts">
	import { get } from 'svelte/store';
	import { summonerIcon } from '../../../assets/summonerIcon';
	import summonersData from '../../shared/data/summoner.json';
	import { game } from '../stores/game';
	import { tooltip } from '$lib/shared/actions/tooltip';
	import { checkCanSendRequest } from '../helpers/checkCanSendRequest';
	import { handleRequestNotOk } from '../helpers/handleRequestNotOk';
	import { callErrorToast } from '../helpers/callErrorToast';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';
	import { checkDoesHaveSufficientScoreToReveal } from '../helpers/checkDoesHaveSufficientScoreToReveal';
	import { RevealType } from '$lib/shared/model/enums/revealType';
	import { reduceScoreAfterRevealing } from '../helpers/reduceScoreAfterRevealing';
	import RevealButton from './RevealButton.svelte';

	export let participantId: number;
	export let summoners: [number, number];

	const revealSummoners = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.SUMMONERS;

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
			const summonersResponse = await fetch(`api/game/participant/summonerSpells?${params}`);

			if (!summonersResponse.ok) {
				await handleRequestNotOk(summonersResponse);
				return;
			}
			const summonersData: { summonerSpell1: number; summonerSpell2: number } =
				await summonersResponse.json();

			reduceScoreAfterRevealing(revealType);
			summoners = [summonersData.summonerSpell1, summonersData.summonerSpell2];
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const resolveSummonerImageSrc = (id: number): string => {
		return summonerIcon[summonersData[id].id];
	};

	const resolveSummonerName = (id: number): string => {
		return summonersData[id].name;
	};
</script>

<div
	class="flex flex-col justify-between h-full relative"
	use:tooltip={{ content: 'Summoner spells', shouldShow: !Boolean(summoners[0]) }}
>
	{#each summoners as summoner}
		<div
			class="first:mb-2 nm-flat-gray-200 dark:nm-flat-gray-800 w-7 h-7 md:w-9 md:h-9 rounded-md overflow-hidden flex items-center justify-center"
			use:tooltip={{
				content: Boolean(summoner) ? resolveSummonerName(summoner) : '',
				shouldShow: Boolean(summoner)
			}}
		>
			{#if summoner}
				<img
					class="w-full h-full"
					src={resolveSummonerImageSrc(summoner)}
					alt={resolveSummonerName(summoner)}
					width="28"
					height="28"
				/>
			{:else}
				<p>?</p>
			{/if}
		</div>
	{/each}
	{#if !summoners[0]}
		<RevealButton ariaLabel="Reveal summoner spells" on:click={revealSummoners} />
	{/if}
</div>
