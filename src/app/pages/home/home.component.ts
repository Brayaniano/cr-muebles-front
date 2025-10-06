import { Component } from '@angular/core';
import {BannerComponent} from '../../components/home/banner/banner.component';
import {RecomendadosComponent} from '../../components/home/recomendados/recomendados.component';
import {CalidadComponent} from '../../components/home/calidad/calidad.component';
import {MasBuscadoComponent} from '../../components/home/mas-buscado/mas-buscado.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent,RecomendadosComponent,CalidadComponent,MasBuscadoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
