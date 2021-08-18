import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../interfaces/event'

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent {

  private paramsRoute: any;
  eventData: Event;
  logoPath: string;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.paramsRoute = params;
      console.log(this.paramsRoute);
    });
    this.eventData = this.heroesService.getEvent(this.paramsRoute.title)[0];
  }

  goToHeroesList(): void {
    this.router.navigate(['/events']);
  }

}
