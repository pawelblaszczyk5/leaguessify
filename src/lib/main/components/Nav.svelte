<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import { onMount } from 'svelte';
	import FaBars from 'svelte-icons/fa/FaBars.svelte';
	import FaTimes from 'svelte-icons/fa/FaTimes.svelte';
	import FaRegSun from 'svelte-icons/fa/FaRegSun.svelte';
	import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte';

	let isMenuOpen = true;
	let isDarkMode = false;

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

	onMount(checkDarkModeStatus);
</script>

<nav class="flex items-center">
	<div
		class="transform-gpu fixed nm-flat-gray-200-sm dark:nm-flat-gray-800-sm h-screen w-80 max-w-full top-0 right-0 transition-transform duration-300 flex flex-col p-6 items-center text-xl {isMenuOpen
			? 'translate-x-full'
			: ''} md:static md:h-auto md:w-auto md:bg-transparent md:shadow-none md:dark:bg-transparent md:dark:shadow-none md:translate-x-0 md:flex-row"
	>
		<button
			aria-label="Close menu"
			class="focus:outline-none focus:ring-2 focus:ring-blue-500 absolute top-8 right-4 md:hidden"
			on:click={toggleMenuState}
		>
			<Icon --size="28px">
				<FaTimes />
			</Icon>
		</button>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 md:px-4"
			sveltekit:prefetch
			href="/">Lorem</a
		>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 md:px-4"
			sveltekit:prefetch
			href="/">Ipsum</a
		>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 md:px-4"
			sveltekit:prefetch
			href="/">About</a
		>
	</div>
	<button
		aria-label="Toggle theme to {isDarkMode ? 'light' : 'dark'}"
		class="focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4 md:mr-0"
		on:click={toggleDarkModeStatus}
	>
		<Icon --size="28px">
			<svelte:component this={isDarkMode ? FaRegSun : FaRegMoon} size="28" />
		</Icon>
	</button>
	<button
		aria-label="Open menu"
		class="focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
		on:click={toggleMenuState}
	>
		<Icon --size="28px">
			<FaBars />
		</Icon>
	</button>
</nav>
