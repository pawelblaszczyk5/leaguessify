<script>
	import { toast } from '../stores/toast';
	import FaCheckCircle from 'svelte-icons/fa/FaCheckCircle.svelte';
	import FaExclamationCircle from 'svelte-icons/fa/FaExclamationCircle.svelte';
	import FaQuestionCircle from 'svelte-icons/fa/FaQuestionCircle.svelte';
	import Icon from './Icon.svelte';
	import { ToastType } from '../model/enums/toastType';
	import { fade } from 'svelte/transition';

	const toastIcon = {
		[ToastType.ERROR]: FaExclamationCircle,
		[ToastType.WARNING]: FaQuestionCircle,
		[ToastType.SUCCESS]: FaCheckCircle
	};
</script>

<div class="fixed left-4 bottom-4 z-30">
	{#each $toast as toast (toast)}
		<div
			aria-live="assertive"
			role="alert"
			transition:fade
			class="max-w-full w-52 flex items-center flex-row p-3 nm-flat-gray-200 dark:nm-flat-gray-800 my-4"
		>
			<Icon --size="1.5rem">
				<svelte:component this={toastIcon[toast.type]} />
			</Icon>
			<p class="text-sm ml-3 w-[calc(100%-2.25rem)]">
				{toast.content}
			</p>
		</div>
	{/each}
</div>
