import { storiesOfPagination } from '@dso-toolkit/sources';
import { storiesOf } from '@storybook/react';
import { templateContainer } from '../../templates';

import readme from './readme.md';

storiesOfPagination({
  parameters: {
    module,
    storiesOf,
    readme
  },
  templateContainer,
  storyTemplates: ({ paginationTemplate }) => ({ paginationTemplate })
});
