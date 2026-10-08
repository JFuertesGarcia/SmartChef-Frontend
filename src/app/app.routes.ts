import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'app',
    loadComponent: () => import('./paginas/tabs/tabs.page').then(m => m.TabsPage),
    children: [
      {
        path: 'menu',
        loadComponent: () => import('./paginas/menu/menu.page').then(m =>
          m.MenuPage),
      },
      {
        path: 'historial',
        loadComponent: () => import('./paginas/historial/historial.page').then(m =>
          m.HistorialPage),
      },
      {
        path: 'colecciones',
        loadComponent: () => import('./paginas/colecciones/colecciones.page').then(m => m.ColeccionesPage),
      },
      {
        path: 'nevera',
        loadComponent: () => import('./paginas/nevera/nevera.page').then(m => m.NeveraPage),
      },
      {
        path: 'usuario',
        loadComponent: () => import('./paginas/usuario/usuario.page').then( m => m.UsuarioPage)
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'tabs',
    loadComponent: () => import('./paginas/tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
];

