import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DiscardComponent } from './discard/discard.component';
import { HandComponent } from './hand/hand.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './game/game.component';
import { CommentSiteComponent } from './comment-site/comment-site.component';
import { HttpClientModule } from '@angular/common/http';
import { ScoreSiteComponent } from './score-site/score-site.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DiscardComponent,
    HandComponent,
    GameComponent,
    CommentSiteComponent,
    ScoreSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
