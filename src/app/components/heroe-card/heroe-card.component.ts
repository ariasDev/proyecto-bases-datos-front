import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Event} from '../../interfaces/event'

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() eventData: Event;

  constructor(private router: Router) {
    console.log('eventData', this.eventData);

  }

  ngOnInit(): void {
  }

  goToEventDetail(name: string): void {
    this.router.navigate(['/heroe-detail', name]);
  }

}
