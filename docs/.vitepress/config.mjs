import { defineConfig } from "vitepress";
import ReactWrapper from "../../src/vitepressWrapper/ReactWrapper.jsx";
import ChaseWrapper from "../../src/vitepressWrapper/ChaseWrapper.jsx";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fancy Loader",
  description: "A react component library for loaders",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    logo: "/logo.png",
    sidebar: [
      {
        text: "Explore Loaders",
        items: [
          { text: "Border Spinner", link: "/explore-loaders" },
          { text: "Chase Spinner", link: "/chase-spinner" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present Abdullah Al Mridul",
    },
  },
  vite: {
    plugins: [
      {
        name: "vitepress-react-wrapper",
        transform(code, id) {
          if (id.endsWith(".md")) {
            return code.replace("<ReactWrapper />", ReactWrapper);
          }
          if (id.endsWith(".md")) {
            return code.replace("<ChaseWrapper />", ChaseWrapper);
          }
        },
      },
    ],
  },
});
