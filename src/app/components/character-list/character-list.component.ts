import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: any = null;
  filteredCharacters: any[] = [];
  loading = true;
  searchTerm = '';
  private searchSubscription?: Subscription;

  constructor(private dragonballService: DragonballService) { }

  ngOnInit(): void {
    // Carica tutti i personaggi
    this.dragonballService.getCharacters().subscribe({
      next: (res) => {
        this.characters = res;
        this.filteredCharacters = res.items || [];
        this.loading = false;
      },
      error: (err) => {
        console.error('Errore nel caricamento dei personaggi:', err);
        this.loading = false;
      }
    });

    // Sottoscrivi al termine di ricerca dal servizio
    this.searchSubscription = this.dragonballService.searchTerm$.subscribe(term => {
      this.searchTerm = term;
      this.filterCharacters();
    });
  }

  filterCharacters(): void {
    if (!this.characters || !this.characters.items) return;
    
    if (!this.searchTerm.trim()) {
      this.filteredCharacters = this.characters.items;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredCharacters = this.characters.items.filter((char: any) =>
        char.name.toLowerCase().includes(term) ||
        (char.race && char.race.toLowerCase().includes(term))
      );
    }
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
