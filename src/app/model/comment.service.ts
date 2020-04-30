import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment';
 
@Injectable({
  providedIn: 'root'
})
export class CommentService {
 
  private commentUrl: string;
 
  constructor(private http: HttpClient) {
    this.commentUrl = 'http://localhost:8080/api/comment/uno';
  }
 
  public findAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl);
  }
 
  public save(comment: Comment) {
    return this.http.post<Comment>(this.commentUrl, comment);
  }
}
