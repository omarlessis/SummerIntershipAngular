import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgChartsModule } from 'ng2-charts';
import { PortalModule } from '@angular/cdk/portal'; // Import PortalModule
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list'; // Import MatGridListModule
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule (needed for mat-card)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { PartDamagedComponent } from './part-damaged/part-damaged.component';
import { DamageCodeComponent } from './damage-code/damage-code.component';
import { DamageSizeComponent } from './damage-size/damage-size.component';
import { DamagePositionComponent } from './damage-position/damage-position.component';
import { TypeComponent } from './type/type.component';
import { WebcamModule } from 'ngx-webcam'; // Importez le module ici
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    HeaderComponent,
    LoginComponent,
    LoginLayoutComponent,
    DefaultLayoutComponent,
    PartDamagedComponent,
    DamageCodeComponent,
    DamageSizeComponent,
    DamagePositionComponent,
    TypeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,

    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
    MatCardModule,
    MatMenuModule,
    NgApexchartsModule,
    RouterModule,
    NgChartsModule,
    MatGridListModule, // Add MatGridListModule to imports
    MatCardModule,
    MatIconModule,

     // Add OverlayModule to imports
    PortalModule,
    MatTableModule,
    WebcamModule
 
    
  
  
  ],
  exports: [RouterModule],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
