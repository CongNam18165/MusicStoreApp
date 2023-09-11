import { Component } from '@angular/core';
import { AccessService } from './access.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataAccess: AccessService, private http: HttpClient) { }
  datas: any = this.dataAccess;
  isLogin: boolean = localStorage.getItem('accessToken') === null;// biến isLogin này để ẩn hiện nút login
  // Khi nhấn login sẽ lấy dữ liệu từ AccessService và đăng ký thực hiện lưu token vào localStorage
  login() {
    this.datas.getToken().subscribe((res: any) => {
      localStorage.setItem('accessToken', res.access_token);
      localStorage.setItem('tokenType', res.token_type)
    })
    this.isLogin = false
  }
  // Hàm logout đơn giản chỉ để xóa dữ liệu ở localStorage bằng phương thức removeItem
  logout() {
    localStorage.removeItem('tokenType')
    localStorage.removeItem('accessToken')
    this.isLogin = true
  }
}
