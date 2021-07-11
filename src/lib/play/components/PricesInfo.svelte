<script lang="ts">
	import Icon from '$lib/shared/components/Icon.svelte';
	import PricesInfoContent from '$lib/shared/components/PricesInfoContent.svelte';
	import { onMount, tick } from 'svelte';
	import MdInfoOutline from 'svelte-icons/md/MdInfoOutline.svelte';

	let showPricesInfoModal = false;
	let hidden = true;
	let button: HTMLButtonElement;
	let modal: HTMLDivElement;

	const togglePricesInfoModalStatus = () => {
		showPricesInfoModal = !showPricesInfoModal;
	};

	const closePricesInfoModalOnClickOutside = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLElement;
			path: Array<HTMLElement>;
		}
	) => {
		if (!e.path.includes(button) && !e.path.includes(modal) && showPricesInfoModal) {
			togglePricesInfoModalStatus();
		}
	};

	onMount(async () => {
		await tick();
		hidden = false;
	});
</script>

<svelte:body on:click={closePricesInfoModalOnClickOutside} />

<button
	on:click={togglePricesInfoModalStatus}
	class="fixed bottom-4 right-4"
	aria-label="Show prices info"
	bind:this={button}
>
	<Icon --size="2rem">
		<MdInfoOutline />
	</Icon>
</button>
<div
	class="fixed bottom-14 right-14 nm-flat-gray-200-lg dark:nm-flat-gray-800-lg p-4 items-center flex-col transform 
  transition-transform duration-300 origin-bottom-right z-20 scale-0 flex 
  {hidden ? 'hidden' : ''} {showPricesInfoModal ? 'scale-100' : ''}"
	bind:this={modal}
>
	<PricesInfoContent />
</div>
