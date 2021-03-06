<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import { onMount, tick } from 'svelte';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte';
	import FaRegSun from 'svelte-icons/fa/FaRegSun.svelte';
	import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte';

	let isMenuOpen = false;
	let isDarkMode = false;
	let hidden = true;

	const toggleMenuState = () => {
		isMenuOpen = !isMenuOpen;
	};

	const checkDarkModeStatus = () => {
		setTimeout(() => {
			isDarkMode = document.documentElement.classList.contains('dark');
		});
	};

	const toggleDarkModeStatus = () => {
		isDarkMode = !isDarkMode;
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
		document.documentElement.classList.toggle('dark');
	};

	const closeNavOnNavigation = () => {
		isMenuOpen && toggleMenuState();
	};

	onMount(async () => {
		checkDarkModeStatus();
		await tick();
		hidden = false;
	});
</script>

<nav class="flex items-center">
	<div
		class="transform-gpu fixed nm-flat-gray-200-sm dark:nm-flat-gray-800-sm h-screen w-80 max-w-full top-0 right-0 transition-transform duration-300 flex-col p-6 items-center text-xl {isMenuOpen
			? ''
			: 'translate-x-full'} {hidden
			? 'hidden'
			: 'flex'} md:static md:h-auto md:w-auto md:bg-transparent md:shadow-none md:dark:bg-transparent md:dark:shadow-none md:translate-x-0 md:flex-row"
	>
		<button
			aria-label="Close menu"
			class="focus:outline-none focus:ring-2 focus:ring-blue-500 absolute top-8 right-4 md:hidden"
			on:click={toggleMenuState}
		>
			<Icon --size="1.75rem">
				<FaTimes />
			</Icon>
		</button>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 md:px-4"
			sveltekit:prefetch
			href="/play">Play</a
		>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 md:px-4"
			sveltekit:prefetch
			href="/learn">Learn</a
		>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 md:px-4"
			sveltekit:prefetch
			href="/about">About</a
		>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 md:px-4"
			sveltekit:prefetch
			href="/changelog">Changelog</a
		>
	</div>
	<button
		aria-label="Toggle theme to {isDarkMode ? 'light' : 'dark'}"
		class="focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4 md:mr-0"
		on:click={toggleDarkModeStatus}
	>
		<Icon --size="1.75rem">
			<svelte:component this={isDarkMode ? FaRegSun : FaRegMoon} size="28" />
		</Icon>
	</button>
	<button
		aria-label="Open menu"
		class="focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
		on:click={toggleMenuState}
	>
		<Icon --size="1.75rem">
			<FaBars />
		</Icon>
	</button>
</nav>
<svelte:window on:sveltekit:navigation-start={closeNavOnNavigation} />
