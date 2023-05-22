import { Component } from '@angular/core';
import { CardService } from '../card.service';
import { ICard } from 'src/app/models/card';
import * as L from 'leaflet'
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent{
  private map:any;

  countryImgSrc: string = "";
  countryTitle: string = "";
  firstCountry: any;
  googleMap: string = "";
  lngtude!: number
  latitude!: number

  name: string = "spain"

  constructor(private cardService : CardService){}



  getByName(name: string): void{
    const canvas = <HTMLCanvasElement>document.getElementById('mapCanvas');
    const ctx = canvas.getContext('2d');
    this.cardService.getByName(this.name).subscribe((data: any) => {
     console.log(data);
     this.firstCountry = data[0];
     this.name = this.firstCountry.name.common
     this.countryImgSrc = this.firstCountry.flags.png;
     this.googleMap = this.firstCountry.maps.googleMaps;

     ctx!.fillStyle = 'red'
      ctx!.fillRect(10, 10, 100, 100);


})

}
}
