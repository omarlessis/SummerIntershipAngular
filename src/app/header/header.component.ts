import { Component, Input, OnInit, HostListener, ViewChild, TemplateRef, ElementRef, ViewContainerRef } from '@angular/core';
import { languages, notifications, userItems } from './header-data';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() selectedPageName!: string; // Définissez une valeur d'initialisation par défaut

  private overlayRef: OverlayRef | undefined;
  private templatePortal: TemplatePortal<any> | undefined;
  canShowSearchOverlay = false;
  selectedLanguage: any;
  languages = languages;
  notifications = notifications;
  userItems = [
    { label: 'Profil', icon: 'fas fa-user' }, // Utilisez le nom de classe d'icône correct pour l'icône de Font Awesome
    { label: 'Paramètres', icon: 'fas fa-gear' },
    { label: 'Déconnexion', icon: 'fas fa-key' },
    // ...
  ];
  



  // Définir les propriétés comme non initialisées pour éviter les erreurs de compilation
  @ViewChild('userOverlay', { static: false }) userOverlay!: TemplateRef<any>;
  @ViewChild('dropdownArrow', { static: false }) dropdownArrow!: ElementRef;

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {}


  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.checkCanShowSearchOverlay(window.innerWidth)
  }

  disconnectUser() {
    // Add your code here to handle the user disconnection
    // For example, you can log the user out, clear session, etc.
    console.log('User disconnected');
  }

  openSettings() {
    // Add your code here to handle opening the settings window
    console.log('Open settings window');
  }

  openParameters() {
    // Add your code here to handle opening the parameters window
    console.log('Open parameters window');
  }

  
  
  handleOptionClick(item: any) {
    // Ajoutez la logique pour gérer l'action de l'utilisateur ici
    // Par exemple, vous pouvez exécuter différentes actions en fonction de l'option cliquée
    console.log('Option cliquée :', item);
  }

  // Function to update the selected page name when a page is selected in the side navigation bar
  ngOnInit() {
    console.log('Received Page Name:', this.selectedPageName); // Vérifiez la sortie dans la console
  }
  
  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
     return styleClass
  }

  

  checkCanShowSearchOverlay(innerWidth: number):void {
    if(innerWidth < 845) {
      this.canShowSearchOverlay = true;
    } else {
      this.canShowSearchOverlay = false
    }

  }
  toggleOverlay(event: Event) {
    event.stopPropagation(); // Empêche la propagation de l'événement aux éléments parents
    if (!this.overlayRef || !this.overlayRef.hasAttached()) {
      // Le code pour ouvrir la fenêtre modale ici
      this.templatePortal = new TemplatePortal(this.userOverlay, this.viewContainerRef);
      this.overlayRef = this.overlay.create({
        positionStrategy: this.overlay.position()
          .flexibleConnectedTo(this.dropdownArrow.nativeElement) // Utilise l'élément de la flèche de menu déroulant comme origine
          .withPositions([{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }]),
        scrollStrategy: this.overlay.scrollStrategies.reposition(),
      });
      this.overlayRef.attach(this.templatePortal);
    } else {
      // Le code pour fermer la fenêtre modale ici
      this.overlayRef.detach();
    }
  }
  

  
}


