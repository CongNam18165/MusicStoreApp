import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ParamMap } from '@angular/router';
import { DataTracksService } from 'src/app/data-tracks.service';

@Component({
  selector: 'app-track-detail',
  templateUrl: './track-detail.component.html',
  styleUrls: ['./track-detail.component.scss']
})
export class TrackDetailComponent implements OnInit {
  constructor(private http: HttpClient, private route: ActivatedRoute, private dataTracks: DataTracksService, private router: Router) { }
  id: string = ''
  datas: any 
  // Khởi tạo giá trị ban đầu theo dõi sự kiện trên đối tượng router của Angular. Bên trong if kiểm tra sự kiện định tuyến route
  // đã hoàn tất và tiếp tục gọi đến đối tượng route,phương thức paramMap để lấy giá trị từ url
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route.paramMap.subscribe((param: any) => {
          this.id = param.params.id;
        })
        this.http.get(`https://api.spotify.com/v1/artists/${this.id}/top-tracks`, { params: { market: 'VN' } })
          .subscribe((res: any) => this.datas = res.tracks)
      }
    })
  }
}
