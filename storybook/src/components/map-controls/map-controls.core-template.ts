import { MapControls } from "dso-toolkit";
import { html } from "lit-html";

import { BaseLayerChangeEvent } from "@dso-toolkit/core/src/components/map-base-layers/map-base-layers.interfaces";
import { OverlayChangeEvent } from "@dso-toolkit/core/src/components/map-overlays/map-overlays.interfaces";

import { ComponentImplementation } from "../../templates";

export const coreMapControls: ComponentImplementation<MapControls> = {
  component: "mapControls",
  implementation: "core",
  template: ({ richContentTemplate }) =>
    function mapControlsTemplate({
      dsoZoomIn,
      dsoZoomOut,
      dsoToggle,
      open,
      baseLayers,
      dsoBaseLayerChange,
      overlays,
      dsoToggleOverlay,
      disableZoom,
    }) {
      return html`
        <dso-map-controls
          @dsoZoomIn=${dsoZoomIn}
          @dsoZoomOut=${dsoZoomOut}
          @dsoToggle=${dsoToggle}
          .disableZoom=${disableZoom}
          ?open=${open}
        >
          <dso-map-base-layers
            .baseLayers=${baseLayers}
            @dsoBaseLayerChange=${(e: CustomEvent<BaseLayerChangeEvent>) => dsoBaseLayerChange(e)}
          ></dso-map-base-layers>
          <dso-map-overlays
            .overlays=${overlays}
            @dsoToggleOverlay=${(e: CustomEvent<OverlayChangeEvent>) => dsoToggleOverlay(e)}
          ></dso-map-overlays>
          ${richContentTemplate({
            children: html` <p>Dit is een Web Component wat aangesloten kan worden op Leaflet.js of OpenLayers.</p> `,
          })}
        </dso-map-controls>
      `;
    },
};
