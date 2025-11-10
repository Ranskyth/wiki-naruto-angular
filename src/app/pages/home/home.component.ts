import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/card/card.component';
import { apiFake } from '../../data/api-fake';
import { IPersonagem } from '../../types/personagem';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  api: IPersonagem[] = apiFake;
  search: string = '';
  selectedClan: string = '';

  get clans(): string[] {
    const allClans = this.api.map((item) => item.caracteristicas.cla);
    return Array.from(new Set(allClans));
  }

  get filteredApi() {
    return this.api.filter((item) => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(this.search.toLowerCase());
      const matchClan = this.selectedClan
        ? item.caracteristicas.cla === this.selectedClan
        : true;
      return matchSearch && matchClan;
    });
  }
}
