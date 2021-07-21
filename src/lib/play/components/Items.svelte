<script lang="ts">
	import { get } from 'svelte/store';
	import { itemIcon } from '../../../assets/itemIcon';
	import { game } from '../stores/game';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';
	import Icon from '$lib/shared/components/Icon.svelte';
	import itemData from '$lib/shared/data/item.json';
	import { tooltip } from '$lib/shared/actions/tooltip';
	import { checkCanSendRequest } from '../helpers/checkCanSendRequest';
	import { handleRequestNotOk } from '../helpers/handleRequestNotOk';
	import { callErrorToast } from '../helpers/callErrorToast';
	import { requestInProgress } from '$lib/shared/stores/requestInProgress';
	import { RevealType } from '$lib/shared/model/enums/revealType';
	import { checkDoesHaveSufficientScoreToReveal } from '../helpers/checkDoesHaveSufficientScoreToReveal';
	import { reduceScoreAfterRevealing } from '../helpers/reduceScoreAfterRevealing';

	export let items: Array<number>;
	export let participantId: number;
	export let reversed = false;

	const revealItems = async () => {
		if (!checkCanSendRequest()) {
			return;
		}
		const revealType = RevealType.ITEMS;

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
			const itemsResponse = await fetch(`api/game/participant/items?${params}`);

			if (!itemsResponse.ok) {
				await handleRequestNotOk(itemsResponse);
				return;
			}
			const itemsData: { items: Array<number> } = await itemsResponse.json();

			reduceScoreAfterRevealing(revealType);
			items = itemsData.items;
		} catch {
			callErrorToast();
		} finally {
			requestInProgress.endRequest();
		}
	};

	const resolveItemImageSrc = (id: number): string => {
		return itemIcon['item' + id];
	};

	const resolveItemName = (id: number): string => {
		return itemData[id].name;
	};
</script>

<div class="flex items-center justify-center relative" class:flex-row-reverse={reversed}>
	{#if !items}
		<button
			aria-label="Reveal items"
			on:click={revealItems}
			class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 m-2 -top-2 -left-2
			focus:outline-none focus:ring-2 focus:ring-blue-500"
			class:pl-14={reversed}
			class:pr-14={!reversed}
		>
			<Icon --size="1rem">
				<FaEye />
			</Icon>
		</button>
	{/if}
	<div class="grid grid-cols-3 gap-2">
		{#each Array(6) as _, index}
			<div
				class="nm-flat-gray-200 dark:nm-flat-gray-800 w-7 h-7 md:w-9 md:h-9 rounded-md overflow-hidden flex items-center justify-center"
				use:tooltip={{
					content:
						!isNaN(items?.[index]) && items?.[index] !== 0 ? resolveItemName(items[index]) : '',
					shouldShow: !isNaN(items?.[index]) && items?.[index] !== 0
				}}
			>
				{#if !isNaN(items?.[index])}
					{#if items?.[index] !== 0}
						<img
							class="w-full h-full"
							src={resolveItemImageSrc(items[index])}
							alt={resolveItemName(items[index])}
							width="28"
							height="28"
						/>
					{/if}
				{:else}
					<p>?</p>
				{/if}
			</div>
		{/each}
	</div>
	<div
		class="nm-flat-gray-200 dark:nm-flat-gray-800 w-7 h-7 md:w-9 md:h-9 rounded-md overflow-hidden flex items-center justify-center mx-2"
		use:tooltip={{
			content: !isNaN(items?.[6]) && items?.[6] !== 0 ? resolveItemName(items[6]) : '',
			shouldShow: !isNaN(items?.[6]) && items?.[6] !== 0
		}}
	>
		{#if !isNaN(items?.[6])}
			{#if items?.[6] !== 0}
				<img
					class="w-full h-full"
					src={resolveItemImageSrc(items[6])}
					alt={resolveItemName(items[6])}
					width="28"
					height="28"
				/>
			{/if}
		{:else}
			<p>?</p>
		{/if}
	</div>
</div>
