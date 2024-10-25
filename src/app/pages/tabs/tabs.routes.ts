import { Routes } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../tabs/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('../tabs/search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../tabs/cart/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'account',
        loadComponent: () =>
          import('../tabs/account/account.page').then((m) => m.AccountPage),
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'restaurants/:restaurantId',
    loadComponent: () => import('./items/items.page').then((m) => m.ItemsPage),
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full',
  },
];
