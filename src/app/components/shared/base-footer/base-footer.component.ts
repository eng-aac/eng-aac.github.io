import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-footer',
  templateUrl: './base-footer.component.html',
  styleUrls: ['./base-footer.component.css']
})
export class BaseFooterComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() mode: 'sp' | 'comp' = 'comp';

  constructor() {}
}
