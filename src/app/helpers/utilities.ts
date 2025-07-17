import { Link } from 'src/app/models/link';
import { Footer } from 'src/app/models/footer';
import { environment } from 'src/environments/environment';

export class Utilities{

    static setHTMLContentTooltip( title: string, iconLink: string ): string {
        const iconTagHTMLRedirect: string = '<i class="fas fa-external-link-alt ml-3"></i>';
        const iconTagHTMLLink: string = `<i class="${iconLink}"></i>`;

        const textTitle = `${title} | ${iconTagHTMLLink}  ${iconTagHTMLRedirect}`;
        return textTitle; 
    }

    static getLinksFooter(): Link[]  {
        const links: Link[] = [
            {
                href: 'https://bit.ly/aacWhatsapp',
                icon: 'fab fa-whatsapp',
            },
            {
                href: 'https://bit.ly/aacMail',
                icon: 'far fa-envelope',
            },
            {
                href: 'https://bit.ly/aacLinkedin',
                icon: 'fab fa-fw fa-linkedin-in',
            },
            {
                href: 'https://bit.ly/aacMessenger',
                icon: 'fab fa-facebook-messenger',
            }
        ];

        return links; 
    }

    static getLinkWhats(): Link {
        return this.getLinksFooter()[0];
    }

    static getLinkGBCustom() {
        return 'https://github.com/eng-aac/';
    }

    static getSectionFooter(): Footer[]  {
        const sections: Footer[] = [
            {
                title: 'FOOTER.COLUMN-THREE.LABEL',
                content: 'FOOTER.COLUMN-THREE.DESCRIPTION'
            },
            {
                title: 'FOOTER.COLUMN-SECOND.LABEL',
                custom: true
            },
            {
                title: 'FOOTER.COLUMN-ONE.LABEL',
                content: 'Godoy Cruz, Mendoza, Argentina.',
                custom: true
            }
        ];

        return sections; 
    }

    static getLinksMenu(): Link[]  {
        const menu: Link[] = [
            {
                title: 'MENU.ITEM-SKILL',
                href: 'skills',
                icon: 'fas fa-list'
            },
            {
                title: 'MENU.ITEM-PORTFOLIO',
                href: 'portfolio',
                icon: 'far fa-address-card'
            },
            {
                title: 'MENU.ITEM-FEATS',
                href: 'feats',
                icon: 'fas fa-users'
            },
            {
                title: 'MENU.ITEM-SERVICES',
                href: 'services',
                icon: 'fas fa-laptop-code'
            }
        ];

        return menu; 
    }

    static getLinks( code: string ): string{
        let link: string = '';

        switch ( code ) {
            case 'GB':
                link = 'https://bit.ly/aacGitHub';
                break;

            case 'IN':
                link = 'https://bit.ly/aacLinkedin';
                break;

            default:
                break;
        }

        return link; 
    }

    static getUrlResume(): string{
        const folder: string = 'resumes';
        const type: string = 'media';

        const urlResume: string = `${environment.urlResume}${environment.firebase.storageBucket}/o/${folder}%2F${environment.fileNameResume}?alt=${type}&token=${environment.tokenResume}`;
        return urlResume;
    }

}