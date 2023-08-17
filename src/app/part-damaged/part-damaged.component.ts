
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';




interface TableRow {
    Titre: string;
    Description: string;
    showFullDescription: boolean; // Ajoutez cette ligne
  }
  


@Component({
  selector: 'app-part-damaged',
  templateUrl: './part-damaged.component.html',
  styleUrls: ['./part-damaged.component.scss']
})
export class PartDamagedComponent {
  displayedColumns: string[] = ['date', 'controleur', 'dateDebut', 'dateFin', 'vin'];
  dataSource = new MatTableDataSource<TableRow>([]);

  @ViewChild(MatSort, { static: true }) sort!: MatSort; // Add '!' to indicate the property will be initialized later

  constructor() {}

  ngOnInit(): void {
    this.generateData();
    this.dataSource.sort = this.sort;
  }

  generateData(): void {
    for (let i = 0; i < 10; i++) {
      this.dataSource.data.push({
        Titre: 'Lorem ipsum dolor sit amet',
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
        showFullDescription: false, // Initialisez la propriété ici
      });
    }
  }
  
  showFullDescription(item: TableRow): void {
    // Ici, vous pouvez afficher la description complète de l'élément
    console.log("Description complète :", item.Description);
    // Vous pouvez également implémenter un mécanisme d'affichage plus sophistiqué, comme une boîte modale
  }
  toggleDescription(item: TableRow): void {
    item.showFullDescription = !item.showFullDescription;
  }
  
   
}
