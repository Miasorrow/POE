import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoeHomeComponent } from './poe-home/poe-home.component';
import { AddPoeComponent } from './add-poe/add-poe.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PoeHomeComponent,
    AddPoeComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class PoeModule { }
