import { Selectable } from "../../selectable/selectable.models";

import { FormGroupBase } from "./form-group.base-model";

export interface FormGroupRadios<TemplateFnReturnType> extends FormGroupBase<TemplateFnReturnType> {
  group: "radios";
  selectables: Selectable<TemplateFnReturnType>[];
}
