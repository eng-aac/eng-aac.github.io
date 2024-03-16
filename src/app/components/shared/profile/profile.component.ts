import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, state } from '@angular/animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilePDF } from 'src/app/models/file-interface';
import { Utilities } from 'src/app/helpers/utilities';

declare var particlesJS: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-150%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(2000, style({
          transform: 'translateX(0)',
          opacity: 0.5
        }))
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  loading: boolean = false;
  error: boolean = false;
  setContentTooltipIn: string = '';
  linkIN: string = Utilities.getLinks( 'IN' );
  
  constructor( 
    private _srvHttpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.setContentTooltipIn = Utilities.setHTMLContentTooltip( 'fab fa-fw fa-linkedin-in ml-1' );
    particlesJS.load('particles-js', '../assets/particles/particles.json', null);
  }

  getResume() {
    this.loading = true;
    const fileName: string = 'aldo_castillo_developer.pdf';
    const url = 'assets/files/' + fileName;

    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    this._srvHttpClient.get<ArrayBuffer>(url, {
        observe: 'response',
        headers,
        responseType: 'arraybuffer' as 'json',
      })
      .subscribe((res) => {
          const contentType = res.headers.get('content-type');

          const objToRead: FilePDF = {
            data: res.body ? res.body : new ArrayBuffer(0),
            type: contentType ? contentType : '.pdf',
            name: fileName,
          };

          const file = this.setAndDownloadFile(objToRead);
          if (!file) console.error();

          setTimeout(() => this.loading = false, 1000);
        },
        (error) =>  {
          this.error = true;
          this.loading = false;
        });
  }

  private setAndDownloadFile(objFile: FilePDF): boolean {
    const { data, type } = objFile;

    try {
      const blob = new Blob([data], { type });

      const blobUrl = URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = blobUrl;
      document.body.appendChild(iframe);
      iframe.contentWindow?.print();

      return true;
    } catch (error) {
      return false;
    }
  }
}
