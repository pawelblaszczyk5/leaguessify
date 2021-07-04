<script lang="ts">
	import Spacer from '$lib/shared/components/Spacer.svelte';
	import { get } from 'svelte/store';

	import { itemIcon } from '../../../assets/itemIcon';
	import { game } from '../stores/game';

	export let items: Array<number>;
	export let participantId: number;
	export let reversed = false;

	const revealItems = async () => {
		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			participantId: participantId.toString()
		}).toString();

		try {
			const itemsResponse = await fetch(`api/game/participant/items?${params}`);
			const itemsData: { items: Array<number> } = await itemsResponse.json();

			items = itemsData.items;
		} catch (e) {
			console.log(e);
		}
	};
</script>

<div class="flex items-center justify-center mx-2">
	<div class="flex relative" class:flex-row-reverse={reversed}>
		{#if !items}
			<button
				on:click={revealItems}
				class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
			>
				Reveal
			</button>
		{/if}
		{#each Array(7) as _, index}
			<Spacer x={1}>
				<div
					class="nm-flat-gray-200 dark:nm-flat-gray-800 w-10 h-10 rounded-md overflow-hidden flex items-center justify-center"
				>
					{#if !isNaN(items?.[index])}
						{#if items?.[index] !== 0}
							<img src={itemIcon['item' + items[index]]} alt="" />
						{/if}
					{:else}
						<p>?</p>
					{/if}
				</div>
			</Spacer>
		{/each}
	</div>
</div>
