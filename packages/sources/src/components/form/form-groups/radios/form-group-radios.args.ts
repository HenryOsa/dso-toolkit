import { HandlerFunction } from '@storybook/addon-actions';
import { ArgTypes, noControl } from '../../../../storybook';
import { v4 as uuidv4 } from 'uuid';

import { FormGroupRadios } from '../../form.models';

export interface FormGroupRadiosArgs {
  id: string;
  label: string;
  state?: 'invalid' | 'valid';
  required: boolean;
  disabled: boolean;
  errorText?: string;
  helpText?: string;
  infoButtonHandler: HandlerFunction;
  infoButtonLabel: string;
  infoActive: boolean;
  infoText: string;
  infoCloseHandler: HandlerFunction;
  infoFixed: boolean;
}

export const formGroupRadiosArgTypes: ArgTypes<FormGroupRadiosArgs> = {
  id: {
    control: {
      type: 'text'
    }
  },
  label: {
    control: {
      type: 'text'
    }
  },
  state: {
    options: [undefined, 'invalid', 'valid'],
    control: {
      type: 'select'
    }
  },
  required: {
    control: {
      type: 'boolean'
    }
  },
  disabled: {
    control: {
      type: 'boolean'
    }
  },
  errorText: {
    control: {
      type: 'text'
    }
  },
  helpText: {
    control: {
      type: 'text'
    }
  },
  infoActive: {
    control: {
      type: 'boolean'
    }
  },
  infoButtonHandler: {
    ...noControl,
    action: 'infoButton click'
  },
  infoButtonLabel: {
    control: {
      type: 'text'
    }
  },
  infoText: {
    control: {
      type: 'text'
    }
  },
  infoCloseHandler: {
    ...noControl,
    action: 'info close click'
  },
  infoFixed: {
    control: {
      type: 'boolean'
    }
  },
};

export function formGroupRadiosArgsMapper(a: FormGroupRadiosArgs): FormGroupRadios<any> {
  return {
    group: 'radios',
    id: a.id,
    label: a.label,
    required: a.required,
    disabled: a.disabled,
    state: a.state,
    errorText: a.errorText,
    helpText: a.helpText,
    selectables: [
      {
        id: uuidv4(),
        value: 'optie-1',
        type: 'radio',
        label: 'een'
      },
      {
        id: uuidv4(),
        value: 'optie-2',
        type: 'radio',
        label: 'twee'
      },
      {
        id: uuidv4(),
        value: 'opties-3',
        type: 'radio',
        label: 'drie'
      }
    ],
    infoButton: a.infoButtonLabel && a.infoText
      ? {
        onClick: a.infoButtonHandler,
        active: a.infoActive,
        label: a.infoButtonLabel
      }
      : undefined,
    info: a.infoButtonLabel && a.infoText
      ? {
        active: a.infoActive,
        fixed: a.infoFixed,
        onClose: a.infoCloseHandler,
        richContent: a.infoText
      }
      : undefined
  };
}
