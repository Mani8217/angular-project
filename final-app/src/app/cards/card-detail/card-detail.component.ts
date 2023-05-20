import { Component } from '@angular/core';
import { CardService } from '../card.service';
import { ICard } from 'src/app/models/card';
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {
  countryImgSrc: string = "";
  countryTitle: string = "";
  firstCountry: any;

  name: string = "spain"

  constructor(private cardService : CardService){}

  getByName(name: string): void{
    this.cardService.getByName(this.name).subscribe((data: any) => {
     console.log(data);
     this.firstCountry = data[0];
     this.name = this.firstCountry.name.common
     this.countryImgSrc = this.firstCountry.flags.png

})

}
}
