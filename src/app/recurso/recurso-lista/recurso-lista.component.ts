import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Recurso } from '../recurso.interface';
import { RecursoService } from '../recurso.service';

@Component({
  selector: 'app-recurso-lista',
  templateUrl: './recurso-lista.component.html',
  styleUrls: ['./recurso-lista.component.css']
})
export class RecursoListaComponent implements OnInit {

  recursos : Observable<Recurso>;

  constructor(private servico: RecursoService) { }

  ngOnInit(): void {
    this.recursos = this.servico.getRecurso();
  }

}
