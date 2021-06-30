<script lang="ts">
	import { MenuIcon, XIcon } from 'svelte-feather-icons';

	let isMenuOpen = true;

	const toggleMenuState = () => {
		isMenuOpen = !isMenuOpen;
	};
</script>

<nav>
	<button
		on:click={toggleMenuState}
		class="focus:outline-none focus:ring-2 focus:ring-blue-500 sm:hidden"
	>
		<MenuIcon size="28" />
	</button>
	<ul
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
		<li>
			<a
				class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 sm:px-4"
				sveltekit:prefetch
				href="/">Lorem</a
			>
		</li>
		<li>
			<a
				class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 sm:px-4"
				sveltekit:prefetch
				href="/">Ipsum</a
			>
		</li>
		<li>
			<a
				class="inline-block focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 sm:px-4"
				sveltekit:prefetch
				href="/">About</a
			>
		</li>
	</ul>
</nav>
