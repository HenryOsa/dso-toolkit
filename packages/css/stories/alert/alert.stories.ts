import { storiesOfAlert, Alert, AlertArgs } from '@dso-toolkit/stories';
import { storiesOf } from '@storybook/web-components';
import { html, TemplateResult, nothing } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

// @ts-ignore
import readme from './readme.md';

const statusMap = new Map<string, string>([
  ['success', 'Gelukt'],
  ['info', 'Opmerking'],
  ['warning', 'Waarschuwing'],
  ['danger', 'Fout']
]);

export const alertTemplate = ({ status, message, onClick, withRoleAlert }: Alert) => html`
  <div class="alert alert-${status}" role="${ifDefined(withRoleAlert ? 'alert' : undefined)}">
    <span class="sr-only">${statusMap.get(status)}:</span>
    <div class="dso-rich-content">
      <p>${unsafeHTML(message)}</p>
      ${onClick
        ? html`
          <button type="button" class="btn" @click=${onClick}>Button</button>
        `
        : nothing
      }
    </div>
  </div>
`;

storiesOfAlert<TemplateResult>({
  module,
  storiesOf,
  readme,
  template: ({
    message,
    status,
    click,
    withButton,
    withRoleAlert
  }: AlertArgs) => alertTemplate({
    message,
    status,
    withRoleAlert,
    onClick: withButton ? click : undefined
  })
});
