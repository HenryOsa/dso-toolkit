import { Label } from "dso-toolkit";

import { html, nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { ComponentImplementation } from "../../templates";

// Todo: Move to dso-toolkit
const statusMap = new Map<string, string>([
  ["primary", "Primair"],
  ["info", "Info"],
  ["success", "Succes"],
  ["warning", "Waarschuwing"],
  ["danger", "Gevaar"],
]);

export const cssLabel: ComponentImplementation<Label> = {
  component: "label",
  implementation: "html-css",
  template: ({ iconTemplate }) =>
    function labelTemplate({ slotName, status, label, removable, dsoRemoveClick, compact, symbol }) {
      return html`
        <span
          slot=${ifDefined(slotName)}
          class="dso-label ${classMap({ [`dso-label-${status}`]: !!status, [`dso-compact`]: !!compact })}"
        >
          ${symbol ? html`<span class="dso-label-symbol">${unsafeHTML(symbol)}</span>` : nothing}${status &&
          statusMap.has(status)
            ? html`<span class="sr-only">${statusMap.get(status)}: </span>`
            : nothing}${label}${removable
            ? html`
                <button type="button" @click=${ifDefined(dsoRemoveClick)}>
                  <span class="sr-only">Verwijder</span>
                  ${iconTemplate({ icon: "times" })}
                </button>
              `
            : nothing}
        </span>
      `;
    },
};
