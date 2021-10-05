import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from  "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  JwtAuthToken:any
  user:any
  serverUrl = "http://localhost:5000"
  constructor(private http: HttpClient) { }

  loadToken(){
    const token = localStorage.getItem('id_token')
    this.JwtAuthToken = token
    console.log(this.JwtAuthToken)
  }

  getUserById(userId:any):Observable<any>{
    this.loadToken()
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set("Authorization",this.JwtAuthToken)
    return this.http.get(`${this.serverUrl}/user/getuser/${userId}`,{headers:headers})
  }
  getUserFeed():Observable<any>{
    this.loadToken()
    const headers = new HttpHeaders()
      .set('content-type','application/json')
      .set("Authorization",this.JwtAuthToken)
    return this.http.get(`${this.serverUrl}/posts/getuserfeed`,{headers:headers})
  }
}
