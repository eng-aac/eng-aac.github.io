import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilePDF } from 'src/app/models/file-interface';
import { Utilities } from 'src/app/helpers/utilities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading: boolean = false;
  error: boolean = false;
  setContentTooltipIn: string = '';
  linkIN: string = '';
  
  constructor( 
    private _srvHttpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.linkIN = Utilities.getLinks( 'IN' );
    this.setContentTooltipIn = Utilities.setHTMLContentTooltip( 'fab fa-fw fa-linkedin-in ml-1' );
  }

  getResume() {
    this.loading = true;
    const fileName: string = 'aldo_castillo_developer.pdf';
    const url = `assets/files/${fileName}`;

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
