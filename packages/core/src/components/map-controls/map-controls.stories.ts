import { storiesOfMapControls } from '@dso-toolkit/sources';
import { ArgsStoryFn } from '@storybook/addons';
import { storiesOf } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';

import { mapControlsTemplate } from './map-controls.template';
import readme from './readme.md';

function decorator(story: ArgsStoryFn<TemplateResult>): TemplateResult {
  return html`
    <div id="map-container-mock" style="background-color: #efefef; height: 500px; position: relative; overflow: hidden;">
      ${story()}
    </div>
  `;
}

storiesOfMapControls(
  {
    module,
    storiesOf,
    readme
  },
  {
    mapControlsTemplate,
    decorator
  }
);
