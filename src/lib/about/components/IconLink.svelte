<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';

	export let href: string;
	export let title: string;
</script>

<a {href} {title} rel="external nofollow noreferrer" target="_blank">
	<Icon --size="2.5rem"><slot /></Icon>
</a>
