import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Skill }  from 'src/app/models/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = new Array<Skill>();
  loading: boolean = true;
  error: boolean = false;

  constructor( private db: AngularFirestore ) { }

  ngOnInit(): void {
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

}
