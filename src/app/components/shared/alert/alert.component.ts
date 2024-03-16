import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() styleType: 'sp' | 'comp' = 'comp';
  styleIndependent: string = '';

  constructor() { }

  ngOnInit(): void {
    this.styleIndependent = this.styleType === 'comp' ? 'height: 300px;' : 'height: 3.9em;';
  }

}
