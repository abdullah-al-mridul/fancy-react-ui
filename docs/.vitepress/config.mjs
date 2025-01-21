import { defineConfig } from "vitepress";
// import ReactWrapper from "../../src/vitepressWrapper/ReactWrapper.jsx";
// import ChaseWrapper from "../../src/vitepressWrapper/ChaseWrapper.jsx";
// import BounceWrapper from "../../src/vitepressWrapper/BounceWrapper.jsx";
// import PixelWrapper from "../../src/vitepressWrapper/PixelWrapper.jsx";
// import PulseWrapper from "../../src/vitepressWrapper/PulseWrapper.jsx";
// import RingWrapper from "../../src/vitepressWrapper/RingWrapper.jsx";
// import GridWrapper from "../../src/vitepressWrapper/GridWrapper.jsx";
// import WaveWrapper from "../../src/vitepressWrapper/WaveWrapper.jsx";
// import TextWrapper from "../../src/vitepressWrapper/TextWrapper.jsx";
// import ClockWrapper from "../../src/vitepressWrapper/ClockWrapper.jsx";
// import TypingWrapper from "../../src/vitepressWrapper/TypingWrapper.jsx";
// import CubeWrapper from "../../src/vitepressWrapper/CubeWrapper.jsx";
// import RotatingWrapper from "../../src/vitepressWrapper/RotatingWrapper.jsx";
// import DualRingWrapper from "../../src/vitepressWrapper/DualRingWrapper.jsx";
// import HeartbeatWrapper from "../../src/vitepressWrapper/HeartbeatWrapper.jsx";
// import GlitchWrapper from "../../src/vitepressWrapper/GlitchWrapper.jsx";
// import LoadingOverlayWrapper from "../../src/vitepressWrapper/LoadingOverlayWrapper.jsx";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fancy ReactUI",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { name: "theme-color", content: "#5B85AF" }],
    [
      "meta",
      {
        name: "description",
        content: "A react component library for UI components",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "Tb8XPvHHAsnp2a5SuwrH5cbJdZLVwvcFa4_rn_IBveI",
      },
    ],
    [
      "meta",
      {
        property: "og:title",
        content: "Fancy ReactUI - Modern React Component Library",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Beautiful, customizable, and production-ready React UI components and loaders",
      },
    ],
    [
      "meta",
      {
        property: "og:image",
        content: "https://fancy-react-ui.vercel.app/og-image.png",
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://fancy-react-ui.vercel.app",
      },
    ],
    [
      "meta",
      {
        property: "og:type",
        content: "website",
      },
    ],
    [
      "meta",
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
    [
      "meta",
      {
        name: "twitter:title",
        content: "Fancy ReactUI - Modern React Component Library",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Beautiful, customizable, and production-ready React UI components and loaders",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://fancy-react-ui.vercel.app/og-image.png",
      },
    ],
  ],
  description: "A react component library for UI components",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/getting-started/quickstart" },
      { text: "Developer", link: "https://abdullah-al-mridul-dev.vercel.app/" },
      {
        text: "UI Components",
        items: [
          {
            text: "Buttons",
            link: "/ui-components/buttons",
          },
          {
            text: "Cards",
            link: "/ui-components/cards",
          },
          {
            text: "Forms",
            link: "/ui-components/forms",
          },
          {
            text: "Modals",
            link: "/ui-components/modals",
          },
          {
            text: "Tables",
            link: "/ui-components/tables",
          },
          {
            text: "Progress",
            link: "/ui-components/progress",
          },
        ],
      },
      {
        text: "Loader Components",
        items: [
          {
            text: "Border",
            link: "/loaders/explore-loaders",
          },
          {
            text: "Chase",
            link: "/loaders/chase-spinner",
          },
          {
            text: "Bounce",
            link: "/loaders/bounce-spinner",
          },
          {
            text: "Pixel",
            link: "/loaders/pixel-spinner",
          },
          // {
          //   text: "Ring",
          //   link: "/loaders/ring-spinner",
          // },
          {
            text: "Pulse",
            link: "/loaders/pulse-spinner",
          },
          {
            text: "Grid",
            link: "/loaders/grid-spinner",
          },
          {
            text: "Wave",
            link: "/loaders/wave-spinner",
          },
          {
            text: "Text",
            link: "/loaders/text-spinner",
          },
          {
            text: "Clock",
            link: "/loaders/clock-spinner",
          },
          {
            text: "Typing",
            link: "/loaders/typing-spinner",
          },
          {
            text: "Cube",
            link: "/loaders/cube-spinner",
          },
          {
            text: "Rotating",
            link: "/loaders/rotating-spinner",
          },
          {
            text: "Dual Ring",
            link: "/loaders/dual-ring-spinner",
          },
          {
            text: "Heartbeat",
            link: "/loaders/heartbeat-spinner",
          },
          {
            text: "Glitch",
            link: "/loaders/glitch-spinner",
          },
          {
            text: "Loading",
            link: "/loaders/loading-overlay",
          },
          {
            text: "Pacman",
            link: "/loaders/pacman-spinner",
          },
          // {
          //   text: "Progress",
          //   link: "/loaders/progress",
          // },
          {
            text: "Ripple",
            link: "/loaders/ripple-spinner",
          },
        ],
      },
    ],
    logo: "/logo.png",
    sidebar: [
      {
        text: "Getting Started",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
          { text: "Installation", link: "/getting-started/installation" },
          { text: "Quick Start", link: "/getting-started/quickstart" },
        ],
      },
      {
        text: "UI Components",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Buttons", link: "/ui-components/buttons" },
          { text: "Cards", link: "/ui-components/cards" },
          { text: "Forms", link: "/ui-components/forms" },
          { text: "Modals", link: "/ui-components/modals" },
          { text: "Tables", link: "/ui-components/tables" },
        ],
      },
      {
        text: "Loader Components",
        collapsible: true,
        collapsed: false,
        items: [
          { text: "Border", link: "/loaders/explore-loaders" },
          { text: "Chase", link: "/loaders/chase-spinner" },
          { text: "Bounce", link: "/loaders/bounce-spinner" },
          { text: "Pixel", link: "/loaders/pixel-spinner" },
          // { text: "Ring", link: "/loaders/ring-spinner" },
          { text: "Pulse", link: "/loaders/pulse-spinner" },
          { text: "Grid", link: "/loaders/grid-spinner" },
          { text: "Wave", link: "/loaders/wave-spinner" },
          { text: "Text", link: "/loaders/text-spinner" },
          { text: "Clock", link: "/loaders/clock-spinner" },
          { text: "Typing", link: "/loaders/typing-spinner" },
          { text: "Cube", link: "/loaders/cube-spinner" },
          { text: "Rotating", link: "/loaders/rotating-spinner" },
          { text: "Dual Ring", link: "/loaders/dual-ring-spinner" },
          { text: "Heartbeat", link: "/loaders/heartbeat-spinner" },
          { text: "Glitch", link: "/loaders/glitch-spinner" },
          { text: "Loading Overlay", link: "/loaders/loading-overlay" },
          { text: "Pacman", link: "/loaders/pacman-spinner" },
          {
            text: "Progress",
            link: "/loaders/progress",
          },
          { text: "Ripple", link: "/loaders/ripple-spinner" },
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
      // {
      //   name: "vitepress-react-wrapper",
      //   transform(code, id) {
      //     if (id.endsWith(".md")) {
      //       return code
      //         .replace("<ReactWrapper />", ReactWrapper)
      //         .replace("<ChaseWrapper />", ChaseWrapper)
      //         .replace("<BounceWrapper />", BounceWrapper)
      //         .replace("<PixelWrapper />", PixelWrapper)
      //         .replace("<RingWrapper />", RingWrapper)
      //         .replace("<PulseWrapper />", PulseWrapper)
      //         .replace("<GridWrapper />", GridWrapper)
      //         .replace("<WaveWrapper />", WaveWrapper)
      //         .replace("<TextWrapper />", TextWrapper)
      //         .replace("<ClockWrapper />", ClockWrapper)
      //         .replace("<TypingWrapper />", TypingWrapper)
      //         .replace("<CubeWrapper />", CubeWrapper)
      //         .replace("<RotatingWrapper />", RotatingWrapper)
      //         .replace("<DualRingWrapper />", DualRingWrapper)
      //         .replace("<HeartbeatWrapper />", HeartbeatWrapper)
      //         .replace("<GlitchWrapper />", GlitchWrapper)
      //         .replace("<LoadingOverlayWrapper />", LoadingOverlayWrapper);
      //     }
      //   },
      // },
    ],
  },
  sitemap: {
    hostname: "https://fancy-react-ui.vercel.app",
  },
});
