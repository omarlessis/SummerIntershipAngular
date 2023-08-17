import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  scannedText: string = '';

  scanText() {
    // Simulation d'un scan de texte
    this.scannedText = 'Texte scanné ici.';
  }
}