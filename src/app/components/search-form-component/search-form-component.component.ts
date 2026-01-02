import { Component, OnInit } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-search-form-component',
  templateUrl: './search-form-component.component.html',
  styleUrls: ['./search-form-component.component.scss']
})
export class SearchFormComponentComponent implements OnInit {
  searchTerm: string = '';

  constructor(private dragonballService: DragonballService) { }

  ngOnInit(): void {
  }

  onSearch(): void {
    // mando il termine di ricerca al servizio
    this.dragonballService.setSearchTerm(this.searchTerm);
    console.log('Ricerca per:', this.searchTerm);
  }

  onClear(): void {
    this.searchTerm = '';
    this.dragonballService.setSearchTerm('');
    console.log('Ricerca pulita');
  }

}
