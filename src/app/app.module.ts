import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';

import { SortPipe } from './pipes/sort.pipe';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FeaturingComponent } from './components/featuring/featuring.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { DividerComponent } from './components/shared/divider/divider.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { BaseContentComponent } from './components/shared/base-content/base-content.component';
import { BaseFooterComponent } from './components/shared/base-footer/base-footer.component';
import { CardComponent } from './components/shared/card/card.component';
import { CarouselComponent } from './components/shared/carousel/carousel.component';

import { ThemeService } from './services/theme.service';

import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    PortfolioComponent,
    SkillsComponent,
    ActivitiesComponent,
    AlertComponent,
    DividerComponent,
    LoadingComponent,
    BaseContentComponent,
    CardComponent,
    SortPipe,
    BaseFooterComponent,
    CarouselComponent,
    FeaturingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),

    ProgressbarModule.forRoot(),
    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
