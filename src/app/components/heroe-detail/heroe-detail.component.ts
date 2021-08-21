import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCommentRequest, HeroesService, NewParticipantRequest } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Event, Comment, Participant} from '../../interfaces/event'
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.css']
})
export class HeroeDetailComponent {

  private paramsRoute: any;
  eventData: Event;
  logoPath: string;
  commentText = new FormControl('', [Validators.required]);

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.paramsRoute = params;
      console.log(this.paramsRoute);
    });
    this.eventData = this.heroesService.getEvent(this.paramsRoute.title)[0];
    console.log(this.eventData);
  }

  commen(): void {
    if (this.commentText.valid) {
      const newComment: Comment = {
        userName: "Monica Rojas",
        comment: this.commentText.value
      };
      this.eventData.comments.push(newComment);

      const addCommentRequest: AddCommentRequest = {
        eventId: this.eventData.id,
        comment: newComment
      };

      this.heroesService.sendNewComment(addCommentRequest).subscribe((response: any) => {
        console.log('response', response);
      })
      this.commentText.reset();
    }
  }

  participar(){
    const participant: Participant = {
      fullName: "Monica Rojas",
      userName: "monirojas"
    }
    const request: NewParticipantRequest = {
      eventId: this.eventData.id,
      participant: participant
    }
    this.eventData.participants.push(participant);
    this.heroesService.sendNewParticipant(request).subscribe((response: any) => {
      console.log(response);
    });
  }

  goToHeroesList(): void {
    this.router.navigate(['/events']);
  }
}
