<script lang="ts">
	import { get } from 'svelte/store';
	import { runeIcon } from '../../../assets/runeIcon';
	import runesData from '../../shared/data/rune.json';
	import { game } from '../stores/game';
	import { tooltip } from '$lib/shared/actions/tooltip';
	import { checkCanSendRequest } from '../helpers/checkCanSendRequest';
	import { callErrorToast } from '../helpers/callErrorToast';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';
	import { handleRequestNotOk } from '../helpers/handleRequestNotOk';
	import { RevealType } from '$lib/shared/model/enums/revealType';
	import { checkDoesHaveSufficientScoreToReveal } from '../helpers/checkDoesHaveSufficientScoreToReveal';
	import { reduceScoreAfterRevealing } from '../helpers/reduceScoreAfterRevealing';
	import RevealButton from './RevealButton.svelte';

	export let runes: [number, number];
	export let participantId: number;

	const revealRunes = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.RUNES;

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
			const runesResponse = await fetch(`api/game/participant/runes?${params}`);

			if (!runesResponse.ok) {
				await handleRequestNotOk(runesResponse);
				return;
			}
			const runesData: { keystone: number; secondaryRunePath: number } = await runesResponse.json();

			reduceScoreAfterRevealing(revealType);
			runes = [runesData.keystone, runesData.secondaryRunePath];
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const resolveKeystoneImageSrc = (id: number): string => {
		const keystoneKey = Object.values(
			Object.values(runesData).map((path) => {
				return Object.entries(path.keystones);
			})
		)
			.flat()
			.find(([keystoneId]) => {
				return keystoneId === id.toString();
			})[1].key;

		return runeIcon[keystoneKey];
	};

	const resolveSecondaryRunePathImageSrc = (id: number): string => {
		return runeIcon[runesData[id].key];
	};

	const resolveKeystoneName = (id: number) => {
		return Object.values(
			Object.values(runesData).map((path) => {
				return Object.entries(path.keystones);
			})
		)
			.flat()
			.find(([keystoneId]) => {
				return keystoneId === id.toString();
			})[1].name;
	};

	const resolveSecondaryRunePathName = (id: number): string => {
		return runesData[id].name;
	};
</script>

<div
	class="flex flex-col justify-between relative"
	use:tooltip={{ content: 'Runes', shouldShow: !Boolean(runes[0]) }}
>
	<div
		class="first:mb-2 nm-flat-gray-200 dark:nm-flat-gray-800 w-7 h-7 md:w-9 md:h-9 rounded-md overflow-hidden flex items-center justify-center"
		use:tooltip={{
			content: Boolean(runes[0]) ? resolveKeystoneName(runes[0]) : '',
			shouldShow: Boolean(runes[0])
		}}
	>
		{#if runes[0]}
			<img
				class="h-6 w-6"
				src={resolveKeystoneImageSrc(runes[0])}
				alt={resolveKeystoneName(runes[0])}
				width="28"
				height="28"
			/>
		{:else}
			<p>?</p>
		{/if}
	</div>
	<div
		class="nm-flat-gray-200 dark:nm-flat-gray-800 w-7 h-7 md:w-9 md:h-9 rounded-md overflow-hidden flex items-center justify-center"
		use:tooltip={{
			content: Boolean(runes[1]) ? resolveSecondaryRunePathName(runes[1]) : '',
			shouldShow: Boolean(runes[1])
		}}
	>
		{#if runes[1]}
			<img
				class="h-5 w-5"
				src={resolveSecondaryRunePathImageSrc(runes[1])}
				alt={resolveSecondaryRunePathName(runes[1])}
				width="28"
				height="28"
			/>
		{:else}
			<p>?</p>
		{/if}
	</div>
	{#if !runes[0]}
		<RevealButton ariaLabel="Reveal runes" on:click={revealRunes} />
	{/if}
</div>
