import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from 'src/app/services/theme.service';

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
