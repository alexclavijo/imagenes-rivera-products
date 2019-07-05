import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { WorkComponent } from './work/work.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    WorkComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
