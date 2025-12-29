import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { slideInRight, slideInRightList } from 'src/assets/animations/slide-right.animation';
import { Skill }  from 'src/app/models/skill';
import { BaseTags } from '../../helpers/base-tags';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [ slideInRightList, slideInRight ]
})
export class SkillsComponent extends BaseTags implements OnInit {
  skills: Skill[] = new Array<Skill>();
  loading: boolean = true;
  error: boolean = false;

  titleSection: string = 'MENU.ITEM-SKILL.TITLE';
  descriptionSection: string = 'MENU.ITEM-SKILL.DESCRIPTION';

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
    this.skills.length = 0;

    this.db.collection<Skill>('skill').get()
      .subscribe((data) => {
        data.docs.forEach((item) => {
          const skill: Skill = item.data() as Skill;
          skill.id = item.id;

          this.skills.push(skill); 
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
