import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroeService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: Heroe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroeService
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroeService.getHeroe(params['id'])
      console.log(this.heroe)
    })
  }



}
