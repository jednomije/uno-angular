import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { CommentSiteComponent } from './comment-site/comment-site.component';
import { ScoreSiteComponent } from './score-site/score-site.component';

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'comments', component: CommentSiteComponent},
  {path: 'scores', component: ScoreSiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
