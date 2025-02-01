import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  //private baseUrl = 'https://jsonplaceholder.typicode.com'; // Replace with your API URL
  private baseUrl = 'https://sa-tech-assessment.replit.app/api/assessment/contacts'; // Replace with your API URL

  constructor(private http: HttpClient) {}


  getContacts(): Observable<any>{
    return this.http.get('/api/assessment/contacts')
  }




  // GET request
  getPosts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts`);
  }

  // POST request
  createPost(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, data);
  }

  // PUT request
  updatePost(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/posts/${id}`, data);
  }

  // DELETE request
  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/posts/${id}`);
  }

}
