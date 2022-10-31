import { StoriesOfArguments, storiesOfFactory } from "../../storybook/stories-of-factory";

import { ImageArgs, imageArgsMapper, imageArgTypes } from "./image.args";
import { Image } from "./image.models";

export interface ImageTemplates<TemplateFnReturnType> {
  imageTemplate: (imageProperties: Image) => TemplateFnReturnType;
}

export function storiesOfImage<Implementation, Templates, TemplateFnReturnType>(
  storiesOfArguments: StoriesOfArguments<
    Implementation,
    Templates,
    TemplateFnReturnType,
    ImageTemplates<TemplateFnReturnType>
  >
) {
  return storiesOfFactory("Image", storiesOfArguments, (stories, templateMapper) => {
    stories.addParameters({
      argTypes: imageArgTypes,
      args: {
        source: "images/sneeuwpop.png",
        alt: "Afbeelding van een sneeuwpop",
      },
    });

    const template = templateMapper<ImageArgs>((args, { imageTemplate }) => imageTemplate(imageArgsMapper(args)));

    stories.add("default", template);

    stories.add("responsive", template, {
      args: {
        modifier: "img-responsive",
      },
    });

    stories.add("circle", template, {
      args: {
        modifier: "img-circle",
      },
    });
  });
}
