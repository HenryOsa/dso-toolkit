import { html, TemplateResult } from "lit-html";
import { AccordionSection } from "dso-toolkit";
import { Templates } from "../../templates";

const section1: AccordionSection<TemplateResult> = {
  handleTitle: "Is het verplicht om de Vergunningcheck te doen?",
  heading: "h2",
  content: html`<p>
      Nee, de Vergunningcheck is niet verplicht. Het is een hulpmiddel waarmee u kunt zien of u een vergunning nodig
      heeft of melding moet doen.
    </p>
    <p>
      Wel kunt u meteen na de check een aanvraag of melding starten. Een aantal gegevens uit de Vergunningcheck wordt
      dan meegenomen in de aanvraag of melding.
    </p>`,
};

const section2: AccordionSection<TemplateResult> = {
  handleTitle: "Voor hoeveel locaties kan ik de Vergunningcheck doen?",
  heading: "h2",
  content: html`<p>
    De Vergunningcheck is bedoeld voor één locatie tegelijk. Wilt u dezelfde werkzaamheid op meerdere locaties doen? Dan
    is het verstandig om voor al deze locaties apart de Vergunningcheck te doen..
  </p>`,
};

const section3: AccordionSection<TemplateResult> = {
  handleTitle: "Hoe lang duurt de Vergunningcheck?",
  heading: "h2",
  content: html`De Vergunningcheck duurt ongeveer vijf minuten per gekozen werkzaamheid. Het is wel belangrijk dat u
  alle benodigde informatie bij de hand heeft.`,
};

function section4({ richContentTemplate }: Templates): AccordionSection<TemplateResult> {
  return {
    handleTitle: "Wat kan ik met de uitkomst van de Vergunningcheck?",
    heading: "h2",
    content: richContentTemplate({
      children: html`
        <ul>
          <li>Locatie 1</li>
          <li>
            Locatie 2
            <div class="dso-info">
              <div class="dso-rich-content">
                <p><strong>Let op:</strong> <i>voorbehoud A bij Locatie 2.</i></p>
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
      `,
    }),
  };
}

export function basicSections(templates: Templates): AccordionSection<TemplateResult>[] {
  return [
    section1,
    section2,
    {
      ...section3,
      open: true,
    },
    section4(templates),
  ];
}

export function anchorSections(templates: Templates): AccordionSection<TemplateResult>[] {
  return [
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
      ...section4(templates),
      handleUrl: "#",
    },
  ];
}

export function subSections(templates: Templates): AccordionSection<TemplateResult>[] {
  const { accordionTemplate, richContentTemplate } = templates;

  return [
    {
      ...section1,
      content: html` ${richContentTemplate({ children: html`<p><strong>hallo</strong> dit is content</p>` })}
      ${accordionTemplate({
        sections: [
          {
            handleTitle: "Voor hoeveel locaties kan ik de Vergunningcheck doen?",
            heading: "h4",
            content: richContentTemplate({
              children: html` <p><strong>hallo</strong> dit is content</p> `,
            }),
          },
          {
            handleTitle: "Hoe lang duurt de Vergunningcheck?",
            heading: "h4",
            open: true,
            content: richContentTemplate({
              children: html`
                De Vergunningcheck duurt ongeveer vijf minuten per gekozen werkzaamheid. Het is wel belangrijk dat u
                alle benodigde informatie bij de hand heeft.
              `,
            }),
          },
        ],
      })}
      ${richContentTemplate({ children: html` <p><strong>hallo</strong> dit is content na de nested section</p> ` })}`,
    },
    section2,
    section3,
    section4(templates),
  ];
}

export function allowMultipleOpenSections(templates: Templates): AccordionSection<TemplateResult>[] {
  return [
    {
      ...section1,
      open: true,
    },
    section2,
    {
      ...section3,
      open: true,
    },
    section4(templates),
  ];
}

export function conclusionSections(templates: Templates): AccordionSection<TemplateResult>[] {
  return [
    section1,
    section2,
    {
      ...section3,
      open: true,
    },
    section4(templates),
  ];
}

export function compactSections(templates: Templates): AccordionSection<TemplateResult>[] {
  return [
    section1,
    section2,
    {
      ...section3,
      open: true,
    },
    section4(templates),
  ];
}

export const addonsSections: AccordionSection<TemplateResult>[] = [
  {
    ...section1,
    icon: "user-line",
  },
  {
    ...section1,
    state: "danger",
    icon: "user-line",
    open: true,
  },
  {
    ...section1,
    state: "danger",
    status: "5 van 8 beantwoord",
  },
  {
    ...section1,
    state: "danger",
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

export const alignmentSections: AccordionSection<TemplateResult>[] = [
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
