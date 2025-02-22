import { noControl, StoriesOfArguments, storiesOfFactory } from "../../storybook/index.js";

import { documentListMapper, documentListStickyMapper } from "./document-list.args.js";
import { DocumentList, DocumentListItemStatusDemoContent } from "./document-list.models.js";

export interface DocumentListTemplates<TemplateFnReturnType> {
  documentListTemplate: (documentListProperties: DocumentList<TemplateFnReturnType>) => TemplateFnReturnType;
  statusDemoMap: (status: DocumentListItemStatusDemoContent) => TemplateFnReturnType;
}

export function storiesOfDocumentList<Implementation, Templates, TemplateFnReturnType>(
  storiesOfArguments: StoriesOfArguments<
    Implementation,
    Templates,
    TemplateFnReturnType,
    DocumentListTemplates<TemplateFnReturnType>
  >
) {
  return storiesOfFactory("Document List", storiesOfArguments, (stories, templateMapper) => {
    stories.addParameters({
      args: {
        ...noControl,
      },
    });

    stories.add(
      "default",
      templateMapper((_args, { documentListTemplate, statusDemoMap }) =>
        documentListTemplate(documentListMapper(statusDemoMap))
      )
    );

    stories.add(
      "sticky",
      templateMapper((_args, { documentListTemplate, statusDemoMap }) =>
        documentListTemplate(documentListStickyMapper(statusDemoMap))
      )
    );

    return stories;
  });
}
