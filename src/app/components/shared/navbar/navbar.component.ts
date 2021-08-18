import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOptions = ['Inicio', 'Eventos'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(value: string): void{
    this.router.navigate(['/search-results', value]);
  }
}
