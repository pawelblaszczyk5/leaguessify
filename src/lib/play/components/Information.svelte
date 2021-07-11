<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import IoIosStats from 'svelte-icons/io/IoIosStats.svelte';
	import FaCoins from 'svelte-icons/fa/FaCoins.svelte';
	import { get } from 'svelte/store';
	import { game } from '../stores/game';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';
	import { tooltip } from '$lib/shared/actions/tooltip';
	import { checkCanSendRequest } from '../helpers/checkCanSendRequest';
	import { handleRequestNotOk } from '../helpers/handleRequestNotOk';
	import { callErrorToast } from '../helpers/callErrorToast';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';
	import { RevealType } from '$lib/shared/model/enums/revealType';
	import { checkDoesHaveSufficientScoreToReveal } from '../helpers/checkDoesHaveSufficientScoreToReveal';
	import { reduceScoreAfterRevealing } from '../helpers/reduceScoreAfterRevealing';
	import RevealButton from './RevealButton.svelte';

	export let kda: [number, number, number];
	export let gold: number;
	export let participantId: number;

	const revealGold = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.GOLD;

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
			const goldResponse = await fetch(`api/game/participant/gold?${params}`);

			if (!goldResponse.ok) {
				await handleRequestNotOk(goldResponse);
				return;
			}
			const goldData: { gold: number } = await goldResponse.json();

			reduceScoreAfterRevealing(revealType);
			gold = goldData.gold;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const revealKDA = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.KDA;

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
			const kdaResponse = await fetch(`api/game/participant/kda?${params}`);

			if (!kdaResponse.ok) {
				await handleRequestNotOk(kdaResponse);
				return;
			}
			const kdaData: { kills: number; deaths: number; assists: number } = await kdaResponse.json();

			reduceScoreAfterRevealing(revealType);
			kda = [kdaData.kills, kdaData.deaths, kdaData.assists];
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};
</script>

<div class="m-2 text-sm">
	<div class="flex items-center">
		<div class="flex items-center relative" use:tooltip={{ content: 'K/D/A' }}>
			{#if isNaN(kda[0])}
				<RevealButton ariaLabel="Reveal KDA" on:click={revealKDA} />
			{/if}
			<div class="flex items-center">
				<Icon --size="0.875rem">
					<IoIosStats />
				</Icon>
				<span class="sr-only">K/D/A</span>
				<span>
					&nbsp; {!isNaN(kda[0]) ? `${kda[0]}/${kda[1]}/${kda[2]}` : '?/?/?'}
				</span>
			</div>
		</div>
		<div class="flex items-center ml-2 relative" use:tooltip={{ content: 'Gold' }}>
			{#if isNaN(gold)}
				<RevealButton ariaLabel="Reveal gold" on:click={revealGold} />
			{/if}
			<div class="flex items-center">
				<Icon --size="0.875rem">
					<FaCoins />
				</Icon>
				<span class="sr-only">Gold amount:</span>
				<span> &nbsp; {gold ?? '?????'}</span>
			</div>
		</div>
	</div>
</div>
