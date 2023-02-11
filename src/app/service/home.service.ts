import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }


  getData():Observable<any>{
return this.http.get('http://localhost:3200/data')
  }

  getsingledata(id:any){
    return this.http.get(`http://localhost:3200/data/${id}`)



  }

  getComments(id:any){
    return  this.http.get(`http://localhost:3200/comments/${id}`)
  }

  getCommentCount(id: any) {
    return this.http.get(`http://localhost:3200/count-comments/${id}`);
  }


  incrementValue() {
    return this.http.post('http://localhost:3200/increment', {});
  }

  search(term: string): Observable<any> {
    return this.http.get(`http://localhost:3200/search?term=${term}`);
  }


  getCommentsByPostId(id:any){
    return this.http.get(`http://localhost:3200/count-comments/${id}`)

  }


}
