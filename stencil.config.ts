import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "sb-stencil",
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
      footer: "",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        "src/globals/variables.scss",
        "src/globals/derived_variables.scss",
        "src/globals/base.scss",
        // 'src/globals/mixins.scss'
      ],
    }),
  ],
};
