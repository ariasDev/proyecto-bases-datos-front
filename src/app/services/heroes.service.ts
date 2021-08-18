import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Event } from '../interfaces/event'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private eventList: Event[];

  constructor(private readonly http: HttpClient) {
    this.eventList = [];
  }

  getEventsList(): Event[] {
    if (this.eventList.length > 0) {
      return this.eventList;
    } else {
      this.http.get('http://localhost:8000/getEventsList').subscribe((eventList: Event[]) => {
        this.eventList = eventList;
        return eventList;
      });
    }
  }

  getEvent = (title: string): Event[] => this.eventList.filter((event: Event) => event.title === title);

}
