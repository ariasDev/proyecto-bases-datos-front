import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe';
import {Event} from '../../interfaces/event'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  events: Event[];

  constructor(private heroesService: HeroesService, private router: Router) {
    this.events = this.heroesService.getEventsList();
  }

  ngOnInit(): void {
  }

  goToEventDetail(title: string): void {
    this.router.navigate(['/heroe-detail', title]);
  }
}
