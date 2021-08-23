/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Suggestion } from "./components/autosuggest/autosuggest";
import { DsoDatePickerChangeEvent, DsoDatePickerDirection, DsoDatePickerFocusEvent } from "./components/date-picker/date-picker";
import { InfoButtonToggleEvent } from "./components/info-button/info-button";
import { BaseLayer } from "./components/map-base-layers/map-base-layers.interfaces";
import { Overlay } from "./components/map-overlays/map-overlays.interfaces";
import { SelectableChangeEvent } from "./components/selectable/selectable";
export namespace Components {
    interface DsoAlert {
        /**
          * Whether or not to show the role attribute with value "alert". To control the tooltip add the `role-alert` attribute.
         */
        "roleAlert"?: boolean;
        /**
          * Set status of alert
         */
        "status": 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoAttachmentsCounter {
        "count": number;
    }
    interface DsoAutosuggest {
        /**
          * A method that will be called debounced with the input value as its first parameter. This method will also be called when the input is reduced to an empty string.
          * @returns A promise with an array of `Suggestion`s. You should limit this array to ten items.
         */
        "fetchSuggestions": (value: string) => Promise<Array<Suggestion>>;
        /**
          * Whether the previous suggestions will be presented when the input gets focus again.
         */
        "suggestOnFocus": boolean;
    }
    interface DsoBadge {
        "status"?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoBanner {
        "status": 'warning' | 'danger';
    }
    interface DsoDatePicker {
        /**
          * Forces the opening direction of the calendar modal to be always left or right. This setting can be useful when the input is smaller than the opening date picker would be as by default the picker always opens towards right.
         */
        "direction": DsoDatePickerDirection;
        /**
          * Makes the date picker input component disabled. This prevents users from being able to interact with the input, and conveys its inactive state to assistive technologies.
         */
        "disabled": boolean;
        /**
          * Hide the calendar modal. Set `moveFocusToButton` to false to prevent focus returning to the date picker's button. Default is true.
         */
        "hide": (moveFocusToButton?: boolean) => Promise<void>;
        /**
          * Adds a unique identifier for the date picker input. Use this instead of html `id` attribute.
         */
        "identifier": string | undefined;
        /**
          * Maximum date allowed to be picked. Must be in Dutch date format: DD-MM-YYYY. This setting can be used alone or together with the min property.
         */
        "max": string | undefined;
        /**
          * Minimum date allowed to be picked. Must be in Dutch date format: DD-MM-YYYY. This setting can be used alone or together with the max property.
         */
        "min": string | undefined;
        /**
          * Name of the date picker input.
         */
        "name": string;
        /**
          * Should the input be marked as required?
         */
        "required": boolean;
        /**
          * Defines a specific role attribute for the date picker input.
         */
        "role": string | undefined;
        /**
          * Sets focus on the date picker's input. Use this method instead of the global `focus()`.
         */
        "setFocus": () => Promise<void | undefined>;
        /**
          * Show the calendar modal, moving focus to the calendar inside.
         */
        "show": () => Promise<void>;
        /**
          * Date value. Must be in Dutch date format: DD-MM-YYYY.
         */
        "value": string;
    }
    interface DsoDropdownMenu {
        /**
          * Whether the menu is checkable.
         */
        "checkable": boolean;
        /**
          * Alignment of the dropdown
         */
        "dropdownAlign": "left" | "right";
        /**
          * Whether the menu is open or closed. This attribute is reflected and mutable.
         */
        "open": boolean;
    }
    interface DsoHighlightBox {
        "border"?: boolean;
        "dropShadow"?: boolean;
        "step"?: number;
        "white"?: boolean;
        "yellow"?: boolean;
    }
    interface DsoIcon {
        "icon": string;
    }
    interface DsoInfo {
        "active"?: boolean;
        "fixed"?: boolean;
    }
    interface DsoInfoButton {
        "active"?: boolean;
        "label": string;
    }
    interface DsoLabel {
        "compact"?: boolean;
        "removable"?: boolean;
        "status"?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
    }
    interface DsoMapBaseLayers {
        "baseLayers": BaseLayer[];
        "selectedBaseLayer": BaseLayer | undefined;
    }
    interface DsoMapControls {
        "disableZoom"?: 'in' | 'out' | 'both';
        "open": boolean;
    }
    interface DsoMapOverlays {
        "checkedOverlays": Overlay[];
        "overlays": Overlay[];
    }
    interface DsoProgressBar {
        "max": number;
        "min": number;
        "progress": number;
    }
    interface DsoProgressIndicator {
        "block"?: boolean;
        "label"?: string;
        "size"?: 'small' | 'medium' | 'large';
    }
    interface DsoSelectable {
        "checked"?: boolean;
        "describedById"?: string;
        "disabled"?: boolean;
        "identifier"?: string;
        "indeterminate"?: boolean;
        "infoFixed"?: boolean;
        "invalid"?: boolean;
        "name"?: string;
        "required"?: boolean;
        "type": 'checkbox' | 'radio';
        "value": string;
    }
    interface DsoTooltip {
        /**
          * Activate the tooltip (Sets the `active` attribute)
         */
        "activate": () => Promise<void>;
        /**
          * Whether or not to show the tooltip. To control the tooltip add the `active` attribute or use the `activate()` and `deactivate()` instance methods.
         */
        "active": boolean;
        /**
          * Deactivate the tooltip (Removes the `active` attribute)
         */
        "deactivate": () => Promise<void>;
        /**
          * Specify target element that the tooltip will describe and listens to for events. * `undefined`: The direct parent is used. * `string`: The element is located using `document.getElementById()` * `HTMLElement`: Pass the target element directly If the element is not found an Error is thrown.
         */
        "for"?: string | HTMLElement;
        /**
          * Set attribute `no-arrow` to hide the arrow
         */
        "noArrow": boolean;
        /**
          * Set position of tooltip relative to target
         */
        "position": 'top' | 'right' | 'bottom' | 'left';
        /**
          * Defines if the tooltip has a smaller max-width
         */
        "small"?: boolean;
    }
}
declare global {
    interface HTMLDsoAlertElement extends Components.DsoAlert, HTMLStencilElement {
    }
    var HTMLDsoAlertElement: {
        prototype: HTMLDsoAlertElement;
        new (): HTMLDsoAlertElement;
    };
    interface HTMLDsoAttachmentsCounterElement extends Components.DsoAttachmentsCounter, HTMLStencilElement {
    }
    var HTMLDsoAttachmentsCounterElement: {
        prototype: HTMLDsoAttachmentsCounterElement;
        new (): HTMLDsoAttachmentsCounterElement;
    };
    interface HTMLDsoAutosuggestElement extends Components.DsoAutosuggest, HTMLStencilElement {
    }
    var HTMLDsoAutosuggestElement: {
        prototype: HTMLDsoAutosuggestElement;
        new (): HTMLDsoAutosuggestElement;
    };
    interface HTMLDsoBadgeElement extends Components.DsoBadge, HTMLStencilElement {
    }
    var HTMLDsoBadgeElement: {
        prototype: HTMLDsoBadgeElement;
        new (): HTMLDsoBadgeElement;
    };
    interface HTMLDsoBannerElement extends Components.DsoBanner, HTMLStencilElement {
    }
    var HTMLDsoBannerElement: {
        prototype: HTMLDsoBannerElement;
        new (): HTMLDsoBannerElement;
    };
    interface HTMLDsoDatePickerElement extends Components.DsoDatePicker, HTMLStencilElement {
    }
    var HTMLDsoDatePickerElement: {
        prototype: HTMLDsoDatePickerElement;
        new (): HTMLDsoDatePickerElement;
    };
    interface HTMLDsoDropdownMenuElement extends Components.DsoDropdownMenu, HTMLStencilElement {
    }
    var HTMLDsoDropdownMenuElement: {
        prototype: HTMLDsoDropdownMenuElement;
        new (): HTMLDsoDropdownMenuElement;
    };
    interface HTMLDsoHighlightBoxElement extends Components.DsoHighlightBox, HTMLStencilElement {
    }
    var HTMLDsoHighlightBoxElement: {
        prototype: HTMLDsoHighlightBoxElement;
        new (): HTMLDsoHighlightBoxElement;
    };
    interface HTMLDsoIconElement extends Components.DsoIcon, HTMLStencilElement {
    }
    var HTMLDsoIconElement: {
        prototype: HTMLDsoIconElement;
        new (): HTMLDsoIconElement;
    };
    interface HTMLDsoInfoElement extends Components.DsoInfo, HTMLStencilElement {
    }
    var HTMLDsoInfoElement: {
        prototype: HTMLDsoInfoElement;
        new (): HTMLDsoInfoElement;
    };
    interface HTMLDsoInfoButtonElement extends Components.DsoInfoButton, HTMLStencilElement {
    }
    var HTMLDsoInfoButtonElement: {
        prototype: HTMLDsoInfoButtonElement;
        new (): HTMLDsoInfoButtonElement;
    };
    interface HTMLDsoLabelElement extends Components.DsoLabel, HTMLStencilElement {
    }
    var HTMLDsoLabelElement: {
        prototype: HTMLDsoLabelElement;
        new (): HTMLDsoLabelElement;
    };
    interface HTMLDsoMapBaseLayersElement extends Components.DsoMapBaseLayers, HTMLStencilElement {
    }
    var HTMLDsoMapBaseLayersElement: {
        prototype: HTMLDsoMapBaseLayersElement;
        new (): HTMLDsoMapBaseLayersElement;
    };
    interface HTMLDsoMapControlsElement extends Components.DsoMapControls, HTMLStencilElement {
    }
    var HTMLDsoMapControlsElement: {
        prototype: HTMLDsoMapControlsElement;
        new (): HTMLDsoMapControlsElement;
    };
    interface HTMLDsoMapOverlaysElement extends Components.DsoMapOverlays, HTMLStencilElement {
    }
    var HTMLDsoMapOverlaysElement: {
        prototype: HTMLDsoMapOverlaysElement;
        new (): HTMLDsoMapOverlaysElement;
    };
    interface HTMLDsoProgressBarElement extends Components.DsoProgressBar, HTMLStencilElement {
    }
    var HTMLDsoProgressBarElement: {
        prototype: HTMLDsoProgressBarElement;
        new (): HTMLDsoProgressBarElement;
    };
    interface HTMLDsoProgressIndicatorElement extends Components.DsoProgressIndicator, HTMLStencilElement {
    }
    var HTMLDsoProgressIndicatorElement: {
        prototype: HTMLDsoProgressIndicatorElement;
        new (): HTMLDsoProgressIndicatorElement;
    };
    interface HTMLDsoSelectableElement extends Components.DsoSelectable, HTMLStencilElement {
    }
    var HTMLDsoSelectableElement: {
        prototype: HTMLDsoSelectableElement;
        new (): HTMLDsoSelectableElement;
    };
    interface HTMLDsoTooltipElement extends Components.DsoTooltip, HTMLStencilElement {
    }
    var HTMLDsoTooltipElement: {
        prototype: HTMLDsoTooltipElement;
        new (): HTMLDsoTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "dso-alert": HTMLDsoAlertElement;
        "dso-attachments-counter": HTMLDsoAttachmentsCounterElement;
        "dso-autosuggest": HTMLDsoAutosuggestElement;
        "dso-badge": HTMLDsoBadgeElement;
        "dso-banner": HTMLDsoBannerElement;
        "dso-date-picker": HTMLDsoDatePickerElement;
        "dso-dropdown-menu": HTMLDsoDropdownMenuElement;
        "dso-highlight-box": HTMLDsoHighlightBoxElement;
        "dso-icon": HTMLDsoIconElement;
        "dso-info": HTMLDsoInfoElement;
        "dso-info-button": HTMLDsoInfoButtonElement;
        "dso-label": HTMLDsoLabelElement;
        "dso-map-base-layers": HTMLDsoMapBaseLayersElement;
        "dso-map-controls": HTMLDsoMapControlsElement;
        "dso-map-overlays": HTMLDsoMapOverlaysElement;
        "dso-progress-bar": HTMLDsoProgressBarElement;
        "dso-progress-indicator": HTMLDsoProgressIndicatorElement;
        "dso-selectable": HTMLDsoSelectableElement;
        "dso-tooltip": HTMLDsoTooltipElement;
    }
}
declare namespace LocalJSX {
    interface DsoAlert {
        /**
          * Whether or not to show the role attribute with value "alert". To control the tooltip add the `role-alert` attribute.
         */
        "roleAlert"?: boolean;
        /**
          * Set status of alert
         */
        "status": 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoAttachmentsCounter {
        "count": number;
    }
    interface DsoAutosuggest {
        /**
          * A method that will be called debounced with the input value as its first parameter. This method will also be called when the input is reduced to an empty string.
          * @returns A promise with an array of `Suggestion`s. You should limit this array to ten items.
         */
        "fetchSuggestions": (value: string) => Promise<Array<Suggestion>>;
        /**
          * Emitted when a suggestion is selected. The `detail` property of the `CustomEvent` will contain the selected suggestion.
         */
        "onSelected"?: (event: CustomEvent<any>) => void;
        /**
          * Whether the previous suggestions will be presented when the input gets focus again.
         */
        "suggestOnFocus"?: boolean;
    }
    interface DsoBadge {
        "status"?: 'primary' | 'success' | 'info' | 'warning' | 'danger';
    }
    interface DsoBanner {
        "status": 'warning' | 'danger';
    }
    interface DsoDatePicker {
        /**
          * Forces the opening direction of the calendar modal to be always left or right. This setting can be useful when the input is smaller than the opening date picker would be as by default the picker always opens towards right.
         */
        "direction"?: DsoDatePickerDirection;
        /**
          * Makes the date picker input component disabled. This prevents users from being able to interact with the input, and conveys its inactive state to assistive technologies.
         */
        "disabled"?: boolean;
        /**
          * Adds a unique identifier for the date picker input. Use this instead of html `id` attribute.
         */
        "identifier"?: string | undefined;
        /**
          * Maximum date allowed to be picked. Must be in Dutch date format: DD-MM-YYYY. This setting can be used alone or together with the min property.
         */
        "max"?: string | undefined;
        /**
          * Minimum date allowed to be picked. Must be in Dutch date format: DD-MM-YYYY. This setting can be used alone or together with the max property.
         */
        "min"?: string | undefined;
        /**
          * Name of the date picker input.
         */
        "name"?: string;
        /**
          * Event emitted when a date is selected.
         */
        "onDateChange"?: (event: CustomEvent<DsoDatePickerChangeEvent>) => void;
        /**
          * Event emitted the date picker input is blurred.
         */
        "onDsoBlur"?: (event: CustomEvent<DsoDatePickerFocusEvent>) => void;
        /**
          * Event emitted the date picker input is focused.
         */
        "onDsoFocus"?: (event: CustomEvent<DsoDatePickerFocusEvent>) => void;
        /**
          * Should the input be marked as required?
         */
        "required"?: boolean;
        /**
          * Defines a specific role attribute for the date picker input.
         */
        "role"?: string | undefined;
        /**
          * Date value. Must be in Dutch date format: DD-MM-YYYY.
         */
        "value"?: string;
    }
    interface DsoDropdownMenu {
        /**
          * Whether the menu is checkable.
         */
        "checkable"?: boolean;
        /**
          * Alignment of the dropdown
         */
        "dropdownAlign"?: "left" | "right";
        /**
          * Whether the menu is open or closed. This attribute is reflected and mutable.
         */
        "open"?: boolean;
    }
    interface DsoHighlightBox {
        "border"?: boolean;
        "dropShadow"?: boolean;
        "step"?: number;
        "white"?: boolean;
        "yellow"?: boolean;
    }
    interface DsoIcon {
        "icon": string;
    }
    interface DsoInfo {
        "active"?: boolean;
        "fixed"?: boolean;
        "onClose"?: (event: CustomEvent<MouseEvent>) => void;
    }
    interface DsoInfoButton {
        "active"?: boolean;
        "label"?: string;
        "onToggle"?: (event: CustomEvent<InfoButtonToggleEvent>) => void;
    }
    interface DsoLabel {
        "compact"?: boolean;
        "onRemoveClick"?: (event: CustomEvent<MouseEvent>) => void;
        "removable"?: boolean;
        "status"?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
    }
    interface DsoMapBaseLayers {
        "baseLayers": BaseLayer[];
        "onBaseLayerChange"?: (event: CustomEvent<BaseLayer>) => void;
        "selectedBaseLayer"?: BaseLayer | undefined;
    }
    interface DsoMapControls {
        "disableZoom"?: 'in' | 'out' | 'both';
        "onZoomIn"?: (event: CustomEvent<MouseEvent>) => void;
        "onZoomOut"?: (event: CustomEvent<MouseEvent>) => void;
        "open"?: boolean;
    }
    interface DsoMapOverlays {
        "checkedOverlays"?: Overlay[];
        "onCheckedOverlaysChange"?: (event: CustomEvent<Overlay[]>) => void;
        "overlays": Overlay[];
    }
    interface DsoProgressBar {
        "max"?: number;
        "min"?: number;
        "progress": number;
    }
    interface DsoProgressIndicator {
        "block"?: boolean;
        "label"?: string;
        "size"?: 'small' | 'medium' | 'large';
    }
    interface DsoSelectable {
        "checked"?: boolean;
        "describedById"?: string;
        "disabled"?: boolean;
        "identifier"?: string;
        "indeterminate"?: boolean;
        "infoFixed"?: boolean;
        "invalid"?: boolean;
        "name"?: string;
        "onDsoChange"?: (event: CustomEvent<SelectableChangeEvent>) => void;
        "required"?: boolean;
        "type": 'checkbox' | 'radio';
        "value": string;
    }
    interface DsoTooltip {
        /**
          * Whether or not to show the tooltip. To control the tooltip add the `active` attribute or use the `activate()` and `deactivate()` instance methods.
         */
        "active"?: boolean;
        /**
          * Specify target element that the tooltip will describe and listens to for events. * `undefined`: The direct parent is used. * `string`: The element is located using `document.getElementById()` * `HTMLElement`: Pass the target element directly If the element is not found an Error is thrown.
         */
        "for"?: string | HTMLElement;
        /**
          * Set attribute `no-arrow` to hide the arrow
         */
        "noArrow"?: boolean;
        /**
          * Set position of tooltip relative to target
         */
        "position"?: 'top' | 'right' | 'bottom' | 'left';
        /**
          * Defines if the tooltip has a smaller max-width
         */
        "small"?: boolean;
    }
    interface IntrinsicElements {
        "dso-alert": DsoAlert;
        "dso-attachments-counter": DsoAttachmentsCounter;
        "dso-autosuggest": DsoAutosuggest;
        "dso-badge": DsoBadge;
        "dso-banner": DsoBanner;
        "dso-date-picker": DsoDatePicker;
        "dso-dropdown-menu": DsoDropdownMenu;
        "dso-highlight-box": DsoHighlightBox;
        "dso-icon": DsoIcon;
        "dso-info": DsoInfo;
        "dso-info-button": DsoInfoButton;
        "dso-label": DsoLabel;
        "dso-map-base-layers": DsoMapBaseLayers;
        "dso-map-controls": DsoMapControls;
        "dso-map-overlays": DsoMapOverlays;
        "dso-progress-bar": DsoProgressBar;
        "dso-progress-indicator": DsoProgressIndicator;
        "dso-selectable": DsoSelectable;
        "dso-tooltip": DsoTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dso-alert": LocalJSX.DsoAlert & JSXBase.HTMLAttributes<HTMLDsoAlertElement>;
            "dso-attachments-counter": LocalJSX.DsoAttachmentsCounter & JSXBase.HTMLAttributes<HTMLDsoAttachmentsCounterElement>;
            "dso-autosuggest": LocalJSX.DsoAutosuggest & JSXBase.HTMLAttributes<HTMLDsoAutosuggestElement>;
            "dso-badge": LocalJSX.DsoBadge & JSXBase.HTMLAttributes<HTMLDsoBadgeElement>;
            "dso-banner": LocalJSX.DsoBanner & JSXBase.HTMLAttributes<HTMLDsoBannerElement>;
            "dso-date-picker": LocalJSX.DsoDatePicker & JSXBase.HTMLAttributes<HTMLDsoDatePickerElement>;
            "dso-dropdown-menu": LocalJSX.DsoDropdownMenu & JSXBase.HTMLAttributes<HTMLDsoDropdownMenuElement>;
            "dso-highlight-box": LocalJSX.DsoHighlightBox & JSXBase.HTMLAttributes<HTMLDsoHighlightBoxElement>;
            "dso-icon": LocalJSX.DsoIcon & JSXBase.HTMLAttributes<HTMLDsoIconElement>;
            "dso-info": LocalJSX.DsoInfo & JSXBase.HTMLAttributes<HTMLDsoInfoElement>;
            "dso-info-button": LocalJSX.DsoInfoButton & JSXBase.HTMLAttributes<HTMLDsoInfoButtonElement>;
            "dso-label": LocalJSX.DsoLabel & JSXBase.HTMLAttributes<HTMLDsoLabelElement>;
            "dso-map-base-layers": LocalJSX.DsoMapBaseLayers & JSXBase.HTMLAttributes<HTMLDsoMapBaseLayersElement>;
            "dso-map-controls": LocalJSX.DsoMapControls & JSXBase.HTMLAttributes<HTMLDsoMapControlsElement>;
            "dso-map-overlays": LocalJSX.DsoMapOverlays & JSXBase.HTMLAttributes<HTMLDsoMapOverlaysElement>;
            "dso-progress-bar": LocalJSX.DsoProgressBar & JSXBase.HTMLAttributes<HTMLDsoProgressBarElement>;
            "dso-progress-indicator": LocalJSX.DsoProgressIndicator & JSXBase.HTMLAttributes<HTMLDsoProgressIndicatorElement>;
            "dso-selectable": LocalJSX.DsoSelectable & JSXBase.HTMLAttributes<HTMLDsoSelectableElement>;
            "dso-tooltip": LocalJSX.DsoTooltip & JSXBase.HTMLAttributes<HTMLDsoTooltipElement>;
        }
    }
}
