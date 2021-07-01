<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	sveltekit:prefetch
	type="button"
	class="focus:outline-none focus focus:nm-concave-gray-200-lg dark:focus:nm-concave-gray-800-lg 
    text-xl py-3 px-6 nm-flat-gray-200-lg dark:nm-flat-gray-800-lg hover:nm-inset-gray-200-lg dark:hover:nm-inset-gray-800-lg rounded-md"
>
	<slot>Go there!</slot>
</a>
