import { storiesOfAlert } from "dso-toolkit";
import { storiesOf } from "@storybook/react";
import { templateContainer } from "../../templates";
import { alertWithHeadingsContent, errorMessage, infoMessage, successMessage, warningMessage } from "./alert.content";

import readme from "./readme.md";

storiesOfAlert({
  parameters: {
    module,
    storiesOf,
    readme,
  },
  templateContainer,
  storyTemplates: ({ alertTemplate }) => ({
    alertTemplate,
    errorMessage,
    infoMessage,
    successMessage,
    warningMessage,
    alertWithHeadingsContent,
  }),
});
