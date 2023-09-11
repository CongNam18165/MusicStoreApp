import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
accessToken: string = ''
  constructor(private http: HttpClient) { }
  getToken(): Observable<any>{
    return this.http.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials&client_id=ebef366a524e43d391655dfff547f641&client_secret=aae660dd8a68431fb6256a4742c6b14d", {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    
  }
}
