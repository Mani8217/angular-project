import { Component , Input} from '@angular/core';
import { CardService } from '../card.service';
import { ICard } from 'src/app/models/card';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {

   @Input() childData!: string;
 selectOption: string = "";
 regionCountry: ICard[] = []
 imgSrc : string = "";
 nameList: string[] = []
 bannerList: string [] = []
 selectedValue: string = ""

  constructor(private cardService: CardService){}
 getByContinent(selectOption: string): void {
  this.bannerList= []
  this.nameList = []
  this.selectedValue = selectOption
    this.cardService.getByRegion(selectOption).subscribe(data => {
      console.log(data)

      this.regionCountry = data;
      this.regionCountry.forEach((card: any)=> {
        this.nameList.push(card['name'].common);

        console.log(this.nameList);
        this.bannerList.push(card['flags'].png)

    })
  })
}
}



