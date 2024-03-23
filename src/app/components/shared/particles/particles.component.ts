import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles-js', '../assets/particles/particles.json', null);
  }
}
