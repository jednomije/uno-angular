import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingService } from '../model/rating.service';
import { Rating } from '../model/rating';

@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.scss']
})
export class RatingFormComponent{
  rating: Rating;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private ratingService: RatingService) {
    this.rating = new Rating();
  }
 
  onSubmit() {
    this.ratingService.save(this.rating).subscribe(result => this.gotoRatingList());
  }
 
  gotoRatingList() {
    this.router.navigate(['/addrating']);
  }
}
