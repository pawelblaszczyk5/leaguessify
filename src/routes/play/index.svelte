<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async (input: LoadInput): Promise<LoadOutput> => {
		try {
			const baseGameResponse = await input.fetch('api/game/base');
			const baseGameData = await baseGameResponse.json();

			return {
				props: {
					initialGame: baseGameData
				}
			};
		} catch (e) {
			console.log(e);
		}
	};
</script>

<script lang="ts">
	import type { Game } from '$lib/play/model/game';

	import { onMount } from 'svelte';

	export let initialGame: Game;

	onMount(() => {
		console.log(initialGame.participants);
	});
</script>
