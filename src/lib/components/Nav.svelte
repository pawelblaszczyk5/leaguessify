<script lang="ts">
	import { onMount } from 'svelte';
	import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'svelte-feather-icons';

	let isMenuOpen = true;
	let isDarkMode = false;

	const toggleMenuState = () => {
		isMenuOpen = !isMenuOpen;
	};

	const checkDarkModeStatus = () => {
		isDarkMode = document.documentElement.classList.contains('dark');
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
			: ''} sm:static sm:h-auto sm:w-auto sm:bg-transparent sm:shadow-none sm:dark:bg-transparent sm:dark:shadow-none sm:translate-x-0 sm:flex-row"
	>
		<button
			on:click={toggleMenuState}
			class="focus:outline-none focus:ring-2 focus:ring-blue-500 absolute top-8 right-4 sm:hidden"
		>
			<XIcon size="28" />
		</button>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 sm:px-4"
			sveltekit:prefetch
			href="/">Lorem</a
		>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 sm:px-4"
			sveltekit:prefetch
			href="/">Ipsum</a
		>
		<a
			class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 sm:px-4"
			sveltekit:prefetch
			href="/">About</a
		>
	</div>
	<button
		on:click={toggleDarkModeStatus}
		class="focus:outline-none focus:ring-2 focus:ring-blue-500 mr-4 sm:mr-0"
	>
		<svelte:component this={isDarkMode ? SunIcon : MoonIcon} size="28" />
	</button>
	<button
		on:click={toggleMenuState}
		class="focus:outline-none focus:ring-2 focus:ring-blue-500 sm:hidden"
	>
		<MenuIcon size="28" />
	</button>
</nav>
