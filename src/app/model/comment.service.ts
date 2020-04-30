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
    this.commentUrl = 'http://localhost:8080/api/comment';
  }
 
  public findAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.commentUrl+"/uno");
  }
 
  public save(comment: Comment) {
    comment.commented_on=new Date();
    comment.game="uno";
    return this.http.post<Comment>(this.commentUrl, comment);
  }
}
