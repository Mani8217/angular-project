import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardGalleryComponent } from './cards/card-gallery/card-gallery.component';
import { CardDetailComponent } from './cards/card-detail/card-detail.component';
import { CardFormComponent } from './cards/card-form/card-form.component';

const routes: Routes = [
  {
    path: 'card-gallery',  //Pagina De Inicio
    component:CardGalleryComponent ,
  },
  {
    path: 'card-detail',
    component: CardDetailComponent,
  },
  {
    path: 'card-form',
    component: CardFormComponent,

  },
  {
     path:'',
     redirectTo: '/card-gallery',
     pathMatch: 'full'
  },
  {
     path:'**',
     redirectTo: '/card-gallery',
     pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
