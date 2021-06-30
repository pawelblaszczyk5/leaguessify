<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.postcss';
	import oneLetterLogoSrc from '../assets/oneLetterLogo.webp';

	onMount(() => {
		if (
			localStorage.getItem('theme') === 'dark' ||
			(!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<header class="flex p-4 justify-between">
	<img class="w-16 h-16" src={oneLetterLogoSrc} alt="" />
</header>
<main>
	<slot />
</main>
