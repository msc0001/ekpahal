import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JNV Ekpahal;';
  news = 'This is a sample text bla bla bla';
  person = {
    "number" : 'xxxxxx4567',
    "email" : 'xyz123@gmail.com'
    
  }
  showHome = 'false';
}
