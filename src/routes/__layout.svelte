<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import oneLetterLogoWebpSrc from '../assets/oneLetterLogo.webp';
	import oneLetterLogoPngSrc from '../assets/oneLetterLogo.png';

	let floatingHeader = false;

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

	const handleScroll = (
		e: UIEvent & {
			currentTarget: EventTarget & Window;
		}
	) => {
		floatingHeader = e.currentTarget.scrollY > 5;
	};

	onMount(checkTheme);
</script>

<svelte:window on:scroll={handleScroll} />

<header
	class:nm-flat-gray-200={floatingHeader}
	class:dark:nm-flat-gray-800={floatingHeader}
	class="flex px-4 py-2 justify-between items-center sticky top-0"
>
	<a sveltekit:prefetch href="/" title="Home page">
		<picture class="w-16 h-16">
			<source srcset={oneLetterLogoWebpSrc} type="image/webp" />
			<source srcset={oneLetterLogoPngSrc} type="image/png" />
			<img height="64" width="64" src={oneLetterLogoPngSrc} alt="" />
		</picture>
	</a>
	<Nav />
</header>
<main class="py-4 px-6">
	<slot />
</main>
