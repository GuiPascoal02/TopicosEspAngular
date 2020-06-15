import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilRecursoService {

  constructor(private http: HttpClient) { }

  getPerfilRecurso() : Observable<any>
  {
    return this.http.get('https://localhost:5002/api/perfisrecursos/1/100');
  }
}


