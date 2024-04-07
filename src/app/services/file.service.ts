import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

    constructor() { }

    setAndDownloadFile( data: ArrayBuffer, type: string, filename: string, action: 'sp' | 'comp' ): boolean{

        try {
            const blob = new Blob( [ data ], { type } );
            
            if(action === 'sp') {
                const downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(blob);
                downloadLink.setAttribute('download', filename || 'p-odi');
                document.body.appendChild(downloadLink);
                downloadLink.click();
            }else{
                const blobUrl = URL.createObjectURL(blob);
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = blobUrl;
                document.body.appendChild(iframe);
                iframe.contentWindow?.print();
            }
            
            return true;
        } catch (error) {
            return false;
        }
    }

}