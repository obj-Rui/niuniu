import SmartyUI from '../../../src/entry';
import DefaultTheme from 'vitepress/theme';
import './style/var.css';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(SmartyUI);
  },
};
