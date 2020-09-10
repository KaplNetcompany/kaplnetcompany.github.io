import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    ScrollingModule,
    DropdownModule,
    AccordionModule,
    ButtonModule,
  ],
  exports: [
    ScrollingModule,
    DropdownModule,
    AccordionModule,
    ButtonModule,
  ]
})
export class PrimengModule { }
