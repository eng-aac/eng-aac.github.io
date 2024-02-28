import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private renderer: Renderer2,
  ) { }

  scrollToId( id: string ){
    setTimeout(() => {
      const element = this.renderer.selectRootElement(`#${id}`, true); 
      element.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }, 100);
  }

}
