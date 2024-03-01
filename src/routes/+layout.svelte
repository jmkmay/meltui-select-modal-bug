<script>
	import { pushState } from '$app/navigation';
	import { page } from '$app/stores';
	import ExtendedModal from '$lib/components/ExtendedModal.svelte';
    import '../app.css'
</script>

<slot />

{#if $page.state.showModal}
		<ExtendedModal />
{/if}