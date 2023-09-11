import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTracksService } from '../data-tracks.service';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  constructor(private http: HttpClient) { }
  datas: any;
  inputValue: string = '';
  private searchTerms = new Subject<string>();
  ngOnInit(): void {
    this.searchTerms
      .pipe(
        debounceTime(1000), // Đợi 1 giây sau khi dừng nhập
        distinctUntilChanged(), // Chỉ gửi nếu giá trị thay đổi
        switchMap((artistName: string) => {
          const params = {
            q: artistName,
            type: 'artist',
            market: 'VN',
          };
          return this.http.get("https://api.spotify.com/v1/search", { params });
        })
      )
      .subscribe((res: any) => {
        this.datas = res.artists.items;
      });
  }
  search() {
    if (localStorage.getItem('accessToken')) {

      this.searchTerms.next(this.inputValue);
    }
    else {
      alert('ERORR. VUI LÒNG ĐĂNG NHẬP');
    }
  }
  search2() {
    this.inputValue = ''
  }


}
