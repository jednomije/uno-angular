import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from './rating';
 
@Injectable({
  providedIn: 'root'
})
export class RatingService {
 
  private ratingUrl: string;
 
  constructor(private http: HttpClient) {
    this.ratingUrl = 'http://localhost:8080/api/rating/uno';
  }
 
  public findAll(): Observable<Rating[]> {
    return this.http.get<Rating[]>(this.ratingUrl);
  }
 
  public save(rating: Rating) {
    return this.http.post<Rating>(this.ratingUrl, rating);
  }
}
