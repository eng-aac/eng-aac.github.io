import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Feat }  from 'src/app/models/feat';

@Component({
  selector: 'app-featuring',
  templateUrl: './featuring.component.html',
  styleUrls: ['./featuring.component.css']
})
export class FeaturingComponent implements OnInit {
  feats: Feat[] = new Array<Feat>();
  loading: boolean = true;
  error: boolean = false;

  constructor( 
    private db: AngularFirestore
  ) { }

  ngOnInit(): void {
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

}
