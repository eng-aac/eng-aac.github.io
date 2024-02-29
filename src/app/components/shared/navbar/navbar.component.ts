import { Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedLanguage: string = 'en';

  constructor(
    private renderer: Renderer2,
    private translateService: TranslateService
  ) { 
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  scrollToId( id: string ){
    setTimeout(() => {
      const element = this.renderer.selectRootElement(`#${id}`, true); 
      element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }, 100);
  }

  selectLanguage(lang: string) {
    console.log(lang)
    this.translateService.use(lang);
  }

}
