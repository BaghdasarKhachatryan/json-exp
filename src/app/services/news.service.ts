import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  id:number
  title:string
  body:string
}

const httpOptions = {
  headers:new HttpHeaders({
    "content-type":"application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) {

   }

   getPosts():Observable<Post[]>{
     return this.http.get<Post[]>(this.apiUrl)
   }

   getPostById(id:number):Observable<Post>{
     return this.http.get<Post>(`${this.apiUrl}/${id}`)
   }

   updatePost(post:Post):Observable<Post>{
     const url = `${this.apiUrl}/${post.id}`
      return this.http.put<Post>(url,post,httpOptions)
   }
   delete(post:Post):Observable<Post>{
    const url = `${this.apiUrl}/${post.id}`
    return this.http.delete<Post>(url)
   }
}
