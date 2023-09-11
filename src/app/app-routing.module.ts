import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
const routes: Routes = [
 
  {
    path: "login",
    loadChildren: () => import('./artist-search/artist-search.module').then(m => m.ArtistSearchModule),
    data: {preload: true} 
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
