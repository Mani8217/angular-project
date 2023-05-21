import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGalleryComponent } from './card-gallery/card-gallery.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardFormComponent } from './card-form/card-form.component';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
@NgModule({
  declarations: [
    CardGalleryComponent,
    CardDetailComponent,
    CardFormComponent,
    Child1Component,
    Child2Component,



  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule

  ],
  exports:[
    CardDetailComponent,
    CardFormComponent,
    CardGalleryComponent



  ]

})
export class CardsModule { }
