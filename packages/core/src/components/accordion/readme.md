# `<dso-accordion>`

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                                                                                        | Type                                                  | Default     |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------- | ----------- |
| `allowMultipleOpen` | `allow-multiple-open` | Allows multiple sections to be open at the same time.                                                                                                              | `boolean`                                             | `false`     |
| `reverseAlign`      | `reverse-align`       | Places the chevron at the opposite side. Note: this mode does not display `state`, `attachmentCount` or `status` props on child `<dso-accordion-section>` elements | `boolean`                                             | `false`     |
| `variant`           | `variant`             |                                                                                                                                                                    | `"compact" \| "conclusion" \| "default" \| undefined` | `"default"` |


## Events

| Event                          | Description                                                                                                                                                                                                                                                                                                                                   | Type                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `dsoToggleSection`             | Emitted when a section is toggled.  `event.detail.originalEvent` contains the original `MouseEvent` when the section is toggled by clicking on the header `event.detail.section` contains the toggled section and its new opened value.\ `event.detail.sections` contains all `<dso-accordion-section>` elements belonging to this accordion. | `CustomEvent<AccordionSectionToggleEvent>`             |
| `dsoToggleSectionAnimationEnd` | Event emitted when the accordion section completes its toggle animation.                                                                                                                                                                                                                                                                      | `CustomEvent<AccordionSectionToggleAnimationEndEvent>` |


## Methods

### `animationEnd(sectionElement: HTMLElement) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `closeOpenSections() => Promise<void>`

Closes all sections belonging to this accordion.

#### Returns

Type: `Promise<void>`



### `getState() => Promise<AccordionInternalState>`



#### Returns

Type: `Promise<AccordionInternalState>`



### `toggleSection(sectionElement: HTMLElement | number, event?: MouseEvent) => Promise<undefined | boolean>`

Toggle a section. Pass the `<dso-accordion-section>` element or the index of the section.\
returns `undefined` when no section is toggled.\
returns `true` when the section is opened and `false` when the section is closed.

#### Returns

Type: `Promise<boolean | undefined>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
