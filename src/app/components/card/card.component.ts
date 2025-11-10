import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() decription!: string;
  @Input() img_card!: string;

  ngOnInit() {
    console.log('Card carregado:', this.title);
  }
}
