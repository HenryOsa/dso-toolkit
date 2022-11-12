import { Info } from "@dso-toolkit/sources";
import * as React from "react";

import { DsoInfo } from "../..";
import { ComponentImplementation } from "../../templates";

export const reactInfo: ComponentImplementation<Info<JSX.Element>> = {
  component: "info",
  implementation: "react",
  template: () =>
    function infoTemplate({ fixed, active, content, dsoClose }) {
      return (
        <DsoInfo fixed={fixed} active={active} onDsoClose={dsoClose}>
          {content}
        </DsoInfo>
      );
    },
};
