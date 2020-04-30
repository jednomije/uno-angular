import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from '../model/score.service';
import { CommentService } from '../model/comment.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent{
 
  comment: Comment;
 
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private commentService: CommentService) {
    this.comment = new Comment();
  }
 
  onSubmit() {
    this.commentService.save(this.comment).subscribe(result => this.gotoCommentList());
  }
 
  gotoCommentList() {
    this.router.navigate(['/comments']);
  }
}
