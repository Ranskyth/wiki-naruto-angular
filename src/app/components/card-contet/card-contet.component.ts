import { Component, Input } from '@angular/core';
import { apiFake } from '../../data/api-fake';

@Component({
  selector: 'app-card-contet',
  standalone: true,
  imports: [],
  templateUrl: './card-contet.component.html',
  styleUrl: './card-contet.component.css',
})
export class CardContetComponent {
  @Input()
  id: any | string = '';
  title: string = '';
  decription: string = '';
  img_card: string = '';
  idade: string = '';
  altura: string = '';
  peso: string = '';
  tiposangue: string = '';
  classificacao: string = '';
  ocupacao: string = '';
  cla: string = '';
  familia: string = '';

  ngOnInit() {
    this.setcard(this.id);
  }
  setcard(id: any) {
    const data = apiFake.filter((x) => x.id == id)[0];
    this.id = data.id;
    this.title = data.title;
    this.decription = data.description;
    this.img_card = data.img_card;
    this.idade = data.caracteristicas.idade;
    this.altura = data.caracteristicas.altura;
    this.peso = data.caracteristicas.peso;
    this.tiposangue = data.caracteristicas.tiposangue;
    this.classificacao = data.caracteristicas.classificacao;
    this.ocupacao = data.caracteristicas.ocupacao;
    this.cla = data.caracteristicas.cla;
    this.familia = data.caracteristicas.familia;
  }
}
