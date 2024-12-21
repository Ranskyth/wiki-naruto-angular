import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { apiFake } from '../../data/api-fake';
import { IBibliografia, IPersonagem } from './IPersonagem';
import { CardComponent } from "../../components/card/card.component";
import { CardContetComponent } from '../../components/card-contet/card-contet.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,RouterModule, CardContetComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  public pageid:any
  public nomepersonagem:string = "";
  public img_personagem:string = "";
  public description:string = "";
  public img_card:string = "";
  public bibliografia:IBibliografia = {
    aparencia: "",
    personalidade: "",
    historia: "",
    intro: ""
  };
  public curiosidades:string[] = [];


  
  constructor(private route:ActivatedRoute) {
  
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params)
         this.pageid = params['id'];
      });

      this.setinfocards(this.pageid);
  }
  setinfocards(id:any) {
    const res:IPersonagem = apiFake.filter(x => x.id == id)[0]
    this.pageid = res.id;
    this.nomepersonagem = res.title;
    this.description = res.description;
    this.img_card = res.img_card;
    this.bibliografia.aparencia = res.bibliografia.aparencia;
    this.bibliografia.personalidade = res.bibliografia.personalidade;
    this.bibliografia.historia = res.bibliografia.historia;
    this.bibliografia.intro = res.bibliografia.intro;

    this.curiosidades = res.curiosidades;
  }
}
