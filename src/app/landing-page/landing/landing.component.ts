import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  menuButton = 'menu';
  imageSources = [
    '../../../assets/images/1.jpg',
    '../../../assets/images/2.jpg',
    '../../../assets/images/3.jpg',
    '../../../assets/images/4.jpg',
    '../../../assets/images/5.jpg',
    '../../../assets/images/6.jpg',
  ];
  num = 0;
  currentImage = this.imageSources[this.num];

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

  browseImage(n: number) {
    this.num += n;
    if (this.num >= this.imageSources.length) {
      this.num = 0;
    } else if (this.num < 0) {
      this.num = this.imageSources.length - 1;
    }

    this.currentImage = this.imageSources[this.num];
  }
}
