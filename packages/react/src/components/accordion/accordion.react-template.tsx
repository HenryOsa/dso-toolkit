import { Accordion } from "@dso-toolkit/sources";

import * as React from "react";

import { DsoAccordion, DsoAccordionSection } from "../..";
import { ComponentImplementation } from "../../templates";
import { DemoHtml } from "../../utils/demo-html";

export const reactAccordion: ComponentImplementation<Accordion> = {
  component: "accordion",
  implementation: "react",
  template: () =>
    function accordionTemplate({ variant, reverseAlign, allowMultipleOpen, dsoToggleSection, sections }) {
      return (
        <DsoAccordion
          variant={variant}
          reverseAlign={reverseAlign}
          allowMultipleOpen={allowMultipleOpen}
          onDsoToggleSection={dsoToggleSection}
        >
          {sections.map((section, i) => (
            <DsoAccordionSection
              key={`dsoAccordionSection-${i}`}
              open={section.open}
              handleTitle={section.handleTitle}
              heading={section.heading}
              handleUrl={section.handleUrl}
              state={section.state}
              status={section.status}
              icon={section.icon}
              attachmentCount={section.attachmentCount}
            >
              <DemoHtml html={section.content} />
            </DsoAccordionSection>
          ))}
        </DsoAccordion>
      );
    },
};
