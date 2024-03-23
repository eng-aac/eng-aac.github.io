import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-button-scroll-zero',
  templateUrl: './button-scroll-zero.component.html',
  styleUrls: ['./button-scroll-zero.component.css']
})
export class ButtonScrollZeroComponent {
  isShow!: boolean;
  topPosToStartShowing: number = 500;

  constructor() { }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    if (scrollPosition >= this.topPosToStartShowing) this.isShow = true;
    else this.isShow = false;
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
