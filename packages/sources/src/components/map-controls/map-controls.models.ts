import { baseLayers, overlays } from "./map-controls.content";

export interface BaseLayer {
  id: number;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  info?: string;
}

export interface BaseLayerChangeEvent {
  activeBaseLayer: BaseLayer;
}

export interface Overlay {
  id: number;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  info?: string;
}

export interface OverlayChangeEvent {
  overlay: Overlay;
  checked: boolean;
}

export interface MapControls {
  dsoZoomIn: (e: CustomEvent<MouseEvent>) => void;
  dsoZoomOut: (e: CustomEvent<MouseEvent>) => void;
  open: boolean;
  baseLayers: typeof baseLayers;
  dsoBaseLayerChange: (e: CustomEvent<BaseLayerChangeEvent>) => void;
  overlays: typeof overlays;
  dsoToggleOverlay: (e: CustomEvent<OverlayChangeEvent>) => void;
  disableZoom?: "both" | "in" | "out" | undefined;
}
