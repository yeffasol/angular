import {Component, OnInit} from '@angular/core';
import {NewServiceService} from '../new-service.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  message: string;
  items = ['Angular', 'React', 'Vue.js', 'Bootstrap'];
  loggedIn = true;
  loggedout = 'login';
  text = 'a table';
  title = 'date';

  constructor(svc: NewServiceService) {
    svc.consoleText('text from service');
    const setTime = () => {
      return this.message = new Date().toLocaleTimeString();
    };

    setInterval(setTime, 1000);
  }

  myEvent() {
    console.log(this.text);
  }

  ngOnInit() {
  }

}
