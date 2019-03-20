import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '../material.module';

import { MainNavComponent } from './main-nav/main-nav.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    MainNavComponent,
    AppRoutingModule
  ],
  declarations: [MainNavComponent]
})
export class SharedModule { }
