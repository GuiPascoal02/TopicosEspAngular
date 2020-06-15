import { Component, OnInit } from '@angular/core';
import { PerfilRecurso } from '../perfil-recurso.interface';
import { Observable } from 'rxjs';
import { PerfilRecursoService } from '../perfil-recurso.service';

@Component({
  selector: 'app-perfil-recurso-lista',
  templateUrl: './perfil-recurso-lista.component.html',
  styleUrls: ['./perfil-recurso-lista.component.css']
})

export class PerfilRecursoListaComponent implements OnInit {

  perfisRecursos : Observable<PerfilRecurso>;

  constructor(private servico: PerfilRecursoService) { }

  ngOnInit(): void {
    this.perfisRecursos = this.servico.getPerfilRecurso();
  }


}
