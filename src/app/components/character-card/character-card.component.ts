import { Component, OnInit, OnDestroy } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit, OnDestroy {

  character: any;
  characters: any;
  allCharacters: any[] = [];
  filteredPlanets: any[] = [];
  filteredCharacters: any[] = [];
  loading = true;
  loadingCharacters = true;
  searchTerm = '';
  
  // filtri per i personaggi
  selectedRace: string = '';
  selectedGender: string = '';
  selectedAffiliation: string = '';
  
  // liste dropdown - TODO: magari prendere da API?
  races: string[] = ['Saiyan', 'Human', 'Namekian', 'Frieza Race', 'Android', 'Majin', 'God', 'Angel'];
  genders: string[] = ['Male', 'Female', 'Unknown'];
  affiliations: string[] = ['Z Fighter', 'Army of Frieza', 'Red Ribbon Army', 'Villain', 'Other'];
  
  // paginazione
  currentPage = 1;
  totalPages = 1;
  totalItems = 0;
  itemsPerPage = 50; // carico 50 alla volta
  
  private searchSubscription?: Subscription;

  constructor(private dragonballService: DragonballService) {}

  ngOnInit() {
    // carico pianeti
    this.dragonballService.getPlanets()
      .subscribe({
        next: (res) => {
          this.character = res;
          this.filteredPlanets = res.items || [];
          this.loading = false;
        },
        error: (err) => {
          console.error('Errore nel caricamento dei pianeti:', err);
          this.loading = false;
        }
      });

    // carico personaggi
    this.loadCharacters();

    // mi sottoscrivo alla ricerca
    this.searchSubscription = this.dragonballService.searchTerm$.subscribe(term => {
      this.searchTerm = term;
      this.filterPlanets();
      this.filterCharacters();
    });
  }

  loadCharacters(): void {
    this.loadingCharacters = true;
    this.dragonballService.getCharacters(this.currentPage, this.itemsPerPage)
      .subscribe({
        next: (res) => {
          this.characters = res;
          this.allCharacters = res.items || [];
          this.filteredCharacters = res.items || [];
          this.totalPages = res.meta?.totalPages || 1;
          this.totalItems = res.meta?.totalItems || 0;
          console.log('Personaggi caricati:', this.allCharacters.length);
          this.loadingCharacters = false;
          this.applyFilters();
        },
        error: (err) => {
          console.error('Errore caricamento personaggi:', err);
          this.loadingCharacters = false;
        }
      });
  }

  filterPlanets(): void {
    if (!this.character || !this.character.items) return;
    
    if (!this.searchTerm.trim()) {
      this.filteredPlanets = this.character.items;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredPlanets = this.character.items.filter((planet: any) =>
        planet.name.toLowerCase().includes(term) ||
        (planet.description && planet.description.toLowerCase().includes(term))
      );
    }
  }

  filterCharacters(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    if (!this.allCharacters) return;
    
    let filtered = [...this.allCharacters];
    
    // filtro ricerca
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter((char: any) =>
        char.name.toLowerCase().includes(term) ||
        (char.race && char.race.toLowerCase().includes(term))
      );
    }
    
    // filtro razza
    if (this.selectedRace) {
      filtered = filtered.filter((char: any) => char.race === this.selectedRace);
    }
    
    // filtro genere
    if (this.selectedGender) {
      filtered = filtered.filter((char: any) => char.gender === this.selectedGender);
    }
    
    // filtro affiliazione
    if (this.selectedAffiliation) {
      filtered = filtered.filter((char: any) => char.affiliation === this.selectedAffiliation);
    }
    
    this.filteredCharacters = filtered;
    console.log('Filtrati:', this.filteredCharacters.length, 'personaggi');
  }

  onFilterChange(): void {
    this.applyFilters();
  }

  clearFilters(): void {
    this.selectedRace = '';
    this.selectedGender = '';
    this.selectedAffiliation = '';
    this.applyFilters();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
      this.scrollToCharacters();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
      this.scrollToCharacters();
    }
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadCharacters();
      this.scrollToCharacters();
    }
  }

  scrollToCharacters(): void {
    // scroll smooth alla sezione personaggi
    const element = document.querySelector('.characters-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
}
