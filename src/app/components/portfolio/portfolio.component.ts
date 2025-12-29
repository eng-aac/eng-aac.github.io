import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Project }  from 'src/app/models/project';
import { fade } from 'src/assets/animations/fade.animation';
import { BaseTags } from '../../helpers/base-tags';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [ fade ]
})
export class PortfolioComponent extends BaseTags implements OnInit {
  projects: Project[] = new Array<Project>();
  loading: boolean = true;
  error: boolean = false;

  titleSection: string = 'MENU.ITEM-PORTFOLIO.TITLE';
  descriptionSection: string = 'MENU.ITEM-PORTFOLIO.DESCRIPTION';

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
    this.projects.length = 0;

    this.db.collection<Project>('project').get()
      .subscribe((data) => {
        data.docs.forEach((item) => {
          const project: Project = item.data() as Project;
          project.id = item.id;

          this.projects.push(project); 
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
