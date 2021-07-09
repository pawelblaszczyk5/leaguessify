<script lang="ts">
	import { formatScore } from '../helpers/scoreFormatter';
	import { score } from '../stores/score';
</script>

<h1 class="mb-6 text-xl p-3 nm-convex-gray-200-sm dark:nm-convex-gray-800-sm rounded-md">
	Current score: <span class="text-blue-500">{formatScore($score)}</span>
</h1>
