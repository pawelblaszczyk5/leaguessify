<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.postcss';

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

<slot />
