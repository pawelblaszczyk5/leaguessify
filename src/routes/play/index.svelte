<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';
	import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';

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
	import Icon from '$lib/shared/components/Icon.svelte';
	import { formatTime } from '$lib/play/helpers/timeFormatter';
	import { tooltip } from '$lib/shared/actions/tooltip';

	export let gameStats: Game;

	game.setGameData({ id: gameStats.gameId, region: gameStats.gameRegion });
</script>

<section class="flex flex-col justify-center items-center">
	{#if gameStats}
		<p class="flex justify-center items-center mb-2" use:tooltip={{ content: 'Game duration' }}>
			<Icon --size="1rem">
				<FaRegClock />
			</Icon>
			<span class="sr-only">Game duration</span>
			&nbsp;{formatTime(gameStats.gameDuration)}
		</p>
		<div class="flex items-center justify-center flex-col md:flex-row">
			<Team participants={gameStats.participants.slice(0, 5)} teamIndex={0} />
			<Team participants={gameStats.participants.slice(5, 10)} teamIndex={1} />
		</div>
	{/if}
</section>
