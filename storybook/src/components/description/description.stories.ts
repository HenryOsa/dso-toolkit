import { storiesOfDescription, StoryRoot } from "dso-toolkit";
import { storiesOf } from "@storybook/web-components";
import { html } from "lit-html";

import cssReadme from "dso-toolkit/src/components/description/readme.md";

import { templateContainer } from "../../templates";

storiesOfDescription({
  parameters: {
    module,
    storiesOf,
    readme: cssReadme,
    root: StoryRoot.HtmlCss,
  },
  templateContainer,
  storyTemplates: ({ descriptionTemplate }) => ({
    descriptionTemplate,
    exampleTemplate: (exampleData) =>
      html`${exampleData.map((d) => (typeof d === "string" ? d : descriptionTemplate(d)))}`,
  }),
});
