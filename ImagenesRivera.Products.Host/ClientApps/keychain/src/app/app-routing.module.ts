import { OrderComponent } from './@order/order.component';
import { BookComponent } from './@book/book.component';
import { AboutComponent } from './@about/about.component';
import { HomeComponent } from './@home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './@editor/editor.component';
import { ContactComponent } from './@contact/contact.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'contact-us',
    component: ContactComponent
  },
  {
    path: 'my-book',
    component: BookComponent
  },
  {
    path: 'image-editor',
    component: EditorComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
