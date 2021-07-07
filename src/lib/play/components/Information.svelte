<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import IoIosStats from 'svelte-icons/io/IoIosStats.svelte';
	import FaCoins from 'svelte-icons/fa/FaCoins.svelte';
	import { get } from 'svelte/store';
	import { game } from '../stores/game';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';
	import { tooltip } from '$lib/shared/actions/tooltip';

	export let kda: [number, number, number];
	export let gold: number;
	export let participantId: number;

	const revealGold = async () => {
		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			participantId: participantId.toString()
		}).toString();

		try {
			const goldResponse = await fetch(`api/game/participant/gold?${params}`);
			const goldData: { gold: number } = await goldResponse.json();

			gold = goldData.gold;
		} catch (e) {
			console.log(e);
		}
	};

	const revealKDA = async () => {
		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			participantId: participantId.toString()
		}).toString();

		try {
			const kdaResponse = await fetch(`api/game/participant/kda?${params}`);
			const kdaData: { kills: number; deaths: number; assists: number } = await kdaResponse.json();

			kda = [kdaData.kills, kdaData.deaths, kdaData.assists];
		} catch (e) {
			console.log(e);
		}
	};
</script>

<div class="m-2 text-sm">
	<div class="flex items-center">
		<div class="flex items-center relative">
			{#if isNaN(kda[0])}
				<button
					aria-label="Reveal KDA"
					on:click={revealKDA}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="1rem">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<div class="flex items-center" use:tooltip={{ content: 'K/D/A', shouldShow: !isNaN(kda[0]) }}>
				<Icon --size="0.875rem">
					<IoIosStats />
				</Icon>
				<span class="sr-only">K/D/A</span>
				<span>
					&nbsp; {!isNaN(kda[0]) ? `${kda[0]}/${kda[1]}/${kda[2]}` : '?/?/?'}
				</span>
			</div>
		</div>
		<div class="flex items-center ml-2 relative">
			{#if isNaN(gold)}
				<button
					aria-label="Reveal gold"
					on:click={revealGold}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="1rem">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<div class="flex items-center" use:tooltip={{ content: 'Gold', shouldShow: !isNaN(kda[0]) }}>
				<Icon --size="0.875rem">
					<FaCoins />
				</Icon>
				<span class="sr-only">Gold amount:</span>
				<span> &nbsp; {gold ?? '?????'}</span>
			</div>
		</div>
	</div>
</div>
