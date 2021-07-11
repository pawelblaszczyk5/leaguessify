<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import Meta from '$lib/shared/components/Meta.svelte';
	import Section from '$lib/shared/components/Section.svelte';
</script>

<Meta title="Learn | Leaguessify" />

<Section>
	<h1 class="text-center text-2xl">Goal of the game</h1>
	<p class="text-center my-3">
		The goal is to get an as high score as possible by guessing the winner of the game with as
		little information as possible. Gather the points through correct picking and then spend it to
		gather various info in the next round. Some knowledge is more valuable than others, so costs
		vary to balance everything out.
	</p>
</Section>
<Section>
	<h1 class="text-center text-2xl">How to play?</h1>
	<p class="text-center my-3">
		Use the reveal buttons to spend your score and get valuable pieces of information. If you are
		not sure what is hiding below, there is a friendly tooltip for you. Hover it (or hold your
		finger if you are on a touch device), and you will never be confused. At every point of the
		game, you can check how much everything costs. It's simple - just click the info button in the
		bottom-right corner. Finally, if you are feeling confident or you have no other choice - make a
		guess. Click the button below the corresponding team to do it.
	</p>
</Section>
<Section>
	<h1 class="text-center text-2xl">What games can you expect there?</h1>
	<p class="text-center my-3">
		Games are taken from 5 servers - EUW, KR, NA, EUNE, and JP, from various ranks. The data size is
		pretty generous. You can expect a variety of puzzles. Moreover, games are rotated every few
		days, so you will never know what awaits behind a corner. Maybe you will even recognize your own
		match?
	</p>
</Section>
