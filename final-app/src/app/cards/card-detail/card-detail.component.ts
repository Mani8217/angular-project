import { AfterViewInit, Component } from '@angular/core';
import { CardService } from '../card.service';
import { ICard } from 'src/app/models/card';
import * as L from 'leaflet'
@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {

  countryImgSrc: string = "";
  countryTitle: string = "";
  firstCountry: any;
  googleMap: string = "";
  lngtude!: number
  latitude!: number

  name: string = "spain"

  constructor(private cardService : CardService){}



  getByName(name: string): void{
    this.cardService.getByName(this.name).subscribe((data: any) => {
     console.log(data);
     this.firstCountry = data[0];
     this.name = this.firstCountry.name.common
     this.countryImgSrc = this.firstCountry.flags.png;
     this.googleMap = this.firstCountry.maps.googleMaps;

     const mapCanvas = document.getElementById('mapCanvas') as HTMLCanvasElement;
     const context = mapCanvas.getContext('2d');
     this.lngtude = this.firstCountry.latlng[0];
     this.latitude = this.firstCountry.latlng[1];
     mapCanvas.width = this.latitude
     mapCanvas.height = this.lngtude;
     context!.fillStyle= 'blue'
        context!.fillRect(0, 0, mapCanvas.width, mapCanvas.height);
})

}
}
