import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGalleryComponent } from './card-gallery/card-gallery.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardFormComponent } from './card-form/card-form.component';



@NgModule({
  declarations: [
    CardGalleryComponent,
    CardDetailComponent,
    CardFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardDetailComponent,
    CardFormComponent,
    CardGalleryComponent
  ]

})
export class CardsModule { }
