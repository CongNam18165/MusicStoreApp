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
  isLogin: boolean = localStorage.getItem('accessToken') === null;
  test() {
    this.datas.getToken().subscribe((res: any) => {
      localStorage.setItem('accessToken', res.access_token);
      localStorage.setItem('tokenType', res.token_type)
    })
    this.isLogin = false
  }
  test2() {
    localStorage.removeItem('tokenType')
    localStorage.removeItem('accessToken')
    this.isLogin = true
  }
}
