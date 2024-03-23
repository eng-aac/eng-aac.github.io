import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-content',
  templateUrl: './base-content.component.html',
  styleUrls: ['./base-content.component.css']
})
export class BaseContentComponent {
  @Input() titleSection: string = '';
  @Input() iconSection: string = '';
  @Input() loading: boolean = true;
  @Input() error: boolean = false;

  constructor() {}
}
