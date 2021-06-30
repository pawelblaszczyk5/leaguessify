<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import oneLetterLogoSrc from '../assets/oneLetterLogo.webp';

	const checkTheme = () => {
		if (
			localStorage.getItem('theme') === 'dark' ||
			(!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	};

	onMount(checkTheme);
</script>

<header class="flex p-4 justify-between items-center">
	<a href="/" title="Home page">
		<img class="w-16 h-16" src={oneLetterLogoSrc} alt="" />
	</a>
	<Nav />
</header>
<main>
	<slot />
</main>
