<script lang="ts">
	import { get } from 'svelte/store';
	import { summonerIcon } from '../../../assets/summonerIcon';
	import summonersData from '../../shared/data/summoner.json';
	import { game } from '../stores/game';

	export let participantId: number;
	export let summoners: [number, number];

	const revealSummoners = async () => {
		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			participantId: participantId.toString()
		}).toString();

		try {
			const summonersResponse = await fetch(`api/game/participant/summonerSpells?${params}`);
			const summonersData: { summonerSpell1: number; summonerSpell2: number } =
				await summonersResponse.json();

			summoners = [summonersData.summonerSpell1, summonersData.summonerSpell2];
		} catch (e) {
			console.log(e);
		}
	};
</script>

<div class="flex flex-col justify-between h-full relative">
	{#if !summoners[0]}
		<button
			on:click={revealSummoners}
			class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
		>
			Reveal
		</button>
	{/if}
	{#each summoners as summoner}
		<div
			class="nm-flat-gray-200 dark:nm-flat-gray-800 w-7 h-7 rounded-md overflow-hidden flex items-center justify-center"
		>
			{#if summoner}
				<img src={summonerIcon[summonersData[summoner].id]} alt="" />
			{:else}
				<p>?</p>
			{/if}
		</div>
	{/each}
</div>
