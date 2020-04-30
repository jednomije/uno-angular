import { Component, OnInit } from '@angular/core';
import { Score } from '../model/score';
import { ScoreService } from '../model/score.service';

@Component({
  selector: 'app-score-site',
  templateUrl: './score-site.component.html',
  styleUrls: ['./score-site.component.scss']
})
export class ScoreSiteComponent implements OnInit {

  scores:Score[];

  constructor(private scoreService: ScoreService) { }

  ngOnInit(): void {
    this.scoreService.findAll().subscribe(data => {
      this.scores = data;
    });
  }
}