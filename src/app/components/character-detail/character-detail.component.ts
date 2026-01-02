import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  planet: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dragonballService: DragonballService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dragonballService.getPlanetById(id).subscribe({
        next: (res) => {
          this.planet = res;
          this.loading = false;
        },
        error: (err) => {
          console.error('Errore nel caricamento del pianeta:', err);
          this.loading = false;
        }
      });
    } else {
      this.loading = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
