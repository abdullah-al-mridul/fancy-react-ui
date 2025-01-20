import DefaultTheme from "vitepress/theme";
import ReactWrapper from "../../../src/vitepressWrapper/ReactWrapper.jsx";
import ChaseWrapper from "../../../src/vitepressWrapper/ChaseWrapper.jsx";
import "../../../src/previewComponents/BorderSpinner/BorderSpinner.css";
import "../../../src/previewComponents/ChaseSpinner/ChaseSpinner.css";
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("ReactWrapper", ReactWrapper);
    app.component("ChaseWrapper", ChaseWrapper);
  },
};
