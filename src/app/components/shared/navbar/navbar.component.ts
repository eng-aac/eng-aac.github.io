import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Utilities } from 'src/app/helpers/utilities';
import { Link } from 'src/app/models/link';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy{
  selectedLanguage: string = 'en';
  setContentTooltip: string = '';
  baseClassListIconButton: string = 'fas fa-';
  classListIconButton: string = '';
  arrayMenu: Link[] = [];
  linkGB: string = Utilities.getLinks( 'GB' );
  isDark!: boolean;
  suscriptionTheme!: Subscription; 

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private _srvTheme: ThemeService
  ) { 
    this.translate.setDefaultLang(this.selectedLanguage);
    this.translate.use(this.selectedLanguage);
  }
 
  ngOnInit(): void {
    this.setContentTooltip = Utilities.setHTMLContentTooltip( 'fab fa-github ml-1' );
    this.getTheme();
    this.setClassListToggle();
    this.getMenu();
  }

  private getTheme(){
    this.suscriptionTheme = this._srvTheme.onThemeChange().subscribe( (theme) => this.isDark = theme );
  }

  scrollToId( id: string ){
    setTimeout(() => {
      const element = this.renderer.selectRootElement(`#${id}`, true); 
      element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }, 100);
  }

  selectLanguage(lang: string) {
    this.translate.use(lang);
  }

  setTheme(){
    this.isDark = !this.isDark;
    this._srvTheme.setTheme(this.isDark);
    this.setClassListToggle();
  }

  private setClassListToggle(){
    const changeClassIconButton: string = this.isDark ? 'moon' : 'lightbulb';
    this.classListIconButton = `${this.baseClassListIconButton}${changeClassIconButton}`;
  }

  private getMenu(){
    this.arrayMenu = Utilities.getLinksMenu();
  }
  
  ngOnDestroy(): void {
    this.suscriptionTheme.unsubscribe();
  }
}
