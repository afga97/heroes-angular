import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroeService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[];
  termino: string;

  constructor(
    private activateRouter: ActivatedRoute,
    private _heroeService: HeroeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe( (params) => {
      this.termino = params.name
      this.heroes = this._heroeService.buscarHeroes(this.termino)
      console.log(this.heroes)
    })
  }

  verHeroe( idx: number ){
    this.router.navigate( ['/heroe', idx ])
  }

}
