import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PessoaGrupo } from '../pessoa-grupo.interface';
import { PessoaGrupoService } from '../pessoa-grupo.service';

@Component({
  selector: 'app-pessoa-grupo-lista',
  templateUrl: './pessoa-grupo-lista.component.html',
  styleUrls: ['./pessoa-grupo-lista.component.css']
})
export class PessoaGrupoListaComponent implements OnInit {

  pessoasGrupos : Observable<PessoaGrupo>;

  constructor(private servico: PessoaGrupoService) { }

  ngOnInit(): void {
    this.pessoasGrupos = this.servico.getPessoaGrupo();
  }

}
