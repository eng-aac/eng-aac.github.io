import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Feat }  from 'src/app/models/feat';
import { fade } from 'src/assets/animations/fade.animation';
import { BaseTags } from '../../helpers/base-tags';

@Component({
  selector: 'app-featuring',
  templateUrl: './featuring.component.html',
  styleUrls: ['./featuring.component.css'],
  animations: [ fade ]
})
export class FeaturingComponent extends BaseTags implements OnInit {
  feats: Feat[] = new Array<Feat>();
  loading: boolean = true;
  error: boolean = false;

  titleSection: string = 'MENU.ITEM-FEATS.TITLE';
  descriptionSection: string = 'MENU.ITEM-FEATS.DESCRIPTION';

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
    this.feats.length = 0;

    this.db.collection<Feat>('feat').get()
      .subscribe((data) => {
        data.docs.forEach((item) => {
          const feat: Feat = item.data() as Feat;
          feat.id = item.id;

          this.feats.push(feat); 
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
