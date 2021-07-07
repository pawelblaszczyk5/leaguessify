import tippy from 'tippy.js';

interface TooltipConfig {
	content: string;
	shouldShow?: boolean;
}

interface TooltipActionReturn {
	update: (config: TooltipConfig) => void;
	destroy: () => void;
}

const defaultTippyConfig = {
	theme: 'blue'
};

export const tooltip = (node: HTMLElement, config: TooltipConfig): TooltipActionReturn => {
	const tippyInstance = tippy(node, { content: config.content, ...defaultTippyConfig });

	if (config.shouldShow === false) {
		tippyInstance.disable();
	}

	return {
		update: (config: TooltipConfig) => {
			tippyInstance.setProps({ ...config, ...defaultTippyConfig });

			if (config.shouldShow === false) {
				tippyInstance.disable();
			} else {
				tippyInstance.enable();
			}
		},
		destroy: () => {
			tippyInstance.unmount();
		}
	};
};
