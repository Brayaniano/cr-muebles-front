import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent as homeAdmin } from './pages/admin/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: CatalogoComponent },
  /**routes para el admin */
  { path: 'admin', component: homeAdmin },
  /*{ path: 'admin/cotizaciones', component: CotizacionesComponent },*/
];