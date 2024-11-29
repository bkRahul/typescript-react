import { createTheme, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#5DD39E',
    },
    secondary: {
      main: '#BCE784',
    },
  },
});

export const decorators = [
  Story => <ThemeProvider theme={theme}>{<Story />}</ThemeProvider>,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};
