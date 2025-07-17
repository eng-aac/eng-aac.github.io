import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { Utilities } from 'src/app/helpers/utilities';

@Component({
  selector: 'app-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.css']
})
export class ButtonLinkComponent implements OnInit {
  linkWhats!: Link;

  constructor() { }

  ngOnInit(): void {
    this.linkWhats = Utilities.getLinkWhats();
  }
}
