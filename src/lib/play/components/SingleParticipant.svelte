<script lang="ts">
	import type { Participant } from '../model/game';

	import { championIcon } from '../../../assets/championIcon';
	import Items from './Items.svelte';

	export let participant: Participant;
	export let reversed = false;

	// participant.items = [3111, 6673, 3153, 3124, 3026, 3076, 3364];
</script>

<div class="flex m-4" class:flex-row-reverse={reversed}>
	<div class="nm-flat-gray-200-lg dark:nm-flat-gray-800-lg w-16 h-16 rounded-lg overflow-hidden">
		<img src={championIcon[participant.championName]} alt="" />
	</div>
	<Items participantId={participant.championId} items={participant.items} {reversed} />
</div>
