import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Score } from './score';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ScoreService {
 
  private scoreUrl: string;
 
  constructor(private http: HttpClient) {
    this.scoreUrl = 'http://localhost:8080/api/score/uno';
  }
 
  public findAll(): Observable<Score[]> {
    return this.http.get<Score[]>(this.scoreUrl);
  }
 
  public save(score: Score) {
    return this.http.post<Score>(this.scoreUrl, score);
  }
}
