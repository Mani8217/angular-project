import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { ICard } from 'src/app/models/card';

@Component({
  selector: 'app-card-gallery',
  templateUrl: './card-gallery.component.html',
  styleUrls: ['./card-gallery.component.css']
})
export class CardGalleryComponent implements OnInit{
 cards: ICard[] = []
 names: string[] = []
 flags: string[] = []
 subRegion: string[] = []
constructor(private cardService: CardService){}

  ngOnInit(): void {
    this.cardService.getAll().subscribe(cards => {
      console.log(cards);
      this.cards = cards;
      cards.forEach((card: any)=> {
        this.names.push(card['name'].common);

        console.log(this.names);
        this.flags.push(card['flags'].png)
        this.subRegion.push(card['subregion'])
      })




        })
}





 }

