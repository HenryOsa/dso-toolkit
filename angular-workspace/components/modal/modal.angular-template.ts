import { StoryFnAngularReturnType } from "@storybook/angular/dist/ts3.9/client/preview/types";
import { Modal } from "dso-toolkit";

import { ComponentImplementation } from "../../templates";

export const angularModal: ComponentImplementation<Modal<StoryFnAngularReturnType>> = {
  component: "modal",
  implementation: "angular",
  template: () =>
    function modalTemplate(props) {
      return {
        props,
        template: `
          <dso-modal
            [role]="role"
            [modalTitle]="modalTitle"
            [showCloseButton]="showCloseButton"
            [initialFocus]="initialFocus"
            (dsoClose)="dsoClose?.($event)"
          >
            <div slot="body" [innerHTML]="body.template | trustHtml"></div>
            <div *ngIf="footer" slot="footer" [innerHTML]="footer.template | trustHtml"></div>
          </dso-modal>`,
      };
    },
};
