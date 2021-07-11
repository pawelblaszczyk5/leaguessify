<script lang="ts">
	import { revealNames } from '../constants/revealNames';
	import { revealPrices } from '../constants/revealPrices';
	import { WIN_PRIZE } from '../constants/winPrize';
	import { RevealType } from '../model/enums/revealType';

	const revealTypes: Array<RevealType> = Object.values(RevealType).filter(
		(entry) => typeof entry === 'number'
	) as Array<RevealType>;
</script>

<h2 class="text-lg">Reveal prices:</h2>
{#each revealTypes as revealType (revealType)}
	<p class="my-1">
		{revealNames[revealType]}:
		<span class="text-blue-700 dark:text-blue-300">{revealPrices[revealType]}</span>
	</p>
{/each}
<h2 class="text-lg">
	Guessing prize: <span class="text-blue-700 dark:text-blue-300">{WIN_PRIZE}</span>
</h2>
