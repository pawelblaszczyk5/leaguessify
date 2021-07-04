<script lang="ts">
	import type { Participant } from '../model/game';

	import { championIcon } from '../../../assets/championIcon';
	import Items from './Items.svelte';
	import Summoners from './Summoners.svelte';
	import Spacer from '$lib/shared/components/Spacer.svelte';
	import Runes from './Runes.svelte';
	import Information from './Information.svelte';

	export let participant: Participant;
	export let reversed = false;
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
	<div class="nm-flat-gray-200-lg dark:nm-flat-gray-800-lg w-16 h-16 rounded-lg overflow-hidden">
		<img src={championIcon[participant.championName]} alt="" />
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
