
import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { RouterModule, Router } from '@angular/router';

 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dragonball-app';
  constructor(private router: Router) {}
}


