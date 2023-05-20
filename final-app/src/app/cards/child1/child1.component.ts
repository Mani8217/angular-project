import { Component, Input } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
@Input() childData!: string;


countryImgSrc: string = "https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg";
countryTitle: string = "";
firstCountry: any;
countryGeoPosition : string = "";
latitude: number= 0;
langitude: number = 0
lat: number = 0;
lang: number = 0;
name: string = "spain"
currency: string = ""
capital: string = ""
continent : string = ""
nameOfficial: string = ""

constructor(private cardService : CardService){}

 getByName(name: string): void{
  this.cardService.getByName(this.name).subscribe((data: any) => {
   console.log(data);
   this.firstCountry = data[0];
   this.name = this.firstCountry.name.common
   this.countryImgSrc = this.firstCountry.flags.png
   this.latitude = this.firstCountry.latlng[0];
   this.langitude = this.firstCountry.latlng[1];
   this.capital = this.firstCountry.capital[0]
   this.continent = this.firstCountry.continents[0]


})

}
}
