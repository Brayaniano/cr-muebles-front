import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,HeaderComponent,MenuAdminComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CR Muebles';
  constructor(private router: Router) {}

  isAdminRoute(): boolean {
    debugger;
    return this.router.url.includes('/admin');
  }
}
