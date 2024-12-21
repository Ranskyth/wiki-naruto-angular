import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { apiFake } from '../../data/api-fake';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  id:any|number = 0;
  @Input()
  title:string = "";
  @Input()
  decription:string = "";
  @Input()
  img_card:string = "";

  ngOnInit() {
    this.setcard(this.id);
  }
  setcard(id:any) {
    const idcard = apiFake.filter(x => x.id == id);
    this.id = idcard[0].id;
    this.title = idcard[0].title;
    this.decription = idcard[0].description;
    this.img_card = idcard[0].img_card;
  }

}
