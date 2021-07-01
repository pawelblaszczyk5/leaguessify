<script lang="ts">
	export let x = 0;
	export let y = 0;
</script>

<div class="my-{y} mx-{x}">
	<slot />
</div>
