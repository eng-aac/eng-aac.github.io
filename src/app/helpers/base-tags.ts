import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Utilities } from 'src/app/helpers/utilities';
import { MetaDataConfig } from 'src/app/models/metadata-config-interface';

@Component({ 
  template: '' 
})
export class BaseTags {
  metaConfig: MetaDataConfig = Utilities.setMetaDataConfig();

  constructor( 
    protected titleService: Title, 
    protected metaService: Meta,
    protected translateService: TranslateService
  ) {}

  protected setConfigMetaTags( title: string, description: string, isShort: boolean = false ): void {
    this.titleService.setTitle( this.getTitle( title, isShort ) );

    const { keywords, image, author } = this.metaConfig;

    const descriptionText: string = this.getTranslateText( description );
    const finalDescriptionText: string = this.setTranslateValidation( description, descriptionText, 'description' );

    this.metaService.updateTag({ name: 'description', content: finalDescriptionText });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'author', content: author });

    this.metaService.updateTag({ property: 'og:image', content: image });
  }

  private getTitle( title: string, isShort: boolean = false ): string { 
    const globalText: string = this.getTranslateText( 'GLOBAL-META.TITLE' );
    const titleText: string = this.getTranslateText( title );

    const finalGlobalText: string = this.setTranslateValidation( 'GLOBAL-META.TITLE', globalText, 'title' );
    const finalTitleText: string = this.setTranslateValidation( title, titleText, 'title' );

    if ( isShort ) return finalTitleText;
    if ( finalTitleText === finalGlobalText ) return finalGlobalText;

    return `${finalTitleText} | ${finalGlobalText}`;
  }

  private setTranslateValidation( key: string, text: string, type: string ): string {
    return text === key ? this.metaConfig[type] : text;
  }

  private getTranslateText( key: string ): string {
    return this.translateService.instant( key );
  }
}