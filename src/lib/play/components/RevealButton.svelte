<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import FaEye from 'svelte-icons/fa/FaEye.svelte';

	export let ariaLabel: string;
</script>

<button
	aria-label={ariaLabel}
	on:click
	class="w-full h-full absolute flex items-center justify-center bg-gray-200 bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 
  focus:outline-none focus:ring-2 focus:ring-blue-500"
>
	<Icon --size="1rem">
		<FaEye />
	</Icon>
</button>
