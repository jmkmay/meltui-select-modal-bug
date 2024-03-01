/** Dispatch event on click outside of node */
export function clickoutside(node: HTMLElement) {
	const handleClick = (event: MouseEvent) => {
		if (
			node &&
			event.target instanceof Node &&
			!node.contains(event.target) &&
			!event.defaultPrevented
		) {
			node.dispatchEvent(new CustomEvent('outsideclick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
