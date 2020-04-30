import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { CommentSiteComponent } from './comment-site/comment-site.component';
import { ScoreSiteComponent } from './score-site/score-site.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { RatingFormComponent } from './rating-form/rating-form.component';

const routes: Routes = [
  {path: '', component: MainSiteComponent},
  {path: 'game', component: GameComponent},
  {path: 'comments', component: CommentSiteComponent},
  {path: 'scores', component: ScoreSiteComponent},
  {path: 'addcomment', component: CommentFormComponent},
  {path: 'addrating', component: RatingFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
