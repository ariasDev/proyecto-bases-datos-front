import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Event } from '../../interfaces/event';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  events: Event[];
  formGroup = new FormGroup({
    category: new FormControl('', [Validators.required])
  });
  categoryList = ['ingenieria', 'comunicacion', 'deportes', 'todos', 'administracion', 'ciencias basicas'];
  categorySelected: string;


  constructor(private heroesService: HeroesService, private router: Router) {
    this.categorySelected = 'todos';
    this.events = this.heroesService.getEventsList();
    this.listenChangeCategory();
  }

  listenChangeCategory() {
    this.formGroup.get('category').valueChanges.subscribe((categorySelected: string) => {
      this.categorySelected = categorySelected;
    })
  }

  ngOnInit(): void {
  }

  goToEventDetail(title: string): void {
    this.router.navigate(['/heroe-detail', title]);
  }
}
