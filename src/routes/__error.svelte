<script context="module" lang="ts">
	import type { ErrorLoadInput } from '@sveltejs/kit';

	export const load = ({ error, status }: ErrorLoadInput) => {
		return {
			props: {
				status: status,
				description: error.message
			}
		};
	};
</script>

<script lang="ts">
	export let status: number;
	export let description: string;
</script>

<div class="flex flex-col items-center justify-center max-w-md w-full p-6 mx-auto">
	<h1 class="text-3xl text-center">Something went wrong 😞</h1>
	<h2 class="text-xl text-center mt-6">
		There was some error while navigating you to the new page, below you can find exact error which
		lead you there. Feel free to contact me if the problem persist.
	</h2>
	<h4 class="text-xl text-center my-4">Use navigation to continue</h4>
	<h3 class="text-lg text-center">
		<span class="text-blue-700 dark:text-blue-300">{status}</span> - {description}
	</h3>
</div>
