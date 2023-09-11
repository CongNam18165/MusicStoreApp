import { NgModule } from '@angular/core';
import { ArtistSearchComponent } from './artist-search.component';
import { ArtistSearchRoutingModule } from './artist-search-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrackDetailComponent } from './track-detail/track-detail.component';



@NgModule({
  declarations: [
    ArtistSearchComponent,
    TrackDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArtistSearchRoutingModule
  ],
  providers:[ ]
})
export class ArtistSearchModule { }
