import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../material.module';

import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MainNavComponent,
    AppRoutingModule
  ],
  declarations: [MainNavComponent]
})
export class SharedModule { }
