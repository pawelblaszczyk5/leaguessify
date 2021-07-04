<script lang="ts">
	import type { Participant } from '../model/game';

	import SingleParticipant from './SingleParticipant.svelte';

	export let teamIndex: 0 | 1;
	export let participants: Array<Participant>;
</script>

<div>
	{#each participants as participant (participant.championId)}
		<SingleParticipant {participant} reversed={Boolean(teamIndex)} />
	{/each}
</div>
