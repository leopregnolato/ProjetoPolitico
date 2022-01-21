import { Component, OnInit } from '@angular/core';
import { Politico } from '../politico';
import { PoliticoService } from '../politico.service';

@Component({
  selector: 'app-lista-politico',
  templateUrl: 'lista-politico.component.html'
})
export class ListaPoliticoComponent implements OnInit {

  constructor(private politicoService: PoliticoService) { }

  public politicos!: Politico[];

  ngOnInit(): void {
    this.politicoService.obterPoliticos()
    .subscribe({
      next: (politicos : Politico[]) => {
        this.politicos = politicos;
        console.log(politicos);
      },
      error: (err: Error) => {
        console.log(err)
      }
    });
  }

}
