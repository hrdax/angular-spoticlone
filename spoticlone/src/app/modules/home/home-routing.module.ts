import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TracksModule } from '@modules/tracks/tracks.module';
import { FavoriteModule } from '@modules/favorites/favorite.module';
import { HistoryModule } from '@modules/history/history.module';


const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => TracksModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorite.module').then(m => FavoriteModule)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then(m => HistoryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
