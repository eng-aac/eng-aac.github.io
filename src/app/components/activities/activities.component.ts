import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Service }  from 'src/app/models/service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  services: Service[] = new Array<Service>();
  loading: boolean = true;
  error: boolean = false;

  constructor( private db: AngularFirestore ) { }

  ngOnInit(): void {
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

}
