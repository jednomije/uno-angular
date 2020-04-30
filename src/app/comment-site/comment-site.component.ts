import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment';
import { CommentService } from '../model/comment.service';

@Component({
  selector: 'app-comment-site',
  templateUrl: './comment-site.component.html',
  styleUrls: ['./comment-site.component.scss']
})
export class CommentSiteComponent implements OnInit {

  comments:Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.findAll().subscribe(data => {
      this.comments = data;
    });
  }
}
