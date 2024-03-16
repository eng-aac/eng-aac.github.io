import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Link } from 'src/app/models/link';
import { Utilities } from 'src/app/helpers/utilities';
import { Footer } from 'src/app/models/footer';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  year: number = new Date().getFullYear();
  arrayLinks: Link[] = [];
  arraySections: Footer[] = [];
  urlImage: string = '';
  suscriptionTheme!: Subscription; 

  constructor(
    private _srvTheme: ThemeService
  ){}

  ngOnInit(): void {
    this.getTheme();
    this.getLinks();
    this.getSections();
  }

  private getTheme(){
    this.suscriptionTheme = this._srvTheme.onThemeChange().subscribe( (theme) => {
      const nameFileImage: string = theme ? 'ac-logo' : 'ac-logo--neg';
      this.urlImage = `assets/img/${nameFileImage}.png`;
    });
  }

  private getLinks(){
    this.arrayLinks = Utilities.getLinksFooter();
  }

  private getSections(){
    this.arraySections = Utilities.getSectionFooter();
  }

  ngOnDestroy(): void {
    this.suscriptionTheme.unsubscribe();
  }
}
