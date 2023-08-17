import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { PartDamagedComponent } from './part-damaged/part-damaged.component';
import { DamageCodeComponent } from './damage-code/damage-code.component';
import { DamageSizeComponent } from './damage-size/damage-size.component';
import { DamagePositionComponent } from './damage-position/damage-position.component';
import { TypeComponent } from './type/type.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'login', component: LoginComponent},
  { path: 'media/PartDamaged', component: PartDamagedComponent },
  { path: 'media/DamageCode', component: DamageCodeComponent },
  { path: 'media/DamageSize', component: DamageSizeComponent },
  { path: 'media/DamagePosition', component: DamagePositionComponent },
  { path: 'media/Type', component: TypeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
