import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-character-detail-page',
  templateUrl: './character-detail-page.component.html',
  styleUrls: ['./character-detail-page.component.scss']
})
export class CharacterDetailPageComponent implements OnInit {
  character: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dragonballService: DragonballService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log('Loading character with id:', id);
      this.dragonballService.getCharacterById(id).subscribe({
        next: (res) => {
          this.character = res;
          this.loading = false;
          console.log('Character loaded:', res.name);
          // se in questo caso il personaggio ha trasformazioni, le stampo per debug
          if (res.transformations && res.transformations.length > 0) {
            console.log('Trasformazioni disponibili:', res.transformations.length);
          }
        },
        error: (err) => {
          console.error('Errore caricamento personaggio:', err);
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/characters']);
  }
}
