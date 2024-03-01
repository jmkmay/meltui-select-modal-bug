<script lang="ts">
	import trapfocus from '$lib/actions/trapfocus';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<svelte:window
	on:keydown={(e) => {
		if (e.key === 'Escape') {
			dispatch('close');
		}
	}}
/>

<div
	class="fixed w-screen h-screen bg-[#ffffff88] dark:bg-[#00000088] backdrop-blur-sm backdrop-grayscale-50 top-0 left-0 z-10"
	use:trapfocus
	transition:fade={{ duration: 200 }}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed w-screen h-screen flex justify-center items-center"
		on:click={(e) => {
			if (e.target === e.currentTarget) {
				dispatch('close');
			}
		}}
	>
		<slot />
	</div>
</div>
