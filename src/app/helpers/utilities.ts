import { Link } from 'src/app/models/link';
import { Footer } from 'src/app/models/footer';

export class Utilities{

    static setHTMLContentTooltip( iconLink: string ): string {
        const iconTagHTMLRedirect: string = '<i class="fas fa-external-link-alt ml-3"></i>';
        const iconTagHTMLLink: string = `<i class="${iconLink}"></i>`;

        const textTitle = `${iconTagHTMLLink}  ${iconTagHTMLRedirect}`;
        return textTitle; 
    }

    static getLinksFooter(): Link[]  {
        const links: Link[] = [
            {
                href: 'https://api.whatsapp.com/send?phone=542616934658&text=Hi!',
                icon: 'fab fa-whatsapp',
            },
            {
                href: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=aldo.castillo.13@gmail.com&compose=Consulta&body=Hi!',
                icon: 'far fa-envelope',
            },
            {
                href: 'https://www.linkedin.com/in/dev-aac/',
                icon: 'fab fa-fw fa-linkedin-in',
            },
            {
                href: 'https://m.me/dev.aldo.adrian.castillo',
                icon: 'fab fa-facebook-messenger',
            }
        ];

        return links; 
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
                link = 'https://github.com/eng-aac/';
                break;

            case 'IN':
                link = 'https://www.linkedin.com/in/dev-aac/';
                break;

            default:
                break;
        }

        return link; 
    }

}