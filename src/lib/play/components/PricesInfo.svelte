<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import { revealNames } from '$lib/shared/constants/revealNames';
	import { revealPrices } from '$lib/shared/constants/revealPrices';
	import { WIN_PRIZE } from '$lib/shared/constants/winPrize';
	import { RevealType } from '$lib/shared/model/enums/revealType';
	import { onMount } from 'svelte';
	import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';

	let showPricesInfoModal = false;
	let hidden = true;

	const togglePricesInfoModalStatus = () => {
		showPricesInfoModal = !showPricesInfoModal;
	};

	const revealTypes: Array<RevealType> = Object.values(RevealType).filter(
		(entry) => typeof entry === 'number'
	) as Array<RevealType>;

	onMount(() => {
		hidden = false;
	});
</script>

<button
	on:click={togglePricesInfoModalStatus}
	class="fixed bottom-4 right-4"
	aria-label="Show prices info"
>
	<Icon --size="2rem">
		<MdInfoOutline />
	</Icon>
</button>

<div
	class="fixed bottom-14 right-14 nm-flat-gray-200-lg dark:nm-flat-gray-800-lg p-4 items-center flex-col transform 
  transition-transform duration-300 origin-bottom-right z-20 scale-0 flex 
  {hidden ? 'hidden' : ''} {showPricesInfoModal ? 'scale-100' : ''}"
>
	<h2 class="text-lg">Reveal prices:</h2>
	{#each revealTypes as revealType (revealType)}
		<p class="my-1">
			{revealNames[revealType]}: <span class="text-blue-500">{revealPrices[revealType]}</span>
		</p>
	{/each}
	<h2 class="text-lg">Guessing prize: <span class="text-blue-500">{WIN_PRIZE}</span></h2>
</div>
