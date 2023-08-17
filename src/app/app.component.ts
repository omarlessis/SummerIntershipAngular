import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core'; // Importer l'interface OnInit

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoginPage: boolean = false;

  currentUrl: string; // Déclaration de la propriété currentUrl

  constructor(private router: Router) {
    this.currentUrl = this.router.url;
  }

  title = 'animated-Sidenav';
  selectedPageName: string = ''; // Assurez-vous que cette variable est définie avec une valeur par défaut

  

  isSideNavCollapsed = false;
  screenWidth = 0;
  
  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed

  }
  onPageSelected(pageName: string) {
    this.selectedPageName = pageName;
    console.log('Selected Page Name:', this.selectedPageName); // Vérifiez la sortie dans la console
  }

 
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  
}
}
