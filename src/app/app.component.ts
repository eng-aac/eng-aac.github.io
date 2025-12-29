import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { BaseTags } from './helpers/base-tags';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseTags implements OnInit{
  title: string = 'portfolio-daac';
  titleSection: string = 'GLOBAL-META.TITLE';
  descriptionSection: string = 'GLOBAL-META.DESCRIPTION';

  constructor(
    private _srvTheme: ThemeService,
    
    protected titleService: Title, 
    protected metaService: Meta,  
    protected translateService: TranslateService
  ) { 
    super( titleService, metaService, translateService ); 
  }

  ngOnInit(): void {
    this._srvTheme.setTheme( true );
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.setConfigMetaTags( this.titleSection, this.descriptionSection, true );
  }
}
