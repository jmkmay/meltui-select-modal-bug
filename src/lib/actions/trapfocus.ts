// Traps the focus of the passed HTMLElement so that any element that
// isn't a child of the node cannot be focussed.
export default function trapfocus(node: HTMLElement) {
	const previous = document.activeElement as HTMLElement;

	function focusable(): HTMLElement[] {
		return Array.from(
			node.querySelectorAll(
				// This might not be an exhaustive list and may need updating.
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
			)
		);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		const current = document.activeElement;

		const elements = focusable();
		const first = elements.at(0);
		const last = elements.at(-1);

		if (event.shiftKey && current === first) {
			last?.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current === last) {
			first?.focus();
			event.preventDefault();
		}
	}

	focusable()[0]?.focus();

	node.addEventListener('keydown', handleKeydown);

	return {
		destroy() {
			node.removeEventListener('keydown', handleKeydown);
			previous?.focus({ preventScroll: true });
		}
	};
}
