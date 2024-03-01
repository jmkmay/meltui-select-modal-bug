<script lang="ts">
	import BaseModal from './BaseModal.svelte';

	import { pushState } from '$app/navigation';
	import TestSelect from './TestSelect.svelte';
	import WorkingSelect from './WorkingSelect.svelte';
</script>

<BaseModal
	on:close={() => {
		pushState('', {
			showModal: false
		});
	}}
>
	<div class="bg-white flex flex-col pt-4 px-4 rounded-xl h-64 justify-between p-6">
		<p>This select gets rendered behind the modal</p>
		<TestSelect />
		<p>This select is rendered normally</p>
		<WorkingSelect />
	</div>
</BaseModal>
