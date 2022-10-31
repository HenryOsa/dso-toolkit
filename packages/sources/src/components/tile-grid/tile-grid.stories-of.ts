import { TileGridArgs, tileGridArgTypes } from "./tile-grid.args";
import { Tile } from "../..";
import { tiles } from "./tile-grid.content";
import { StoriesOfArguments, storiesOfFactory } from "../../storybook/stories-of-factory";

export interface TileGridTemplates<TemplateFnReturnType> {
  tileGridDemoTemplate: (children: Tile[]) => TemplateFnReturnType;
}

export function storiesOfTileGrid<Implementation, Templates, TemplateFnReturnType>(
  storiesOfArguments: StoriesOfArguments<
    Implementation,
    Templates,
    TemplateFnReturnType,
    TileGridTemplates<TemplateFnReturnType>
  >
) {
  return storiesOfFactory("Tile Grid", storiesOfArguments, (stories, templateMapper) => {
    stories.addParameters({
      argTypes: tileGridArgTypes,
      controls: {
        hideNoControlsWarning: true,
      },
    });

    stories.add(
      "Tile Grid",
      templateMapper<TileGridArgs>((_args, { tileGridDemoTemplate }) => tileGridDemoTemplate(tiles))
    );
  });
}
