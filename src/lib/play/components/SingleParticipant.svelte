<script lang="ts">
	import type { Participant } from '../model/game';

	import { championIcon } from '../../../assets/championIcon';
	import Items from './Items.svelte';
	import Summoners from './Summoners.svelte';
	import Spacer from '$lib/shared/components/Spacer.svelte';
	import Runes from './Runes.svelte';
	import Information from './Information.svelte';
	import Level from './Level.svelte';
	import championData from '$lib/shared/data/champion.json';

	export let participant: Participant;
	export let reversed = false;

	const resolveChampionImageSrc = (name: string): string => {
		return championIcon[name];
	};

	const resolveChampionName = (name: string): string => {
		return championData[name].name;
	};
</script>

<div
	class="flex my-4 justify-items-center items-center pb-10 relative"
	class:flex-row-reverse={reversed}
>
	<Summoners
		participantId={participant.championId}
		summoners={[participant.summoner1Id, participant.summoner2Id]}
	/>
	<Spacer x={1} />
	<Runes
		runes={[participant.keystoneId, participant.secondaryRunePathId]}
		participantId={participant.championId}
	/>
	<div
		class="nm-flat-gray-200-lg dark:nm-flat-gray-800-lg w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden relative mx-2"
	>
		<img
			src={resolveChampionImageSrc(participant.championName)}
			alt={resolveChampionName(participant.championName)}
		/>
		<Level championLevel={participant.championLevel} participantId={participant.championId} />
	</div>
	<div class="flex justify-between flex-col" class:items-end={reversed}>
		<Items participantId={participant.championId} items={participant.items} {reversed} />
		<div class="absolute bottom-0">
			<Information
				kda={[participant.kills, participant.deaths, participant.assists]}
				gold={participant.gold}
				participantId={participant.championId}
			/>
		</div>
	</div>
</div>
