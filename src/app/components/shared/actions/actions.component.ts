import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  @Input() selectedLanguage: string = 'en';
  @Input() classListIconButton: string = '';

  @Output() isSendLanguage: EventEmitter<string> = new EventEmitter<string>();
  @Output() isSendTheme: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  sendLanguage( language: string ){
    this.isSendLanguage.emit( language );
  }

  sendTheme(){
    this.isSendTheme.emit();
  }
}
