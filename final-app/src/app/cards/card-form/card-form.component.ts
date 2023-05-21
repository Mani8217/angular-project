import { Component, OnInit } from '@angular/core';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit{

cardList: ICard[]=[];
cardName: string= "";
cardFlag: string= "";
cardContinent: string = "";

ngOnInit(): void {



}
createCard(): void{

 let myCard : ICard = {
   name: this.cardName,
   flag: this.cardFlag,
   subregion: this.cardContinent
 }
 this.cardList.push(myCard)

}


}
