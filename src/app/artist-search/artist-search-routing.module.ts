import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ArtistSearchComponent } from './artist-search.component';
import { TrackDetailComponent } from './track-detail/track-detail.component';

const artistSearchRoute: Routes = [
  {
    path: '',
    component: ArtistSearchComponent,
    children: [
      {
        path: ":id",
        component: TrackDetailComponent,
        outlet: "outlet1"
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(artistSearchRoute)],
  exports: [RouterModule]
})
export class ArtistSearchRoutingModule { }
