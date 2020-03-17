import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  menuButton = 'menu';
  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    if (this.menuButton === 'menu_open') {
      this.menuButton = 'menu';
    } else {
      this.menuButton = 'menu_open';
    }
  }

  scroll(el: HTMLElement): void {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
