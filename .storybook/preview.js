import { GlobalStyles } from '../src/shared/global';

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}