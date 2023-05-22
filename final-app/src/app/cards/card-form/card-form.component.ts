import { Component, OnInit} from '@angular/core';
import { ICard } from 'src/app/models/card';
declare var $: any;
@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit{
ngOnInit(): void {
}



cardList: ICard[]=[];
cardName: string= "";
cardFlag: string= "";
cardContinent: string = "";



removeCard(id: number){
this.cardList = this.cardList.filter(card => card.id !== id);


}
createCard(): void{

 let myCard : ICard = {
   id: this.cardList.length + 1,
   name: this.cardName,
   flag: this.cardFlag,
   subregion: this.cardContinent
 }
 this.cardList.push(myCard)

}




}
