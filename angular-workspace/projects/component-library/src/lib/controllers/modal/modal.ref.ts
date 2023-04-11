import { DialogRef } from "@angular/cdk/dialog";

import { DsoModalContainer } from "./modal-container.component";

export class DsoModalRef {
  constructor(private dialogRef: DialogRef<unknown, DsoModalContainer>) {}

  close() {
    this.dialogRef?.close();
  }

  onDsoClose(fn: (e: Event | CustomEvent) => void): void {
    this.dialogRef.componentInstance?.dsoClose.subscribe(fn);
  }

  offDsoClose(): void {
    this.dialogRef.componentInstance?.dsoClose.unsubscribe();
  }
}
