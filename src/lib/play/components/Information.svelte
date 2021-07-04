<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import IoIosStats from 'svelte-icons/io/IoIosStats.svelte';
	import FaCoins from 'svelte-icons/fa/FaCoins.svelte';
	import { get } from 'svelte/store';
	import { game } from '../stores/game';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';

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
					on:click={revealKDA}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="16px">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<Icon --size="14px">
				<IoIosStats />
			</Icon>
			<span> &nbsp; {!isNaN(kda[0]) ? `${kda[0]}/${kda[1]}/${kda[2]}` : '?/?/?'} </span>
		</div>
		<div class="flex items-center ml-2 relative">
			{#if isNaN(gold)}
				<button
					on:click={revealGold}
					class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
				>
					<Icon --size="16px">
						<FaEye />
					</Icon>
				</button>
			{/if}
			<Icon --size="14px">
				<FaCoins />
			</Icon>
			<div />
			<span> &nbsp; {gold ?? '?????'}</span>
		</div>
	</div>
</div>
