import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  link_content:string = '';
  @Input()
  id:string = "0";
  @Input()
  title:string = 'Title Card Blog';
  @Input()
  decription:string = 'This is a card Blog';
  @Input()
  img_card:string = 'https://via.placeholder.com/150';
}
