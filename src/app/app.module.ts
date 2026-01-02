import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { DragonballServiceComponent } from './components/dragonball-service/dragonball-service.component';
import { SearchFormComponentComponent } from './components/search-form-component/search-form-component.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CharacterDetailPageComponent } from './components/character-detail-page/character-detail-page.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterDetailComponent,
    LoaderComponent,
    FooterComponent,
    DragonballServiceComponent,
    SearchFormComponentComponent,
    CharacterDetailPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
