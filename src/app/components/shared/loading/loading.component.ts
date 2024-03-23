import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  @Input() styleType: 'sp' | 'comp' = 'comp';
  styleIndependent: string = '';

  constructor() {}

  ngOnInit(): void {
    this.styleIndependent = this.styleType === 'comp' ? 'height: 300px;' : 'height: 3.9em;';
  }
}
