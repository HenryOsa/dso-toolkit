import { StoryFnAngularReturnType } from "@storybook/angular/dist/ts3.9/client/preview/types";

import { AccordionSection } from "dso-toolkit";
import { Templates } from "../../templates";

const section1: AccordionSection<StoryFnAngularReturnType> = {
  handleTitle: "Is het verplicht om de Vergunningcheck te doen?",
  heading: "h2",
  content: {
    template: `
      <p>
        Nee, de Vergunningcheck is niet verplicht. Het is een hulpmiddel waarmee u kunt zien of u een vergunning nodig
        heeft of melding moet doen.
      </p>
      <p>
        Wel kunt u meteen na de check een aanvraag of melding starten. Een aantal gegevens uit de Vergunningcheck wordt
        dan meegenomen in de aanvraag of melding.
      </p>
    `,
  },
};

const section2: AccordionSection<StoryFnAngularReturnType> = {
  handleTitle: "Voor hoeveel locaties kan ik de Vergunningcheck doen?",
  heading: "h2",
  content: {
    template: `
      <p>
        De Vergunningcheck is bedoeld voor één locatie tegelijk. Wilt u dezelfde werkzaamheid op meerdere locaties doen?
        Dan is het verstandig om voor al deze locaties apart de Vergunningcheck te doen..
      </p>
    `,
  },
};

const section3: AccordionSection<StoryFnAngularReturnType> = {
  handleTitle: "Hoe lang duurt de Vergunningcheck?",
  heading: "h2",
  content: {
    template: `
      De Vergunningcheck duurt ongeveer vijf minuten per gekozen werkzaamheid. Het is wel belangrijk dat u alle
      benodigde informatie bij de hand heeft.
    `,
  },
};

const section4: AccordionSection<StoryFnAngularReturnType> = {
  handleTitle: "Wat kan ik met de uitkomst van de Vergunningcheck?",
  heading: "h2",
  content: {
    template: `
      <div class="dso-rich-content">
        <ul>
          <li>Locatie 1</li>
          <li>
            Locatie 2
            <div class="dso-info">
              <div class="dso-rich-content">
                <p>
                  <strong>Let op:</strong> <i>voorbehoud A bij Locatie 2.</i>
                </p>
              </div>
            </div>
          </li>
          <li>
            Locatie 3
            <ul>
              <li>Locatie 3.1</li>
              <li>Locatie 3.2</li>
            </ul>
          </li>
        </ul>
      </div>
    `,
  },
};

export const basicSections: AccordionSection<StoryFnAngularReturnType>[] = [
  section1,
  section2,
  {
    ...section3,
    open: true,
  },
  section4,
];

export const anchorSections: AccordionSection<StoryFnAngularReturnType>[] = [
  {
    ...section1,
    handleUrl: "#",
  },
  {
    ...section2,
    handleUrl: "#",
  },
  {
    ...section3,
    handleUrl: "#",
    open: true,
  },
  {
    ...section4,
    handleUrl: "#",
  },
];

export function subSections({ accordionTemplate }: Templates): AccordionSection<StoryFnAngularReturnType>[] {
  return [
    {
      ...section1,
      content: {
        template: `
          <div class="dso-rich-content">
            <p>
              <strong>hallo</strong> dit is content
            </p>
          </div>

          ${
            accordionTemplate({
              sections: [
                {
                  handleTitle: "Voor hoeveel locaties kan ik de Vergunningcheck doen?",
                  heading: "h4",
                  content: {
                    template: `
                    <div class="dso-rich-content">
                      <p>
                        <strong>hallo</strong> dit is content
                      </p>
                    </div>
                  `,
                  },
                },
                {
                  handleTitle: "Hoe lang duurt de Vergunningcheck?",
                  heading: "h4",
                  open: true,
                  content: {
                    template: `
                    <div class="dso-rich-content">
                      De Vergunningcheck duurt ongeveer vijf minuten per gekozen werkzaamheid. Het is wel belangrijk dat u
                      alle benodigde informatie bij de hand heeft.
                    </div>
                  `,
                  },
                },
              ],
            }).template
          }

          <div class="dso-rich-content">
            <p>
              <strong>hallo</strong> dit is content na de nested section
            </p>
          </div>
        `,
      },
    },
    section2,
    section3,
    section4,
  ];
}

export const allowMultipleOpenSections: AccordionSection<StoryFnAngularReturnType>[] = [
  {
    ...section1,
    open: true,
  },
  section2,
  {
    ...section3,
    open: true,
  },
  section4,
];

export const conclusionSections: AccordionSection<StoryFnAngularReturnType>[] = [
  {
    ...section1,
    open: true,
  },
  section2,
  {
    ...section3,
    open: true,
  },
  section4,
];

export const compactSections: AccordionSection<StoryFnAngularReturnType>[] = [
  {
    ...section1,
    open: true,
  },
  section2,
  {
    ...section3,
    open: true,
  },
  section4,
];

export const addonsSections: AccordionSection<StoryFnAngularReturnType>[] = [
  {
    ...section1,
    icon: "user-line",
  },
  {
    ...section1,
    state: "error",
    icon: "user-line",
    open: true,
  },
  {
    ...section1,
    state: "error",
    status: "5 van 8 beantwoord",
  },
  {
    ...section1,
    state: "error",
    status: "5 van 8 beantwoord",
  },
  {
    ...section1,
    attachmentCount: 2,
  },
  {
    ...section1,
    attachmentCount: 2,
  },
];

export const alignmentSections: AccordionSection<StoryFnAngularReturnType>[] = [
  {
    ...section1,
    icon: "user-line",
    open: true,
  },
  {
    ...section2,
    icon: "user-line",
  },
  {
    ...section3,
    icon: "user-line",
  },
];
