// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		interface PageState {
			showModal: boolean;
		}
		// interface Platform {}
	}

	declare namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:outsideclick'?: CompositionEventHandler<T>;
		}
	}
}

export {};
