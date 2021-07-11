<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';

	export let href: string;
	export let title: string;
</script>

<a
	{href}
	{title}
	class="focus:outline-none focus:ring-2 focus:ring-blue-500"
	rel="external nofollow noreferrer"
	target="_blank"
>
	<Icon --size="2.5rem"><slot /></Icon>
</a>
