import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule {}
