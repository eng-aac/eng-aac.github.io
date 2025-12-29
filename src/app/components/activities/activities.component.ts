import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Service }  from 'src/app/models/service';
import { slideInRight, slideInRightList } from 'src/assets/animations/slide-right.animation';
import { BaseTags } from '../../helpers/base-tags';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  animations: [ slideInRightList, slideInRight ]
})
export class ActivitiesComponent extends BaseTags implements OnInit {
  services: Service[] = new Array<Service>();
  loading: boolean = true;
  error: boolean = false;

  titleSection: string = 'MENU.ITEM-SERVICES.TITLE';
  descriptionSection: string = 'MENU.ITEM-SERVICES.DESCRIPTION';

  constructor( 
    private db: AngularFirestore,
    
    protected titleService: Title, 
    protected metaService: Meta,  
    protected translateService: TranslateService
  ) { 
    super( titleService, metaService, translateService ); 
  }

  ngOnInit(): void {
    this.setMetaTags();
    this.getInitialData();
  }

  private getInitialData(): void { 
    this.services.length = 0;

    this.db.collection<Service>('service').get()
      .subscribe((data) => {
        data.docs.forEach((item) => {
          const service: Service = item.data() as Service;
          service.id = item.id;

          this.services.push(service); 
        });

        this.loading = false;
      },
      (error) =>  {
        this.error = true;
        this.loading = false;
      });
  }

  private setMetaTags(): void {
    this.setConfigMetaTags( this.titleSection, this.descriptionSection );
  }
}