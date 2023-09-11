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
  private searchTerms = new Subject<string>();// Khởi tạo biến searchTerm là 1 observable
  // Ban đầu giá trị biến observable vừa tạo sẽ gọi đến phương thức pipe để thực hiện các biến đổi observable bằng các operator ở thư viện RxJS
  // Sau đó gọi phương thức subscribe để đăng ký theo dõi giá trị phát ra từ observable cụ thể ở đây là gọi API spotify.
  // Sau khi lấy được dữ liệu từ API sẽ gọi đến phương thức subscribe nhận đối số là giá trị trả về từ pipe
  ngOnInit(): void { 
    this.searchTerms
      .pipe(
        debounceTime(1000), // Operator debounceTime nhận vào thời gian dừng 
        distinctUntilChanged(), // Operator distinctUntilChanged kiểm tra giá trị mới có giống với giá trị cũ không nếu có sẽ không tiếp tục truyền dữ liệu đi và dừng lại ở đó
        switchMap((artistName: string) => {
        //switchMap sẽ "chuyển đổi" sang Observable mới và hủy bỏ Observable trước đó.Phương thức sẽ nhận 1 callback và 
        //callback đó sẽ nhận đối số mà mình truyền giá trị từ observable cũ vào
        //và sẽ trả về dữ liệu mình mong muốn 
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
  //Phương thức search sẽ được gọi khi mà mình nhấn bàn phím.Mình sẽ dùng if để check nếu mà có dữ liệu trong localStorage(đồng nghĩa
  //với việc đã đăng nhập thành công) thì sẽ truyền dữ liệu vào observable serachTerms bằng phương thức next("giá trị truyền")
  //nếu không sẽ thông báo đăng nhập mỗi khi nhấn phím
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
