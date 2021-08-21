import { Injectable, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Event, Comment } from '../interfaces/event'
import { Observable } from 'rxjs';

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

  sendNewComment(newComment: AddCommentRequest): Observable<any> {
    console.log('entra en el servicio');
    return this.http.post('http://localhost:8000/addCommentToEvent', newComment);
  }

  getEvent = (title: string): Event[] => this.eventList.filter((event: Event) => event.title === title);

}


export interface NewCommentResponse {
  n: Number;
}

export interface AddCommentRequest {
  eventId: String;
  comment: Comment;
}
