<script lang="ts">
	import { get } from 'svelte/store';
	import { runeIcon } from '../../../assets/runeIcon';
	import runesData from '../../shared/data/rune.json';
	import { game } from '../stores/game';

	export let runes: [number, number];
	export let participantId: number;

	const revealRunes = async () => {
		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			participantId: participantId.toString()
		}).toString();

		try {
			const runesResponse = await fetch(`api/game/participant/runes?${params}`);
			const runesData: { keystone: number; secondaryRunePath: number } = await runesResponse.json();

			runes = [runesData.keystone, runesData.secondaryRunePath];
		} catch (e) {
			console.log(e);
		}
	};

	const resolveKeystoneImageSrc = (): string => {
		const keystoneName = Object.values(
			Object.values(runesData).map((path) => {
				return Object.entries(path.keystones);
			})
		)
			.flat()
			.find(([keystoneId]) => {
				return keystoneId === runes[0].toString();
			})[1].name;

		console.log(keystoneName);

		return runeIcon[keystoneName];
	};

	const resolveSecondaryRunePathImageSrc = (): string => {
		return runeIcon[runesData[runes[1]].name];
	};
</script>

<div class="flex flex-col justify-between h-full relative">
	{#if !runes[0]}
		<button
			on:click={revealRunes}
			class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80"
		>
			Reveal
		</button>
	{/if}
	<div
		class="nm-flat-gray-200 dark:nm-flat-gray-800 w-7 h-7 rounded-md overflow-hidden flex items-center justify-center"
	>
		{#if runes[0]}
			<img class="h-6 w-6" src={resolveKeystoneImageSrc()} alt="" />
		{:else}
			<p>?</p>
		{/if}
	</div>
	<div
		class="nm-flat-gray-200 dark:nm-flat-gray-800 w-7 h-7 rounded-md overflow-hidden flex items-center justify-center"
	>
		{#if runes[1]}
			<img class="h-4 w-4" src={resolveSecondaryRunePathImageSrc()} alt="" />
		{:else}
			<p>?</p>
		{/if}
	</div>
</div>
