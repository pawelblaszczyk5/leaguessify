<script lang="ts">
	import fullLogoWebpSrc from '../assets/fullLogo.webp';
	import fullLogoPngSrc from '../assets/fullLogo.png';
	import { fly, fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import Button from '$lib/shared/components/Button.svelte';
	import Spacer from '$lib/shared/components/Spacer.svelte';
	import NmAnchor from '$lib/shared/components/NmAnchor.svelte';

	let showLogo = false;

	onMount(() => {
		showLogo = true;
	});
</script>

<div class="flex flex-col items-center">
	{#if showLogo}
		<div class="flex flex-col items-center" transition:fly|local={{ y: -200, duration: 600 }}>
			<picture class="w-72">
				<source srcset={fullLogoWebpSrc} type="image/webp" />
				<source srcset={fullLogoPngSrc} type="image/png" />
				<img width="288" height="152" src={fullLogoPngSrc} alt="Leaguessify" />
			</picture>
			<p class="max-w-md text-center my-4 text-lg">
				Leaguessify is a game where your analytics skills are put to the test. How much do you need
				to know about the game to guess the result? And for how long you can keep the streak on?
				Whether you get the highest scores with more gambling approach or you will calculate every
				single inch - good luck & have fun!
			</p>
		</div>
		<div transition:fade|local={{ duration: 500, delay: 600 }} class="my-4 flex">
			<Spacer x={4}>
				<NmAnchor href="/play">Play</NmAnchor>
			</Spacer>
			<Spacer x={4}>
				<Button>Learn</Button>
			</Spacer>
		</div>
	{/if}
</div>
