import { JustifyFormGroups } from "dso-toolkit";
import { html, TemplateResult } from "lit-html";
import { ComponentImplementation } from "../../templates";

export const cssJustifyFormGroups: ComponentImplementation<JustifyFormGroups<TemplateResult>> = {
  component: "justifyFormGroups",
  implementation: "html-css",
  template: ({ buttonTemplate, formGroupTemplate }) =>
    function justifyFormGroupsTemplate({ formGroups, buttons }) {
      return html`
        <div class="dso-justify-form-groups">
          ${formGroups.map((formGroup) => formGroupTemplate(formGroup))}
          <div class="dso-form-buttons">${buttons.map((button) => buttonTemplate(button))}</div>
        </div>
      `;
    },
};
