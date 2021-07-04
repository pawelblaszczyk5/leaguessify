<script lang="ts">
	import type { Participant } from '../model/game';

	import { championIcon } from '../../../assets/championIcon';
	import Items from './Items.svelte';
	import Summoners from './Summoners.svelte';
	import Spacer from '$lib/shared/components/Spacer.svelte';
	import Runes from './Runes.svelte';
	import Information from './Information.svelte';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';
	import Icon from '$lib/shared/components/Icon.svelte';
	import { get } from 'svelte/store';
	import { game } from '../stores/game';

	export let participant: Participant;
	export let reversed = false;

	const revealChampionLevel = async () => {
		const gameData = get(game);
		const params = new URLSearchParams({
			gameId: gameData.id.toString(),
			gameRegion: gameData.region,
			participantId: participant.championId.toString()
		}).toString();

		try {
			const championLevelResponse = await fetch(`api/game/participant/level?${params}`);
			const championLevelData: { level: number } = await championLevelResponse.json();

			participant.championLevel = championLevelData.level;
		} catch (e) {
			console.log(e);
		}
	};
</script>

<div class="flex mx-3 my-4" class:flex-row-reverse={reversed}>
	<Spacer>
		<Summoners
			participantId={participant.championId}
			summoners={[participant.summoner1Id, participant.summoner2Id]}
		/>
	</Spacer>
	<Spacer x={3}>
		<Runes
			runes={[participant.keystoneId, participant.secondaryRunePathId]}
			participantId={participant.championId}
		/>
	</Spacer>
	<div
		class="nm-flat-gray-200-lg dark:nm-flat-gray-800-lg w-16 h-16 rounded-lg overflow-hidden relative"
	>
		<img src={championIcon[participant.championName]} alt="" />
		<div
			class="absolute h-5 w-5 rounded-full bg-blue-500 bottom-0 right-0 flex items-center justify-center text-xs text-gray-200"
			class:bg-opacity-80={!participant.championLevel}
		>
			{participant.championLevel ?? '??'}
			{#if !participant.championLevel}
				<button on:click={revealChampionLevel} class="absolute bg-blue-500 bg-opacity-80">
					<Icon --size="14px">
						<FaEye />
					</Icon>
				</button>
			{/if}
		</div>
	</div>
	<div class="flex justify-between flex-col" class:items-end={reversed}>
		<Items participantId={participant.championId} items={participant.items} {reversed} />
		<Information
			kda={[participant.kills, participant.deaths, participant.assists]}
			gold={participant.gold}
			participantId={participant.championId}
		/>
	</div>
</div>
