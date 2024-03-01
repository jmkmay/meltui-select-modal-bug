<script lang="ts">
	import { clickoutside } from '$lib/actions/clickoutside';
	import Chevron from '$lib/svgs/Chevron.svelte';

	let open: boolean = false;

	const options = [1, 2, 3, 4, 5, 6]
	
    let selected: number = 1

	const onSelect = (selection: number) => {
		selected = selection;
		open = false;
	};

	const handleOutsideClick = () => {
		open = false;
	};
</script>

<div use:clickoutside on:outsideclick={handleOutsideClick} class="min-w-32 max-w-64">
	<button
		on:click={() => {
			open = !open;
		}}
		class="flex min-h-10 flex-row items-center space-x-2 justify-between bg-gray-200 rounded-sm px-2 py-1 hover:bg-slate-500 w-64"
	>
		{#if selected}
			<p>{selected}</p>
			<Chevron />
		{:else}
			<p>None selected</p>
			<Chevron />
		{/if}
	</button>

	<ul
		class={`${open ? 'flex' : 'hidden'} flex-col bg-gray-200  divide-slate-200 divide-y w-64 z-10 absolute`}
	>
		{#each options as option, index}
			<li>
				<button
					on:click={() => onSelect(index)}
					class="hover:bg-slate-500 w-full flex flex-row items-center px-2 py-1"
				>
					<p>{option}</p>
				</button>
			</li>
        {/each}
	</ul>
</div>
