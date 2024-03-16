import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project }  from 'src/app/models/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = new Array<Project>();
  loading: boolean = true;
  error: boolean = false;

  constructor( 
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
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

}
