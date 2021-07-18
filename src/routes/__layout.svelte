<script lang="ts">
	import Nav from '$lib/main/components/Nav.svelte';
	import { onMount } from 'svelte';
	import '../app.postcss';
	import oneLetterLogoWebpSrc from '../assets/oneLetterLogo.webp';
	import oneLetterLogoPngSrc from '../assets/oneLetterLogo.png';
	import Toast from '$lib/main/components/Toast.svelte';

	let header: HTMLElement;
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

	onMount(() => {
		checkTheme();

		new IntersectionObserver(([e]) => (floatingHeader = e.intersectionRatio < 1), {
			threshold: [1]
		}).observe(header);
	});
</script>

<header
	class:nm-flat-gray-200={floatingHeader}
	class:dark:nm-flat-gray-800={floatingHeader}
	class="flex px-4 pb-2 pt-[9px] justify-between items-center sticky top-[-1px] z-10"
	bind:this={header}
>
	<a
		sveltekit:prefetch
		href="/"
		title="Home page"
		class="focus:outline-none focus:ring-2 focus:ring-blue-500"
	>
		<picture class="w-16 h-16">
			<source srcset={oneLetterLogoWebpSrc} type="image/webp" />
			<source srcset={oneLetterLogoPngSrc} type="image/png" />
			<img height="64" width="64" src={oneLetterLogoPngSrc} alt="" />
		</picture>
	</a>
	<Nav />
</header>
<main class="py-4 px-4 md:px-6">
	<slot />
</main>
<Toast />
