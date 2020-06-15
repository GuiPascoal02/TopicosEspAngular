import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaGrupoService {

  constructor(private http: HttpClient) { }

  getPessoaGrupo() : Observable<any>
  {
    return this.http.get('https://localhost:5002/api/pessoasgrupos/1/100');

  }
}
