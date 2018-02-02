import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  totalaccounts = "0";
  donation = "0";

  constructor() { }

  ngOnInit() {
    
  }

}
