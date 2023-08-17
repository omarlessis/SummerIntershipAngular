import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';

interface TableRow {
  nom: string;
  prenom: string;
  genre: string;
  email: string;
  telephone: string;
  action:string;
  
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent {
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
        nom: 'omar',
        prenom: 'lessis',
        genre: 'genre',
        email: 'info@etc.com',
        telephone: '27940642 ' ,
        action:'action',
        
      });
    }
  }
  editItem(item: TableRow): void {
    // Logique pour éditer l'élément
  }

  deleteItem(item: TableRow): void {
    
}  
}
