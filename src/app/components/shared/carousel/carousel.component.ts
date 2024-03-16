import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() arrayEntity: [] = [];
  @Input() propOrderSort: string = '';
  @Input() codeCarousel: string = '';
  @Input() modeCard: 'sp' | 'comp' = 'comp';
  @Input() isButtonGB: boolean;
  idCarousel: string = '';

  constructor() { }

  ngOnInit(): void {
    this.idCarousel = 'carouselIndicators' + this.codeCarousel;
  }

}
