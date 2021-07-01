<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import oneLetterLogoWebpSrc from '../assets/oneLetterLogo.webp';
	import oneLetterLogoPngSrc from '../assets/oneLetterLogo.png';

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
		<picture class="w-16 h-16">
			<source srcset={oneLetterLogoWebpSrc} type="image/webp" />
			<source srcset={oneLetterLogoPngSrc} type="image/png" />
			<img src={oneLetterLogoPngSrc} alt="" />
		</picture>
	</a>
	<Nav />
</header>
<main class="p-4">
	<slot />
</main>
