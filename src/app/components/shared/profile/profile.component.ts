import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-120%) translateY(-50%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(800, style({
          transform: 'translateX(-20%) translateY(-50%)',
          opacity: 0.5
        }))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
