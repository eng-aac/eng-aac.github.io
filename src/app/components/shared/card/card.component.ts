import { Component, Input } from '@angular/core';
import { Utilities } from 'src/app/helpers/utilities';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() entity: {} = {};
  @Input() mode: 'sp' | 'comp';
  @Input() isButtonGB: boolean;

  linkGB: string = Utilities.getLinkGBCustom();

  constructor() {}
}
