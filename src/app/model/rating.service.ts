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
    this.ratingUrl = 'http://localhost:8080/api/rating';
  }
 
  public findAll(): Observable<Rating[]> {
    return this.http.get<Rating[]>(this.ratingUrl+"/uno");
  }
 
  public save(rating: Rating) {
    rating.game="uno";
    rating.rated_on=new Date();
    return this.http.post<Rating>(this.ratingUrl, rating);
  }
}
