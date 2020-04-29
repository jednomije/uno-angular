import { Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})

export class HandComponent{
  array = [
    "assets/img/cards/G3.png",
    "assets/img/cards/R1.png",
    "assets/img/cards/WD.png",
    "assets/img/cards/WC.png",
    "assets/img/cards/R4.png",
    "assets/img/cards/G5.png",
    "assets/img/cards/Y1.png",
    "assets/img/cards/B0.png",
    "assets/img/cards/R2.png",
    "assets/img/cards/B4.png",
    "assets/img/cards/B9.png",
    "assets/img/cards/WD.png",
  ]
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.array, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        this.array,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
