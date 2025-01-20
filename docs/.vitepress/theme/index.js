import DefaultTheme from "vitepress/theme";
import ReactWrapper from "../../../src/vitepressWrapper/ReactWrapper.jsx";
import ChaseWrapper from "../../../src/vitepressWrapper/ChaseWrapper.jsx";
import BounceWrapper from "../../../src/vitepressWrapper/BounceWrapper.jsx";
import PixelWrapper from "../../../src/vitepressWrapper/PixelWrapper.jsx";
import RingWrapper from "../../../src/vitepressWrapper/RingWrapper.jsx";
import PulseWrapper from "../../../src/vitepressWrapper/PulseWrapper.jsx";
import GridWrapper from "../../../src/vitepressWrapper/GridWrapper.jsx";
import WaveWrapper from "../../../src/vitepressWrapper/WaveWrapper.jsx";
import "../../../src/previewComponents/BorderSpinner/BorderSpinner.css";
import "../../../src/previewComponents/ChaseSpinner/ChaseSpinner.css";
import "../../../src/previewComponents/BounceSpinner/BounceSpinner.css";
import "../../../src/previewComponents/PixelSpinner/PixelSpinner.css";
import "../../../src/previewComponents/DualRingSpinner/DualRingSpinner.css";
import "../../../src/previewComponents/PulseSpinner/PulseSpinner.css";
import "../../../src/previewComponents/GridSpinner/GridSpinner.css";
import "../../../src/previewComponents/WaveSpinner/WaveSpinner.css";
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("ReactWrapper", ReactWrapper);
    app.component("ChaseWrapper", ChaseWrapper);
    app.component("BounceWrapper", BounceWrapper);
    app.component("PixelWrapper", PixelWrapper);
    app.component("RingWrapper", RingWrapper);
    app.component("PulseWrapper", PulseWrapper);
    app.component("GridWrapper", GridWrapper);
    app.component("WaveWrapper", WaveWrapper);
  },
};
