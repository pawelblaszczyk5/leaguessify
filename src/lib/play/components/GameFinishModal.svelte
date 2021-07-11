<script lang="ts">
	import Button from '$lib/shared/components/Button.svelte';
	import NmAnchor from '$lib/shared/components/NmAnchor.svelte';
	import Spacer from '$lib/shared/components/Spacer.svelte';
	import { createEventDispatcher } from 'svelte';
	import { get } from 'svelte/store';
	import { formatScore } from '../helpers/scoreFormatter';
	import { score } from '../stores/score';

	const dispatch = createEventDispatcher<{ playAgain: null }>();
	const highScoreFromLocalStorage = localStorage.getItem('highscore');
	const highScore = highScoreFromLocalStorage && Number(localStorage.getItem('highscore'));

	const currentScore = get(score);

	if (currentScore > highScore) {
		localStorage.setItem('highscore', currentScore.toString());
	}
</script>

<div
	class="fixed top-0 left-0 w-screen h-screen p-8 bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-60 z-40"
>
	<div
		class="w-11/12 sm:w-full max-w-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 nm-flat-gray-200-xl dark:nm-flat-gray-800-xl flex flex-col items-center"
	>
		<h2 class="text-3xl text-center mb-6">The journey stops there :(</h2>
		<h3 class="text-xl text-center">
			Unfortunately the guess was incorrect. Your final score was <span
				class="text-blue-700 dark:text-blue-300">{formatScore(currentScore)}</span
			>.
		</h3>
		{#if highScore}
			<h4 class="text-xl text-center mt-2">
				{#if currentScore > highScore}
					Congrats, you broke your previous highscore which was <span
						class="text-blue-700 dark:text-blue-300">{formatScore(highScore)}</span
					>!
				{:else}
					Your current high score is
					<span class="text-blue-700 dark:text-blue-300">{formatScore(highScore)}</span>, keep it on
					and try to break it!
				{/if}
			</h4>
		{/if}
		<div class="mt-6 flex flex-col sm:flex-row items-center justify-evenly w-full">
			<Spacer y={4}>
				<Button on:click={() => dispatch('playAgain')}>Play again</Button>
			</Spacer>
			<Spacer y={4}>
				<NmAnchor href="/">Back to Home</NmAnchor>
			</Spacer>
		</div>
	</div>
</div>
