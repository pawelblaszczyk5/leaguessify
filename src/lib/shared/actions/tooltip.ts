import tippy from 'tippy.js';

interface TooltipConfig {
	content: string;
}

export const tooltip = (node: HTMLElement, config: TooltipConfig): void => {
	tippy(node, { ...config, theme: 'blue' });
};
