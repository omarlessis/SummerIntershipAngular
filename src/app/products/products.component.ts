import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface TableRow {
  date: string;
  nom: string;
  controleur: string;
  puid: number;
  dateDebut: string;
  dateFin: string;
  vin: string;
  elementEndommage: string;
  naturedudommage: string;
  tailledommage: string;
  position: string;
  type: string;
  remarque: string;
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] // Update this line with the correct file name
})

export class ProductsComponent implements OnInit {
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
        date: '2023-07-29',
        nom: 'John Doe',
        controleur: 'Contrôleur ' + (i + 1),
        puid: i + 1000,
        dateDebut: '2023-08-01',
        dateFin: '2023-08-31',
        vin: 'VIN' + (i + 1),
        elementEndommage: 'Élément ' + (i + 1),
        naturedudommage: 'Nature du dommage ' + (i + 1),
        tailledommage: 'Taille du dommage ' + (i + 1),
        position: 'Position ' + (i + 1),
        type: 'Type ' + (i + 1),
        remarque: 'Remarque ' + (i + 1)
      });
    }
  }
}  