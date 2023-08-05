import SmartyUI from '../../../src/entry';
import DefaultTheme from 'vitepress/theme';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(SmartyUI);
  },
};
