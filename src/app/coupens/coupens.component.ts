import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { TemplateRef } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-coupens',
  templateUrl: './coupens.component.html',
  styleUrls: ['./coupens.component.scss']
})
export class CoupensComponent implements OnInit {
  title = 'ng2-charts-demo';

  constructor(private overlay: Overlay,
    private viewContainerRef: ViewContainerRef) {
    
  }
 
  public isMenuOpen = false;
  @ViewChild('menuButton') menuButton!: ElementRef;
  @ViewChild('menuTemplate') menuTemplate!: TemplateRef<any>; // Ajoutez cette ligne

  private overlayRef!: OverlayRef | null;
 
  public openMenu(): void {
    this.closeMenu(); // Ferme le menu s'il est déjà ouvert

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.menuButton.nativeElement)
      .withPositions([{ originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'top' }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true, // Active le fond transparent
      backdropClass: 'cdk-overlay-transparent-backdrop' // Applique un style au fond transparent
    });

    const templatePortal = new TemplatePortal(this.menuTemplate, this.viewContainerRef);
    this.overlayRef.attach(templatePortal);

    // Gère la fermeture du menu lorsqu'on clique sur le fond transparent
    this.overlayRef.backdropClick().subscribe(() => {
      this.closeMenu();
    });
  }

  private closeMenu(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  // PolarArea
  public polarAreaChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales' ];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [ 300, 500, 100, 40, 120 ] }
  ];
  public polarAreaLegend = true;

  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  ngOnInit() {
  }
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
  public pieChartDatasets = [ {
    data: [ 300, 500, 100 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };


  

  

}
