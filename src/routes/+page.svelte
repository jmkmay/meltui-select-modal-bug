<script>
	import { pushState } from "$app/navigation";

	import TestSelect from "$lib/components/TestSelect.svelte";
	import WorkingSelect from "$lib/components/WorkingSelect.svelte";
</script>

<div class="space-y-12">
    <p>Here's a test select (with melt-ui) that works on the base page but get renders behind the modal</p>
    <TestSelect />
    <p>Whereas this select (homebrew) works both on page and in the modal</p>
    <WorkingSelect />
    <button on:click={() => pushState('', {
        showModal: true
    })} class="bg-gray-400 rounded-lg p-2">Open modal</button>
</div>

