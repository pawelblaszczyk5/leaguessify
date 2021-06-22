<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export const load = async ({ fetch }: LoadInput): Promise<LoadOutput> => {
		try {
			const response = await fetch('api/test');
			const data: { test: string } = await response.json();

			return {
				status: 200,
				props: {
					text: data.test
				}
			};
		} catch (e) {
			console.log(e);
			return {
				status: 500
			};
		}
	};
</script>

<script lang="ts">
	export let text: string;

	const w = text;
	console.log(w);
</script>

<h1>Welcome to SvelteKit {text}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
