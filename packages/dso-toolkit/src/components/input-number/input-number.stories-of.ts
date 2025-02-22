import { v4 as uuidv4 } from "uuid";

import { InputNumberArgs, inputNumberArgsMapper, inputNumberArgTypes } from "./input-number.args.js";
import { InputNumber } from "./input-number.models.js";
import { StoriesOfArguments, storiesOfFactory } from "../../storybook/index.js";

export interface InputNumberTemplates<TemplateFnReturnType> {
  inputNumberTemplate: (inputNumberProperties: InputNumber) => TemplateFnReturnType;
}

export function storiesOfInputNumber<Implementation, Templates, TemplateFnReturnType>(
  storiesOfArguments: StoriesOfArguments<
    Implementation,
    Templates,
    TemplateFnReturnType,
    InputNumberTemplates<TemplateFnReturnType>
  >
) {
  return storiesOfFactory("Input Number", storiesOfArguments, (stories, templateMapper) => {
    stories.addParameters({
      argTypes: inputNumberArgTypes,
      args: {
        label: "Aantal onderdelen",
        id: uuidv4(),
        count: 99,
      },
    });

    const template = templateMapper<InputNumberArgs>((args, { inputNumberTemplate }) =>
      inputNumberTemplate(inputNumberArgsMapper(args))
    );

    stories.add("Input Number", template);

    return stories;
  });
}
