<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const baseGameResponse = await input.fetch('api/game/base');
			const baseGameData = await baseGameResponse.json();

			return {
				props: {
					gameStats: baseGameData
				}
			};
		} catch (e) {
			console.log(e);
		}
	};
</script>

<script lang="ts">
	import type { Game } from '$lib/play/model/game';

	import Team from '$lib/play/components/Team.svelte';
	import { game } from '$lib/play/stores/game';

	export let gameStats: Game;

	game.setGameData({ id: gameStats.gameId, region: gameStats.gameRegion });
</script>

<div class="flex items-center justify-center flex-col md:flex-row">
	{#if gameStats}
		<Team participants={gameStats.participants.slice(0, 5)} teamIndex={0} />
		<Team participants={gameStats.participants.slice(5, 10)} teamIndex={1} />
	{/if}
</div>
