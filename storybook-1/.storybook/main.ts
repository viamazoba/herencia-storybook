import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    'design-system': {
      title: 'Storybook Chromatic (web)',
      url: 'https://6660ce016cb2630fa5a9664a-mfssqjpsad.chromatic.com/',
      expanded: false, // Optional, true by default,
      //sourceUrl: 'https://github.com/storybookjs/storybook', // Optional
    },
    react: {
      title: 'Storybook local (localhost)',
      url: 'http://localhost:6007',
    },
  },
};
export default config;
