import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'message',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My first angular app';
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
