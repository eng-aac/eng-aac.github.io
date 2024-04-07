import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilePDF } from 'src/app/models/file-interface';
import { Utilities } from 'src/app/helpers/utilities';
import { environment } from 'src/environments/environment';
import { FileService } from 'src/app/services/file.service';
import { DeviceDetectorService } from 'ngx-device-detector';

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
    private _srvHttpClient: HttpClient,
    private _srvFile: FileService,
    private _srvDevice: DeviceDetectorService,
    
  ) {}

  ngOnInit(): void {
    this.linkIN = Utilities.getLinks( 'IN' );
    this.setContentTooltipIn = Utilities.setHTMLContentTooltip( 'dev-aac', 'fab fa-fw fa-linkedin-in ml-1' );
  }

  getResume() {
    this.loading = true;
    this.error = false;

    const fileName: string = environment.fileNameResume;
    const url = Utilities.getUrlResume();

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

          const file = this.setFile(objToRead);
          if (!file) console.error();

          setTimeout(() => this.loading = false, 1000);
        },
        (error) =>  {
          this.error = true;
          this.loading = false;
        });
  }

  private setFile(objFile: FilePDF): boolean {
    const { data, type, name } = objFile;
    const modePrint: 'sp' | 'comp' = this.getDevice() ? 'comp' : 'sp';

    return this._srvFile.setAndDownloadFile( data, type, name, modePrint );
  }

  private getDevice(): boolean{
    const isDesktopDevice = this._srvDevice.isDesktop();
    return isDesktopDevice;
  }
}
