import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  mySize = 3;

  constructor() {
  }

  myClick() {
    console.log(this.mySize);
  }

  ngOnInit() {
  }

}
