import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./components/footer/footer.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {FlexModule} from "@angular/flex-layout";
import {MaterialModule} from "./material.module";

@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
    HeaderComponent
    ]
})
export class SharedModule { }
