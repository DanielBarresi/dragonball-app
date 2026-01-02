import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterDetailPageComponent } from './components/character-detail-page/character-detail-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  { path: 'planets', component: CharacterCardComponent },
  { path: 'planets/:id', component: CharacterDetailComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterDetailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

