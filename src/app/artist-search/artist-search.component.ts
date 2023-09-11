import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTracksService } from '../data-tracks.service';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent  {
  constructor(private http: HttpClient, private route: ActivatedRoute, private dataTracks: DataTracksService) { }
  datas: any;
  inputValue: string = '';
  id: string = ''
  search() {
    const artistName = this.inputValue;

    const params = {
      q: artistName,
      type: 'artist',
      market: 'VN',
    };
    this.http.get("https://api.spotify.com/v1/search", { params }).subscribe((res: any) => { this.datas = res.artists.items })
    this.http.get("https://api.spotify.com/v1/search", { params })
      .subscribe((res: any) => { console.log(res.artists.items) })
   
  }
  search2() {
    this.inputValue = ''
  }
 

}
