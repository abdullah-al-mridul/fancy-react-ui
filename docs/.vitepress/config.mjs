import { defineConfig } from "vitepress";
import ReactWrapper from "../../src/vitepressWrapper/ReactWrapper.jsx";
import ChaseWrapper from "../../src/vitepressWrapper/ChaseWrapper.jsx";
import BounceWrapper from "../../src/vitepressWrapper/BounceWrapper.jsx";
import PixelWrapper from "../../src/vitepressWrapper/PixelWrapper.jsx";
import PulseWrapper from "../../src/vitepressWrapper/PulseWrapper.jsx";
import RingWrapper from "../../src/vitepressWrapper/RingWrapper.jsx";
import GridWrapper from "../../src/vitepressWrapper/GridWrapper.jsx";
import WaveWrapper from "../../src/vitepressWrapper/WaveWrapper.jsx";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fancy ReactUI",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#5B85AF" }],
  ],
  description: "A react component library for UI components",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      {
        text: "Loaders",
        items: [
          {
            text: "Border Spinner",
            link: "/explore-loaders",
          },
          {
            text: "Chase Spinner",
            link: "/chase-spinner",
          },
          {
            text: "Bounce Spinner",
            link: "/bounce-spinner",
          },
          {
            text: "Pixel Spinner",
            link: "/pixel-spinner",
          },
          {
            text: "Ring Spinner",
            link: "/ring-spinner",
          },
          {
            text: "Pulse Spinner",
            link: "/pulse-spinner",
          },
          {
            text: "Grid Spinner",
            link: "/grid-spinner",
          },
          {
            text: "Wave Spinner",
            link: "/wave-spinner",
          },
        ],
      },
    ],
    logo: "/logo.png",
    sidebar: [
      {
        text: "Explore Loaders",
        items: [
          { text: "Border Spinner", link: "/explore-loaders" },
          { text: "Chase Spinner", link: "/chase-spinner" },
          { text: "Bounce Spinner", link: "/bounce-spinner" },
          { text: "Pixel Spinner", link: "/pixel-spinner" },
          { text: "Ring Spinner", link: "/ring-spinner" },
          { text: "Pulse Spinner", link: "/pulse-spinner" },
          { text: "Grid Spinner", link: "/grid-spinner" },
          { text: "Wave Spinner", link: "/wave-spinner" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "facebook",
        link: "https://www.facebook.com/abdullah.al.mridul.dev",
      },
      {
        icon: "github",
        link: "https://github.com/abdullah-al-mridul/fancy-react-ui",
      },
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
            return code
              .replace("<ReactWrapper />", ReactWrapper)
              .replace("<ChaseWrapper />", ChaseWrapper)
              .replace("<BounceWrapper />", BounceWrapper)
              .replace("<PixelWrapper />", PixelWrapper)
              .replace("<RingWrapper />", RingWrapper)
              .replace("<PulseWrapper />", PulseWrapper)
              .replace("<GridWrapper />", GridWrapper)
              .replace("<WaveWrapper />", WaveWrapper);
          }
        },
      },
    ],
  },
});
