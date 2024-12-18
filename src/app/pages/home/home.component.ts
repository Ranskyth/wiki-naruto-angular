import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { TitleBlogComponent } from "../../components/title-blog/title-blog.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, TitleBlogComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
