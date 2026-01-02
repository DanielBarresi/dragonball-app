import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  private apiUrl = 'https://dragonball-api.com/api';
  
  // per comunicare la ricerca tra i componenti
  private searchTermSubject = new BehaviorSubject<string>('');
  public searchTerm$ = this.searchTermSubject.asObservable();

  constructor(private http: HttpClient) {}

  // invece qui aggiorno il termine ricerca
  setSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }

  getPlanets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/planets`);
  }

  getPlanetById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/planets/${id}`);
  }

  // con paginazione
  getCharacters(page: number = 1, limit: number = 50): Observable<any> {
    return this.http.get(`${this.apiUrl}/characters?page=${page}&limit=${limit}`);
  }

  getCharacterById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/characters/${id}`);
  }
}
