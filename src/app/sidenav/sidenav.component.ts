
import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { navbarData } from './nav-data';
import { INavbardData } from './hepler';

import { animate, keyframes, style, transition, trigger } from '@angular/animations';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],

})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter
  @Output() pageSelected: EventEmitter<string> = new EventEmitter<string>(); // Initialisation correcte de l'EventEmitter
  isSideNavOpen = false;

collapsed = true;
screenWidth = 0;
navData = navbarData;
multiple: boolean = false;

@HostListener('window:resize', ['$event'])

onResize(event:any) {
  this.screenWidth = window.innerWidth;
  if(this.screenWidth <= 768) {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
}


 

ngOnInit():void {
  this.screenWidth = window.innerWidth;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}
onPageSelected(pageName: string) {
  console.log('Page Selected:', pageName); // Vérifiez la sortie dans la console
  this.pageSelected.emit(pageName);
}
toggleCollapse(): void {
  // Vérifier si la navbar est déjà ouverte (non réduite) avant de mettre à jour la propriété collapsed
  if (this.isSideNavOpen) {
    this.collapsed = !this.collapsed;
  } else {
    // Si la navbar est réduite, alors on l'ouvre sans actualiser la page
    this.collapsed = false;
  }

  this.isSideNavOpen = !this.collapsed;

  // Appeler window.location.reload() uniquement lorsque la navbar est réduite et qu'on clique pour la réduire davantage
  if (!this.collapsed) {
    window.location.reload();
  }

  this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
}

closeSidenav(): void {
  this.collapsed = false;
  this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}
handleClick(item: INavbardData): void{
  if (!this.multiple) {
    for (let modelItem of this.navData) {
      if (item !== modelItem && modelItem.expanded){
        modelItem.expanded = false;
      }



    }


  }
  item.expanded=!item.expanded


}
}
