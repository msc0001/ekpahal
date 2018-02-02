import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  news = [ 'For every ₹1 the government',
           '₹4.6 lakh crore wiped out', 
           'How will Budget 2018 impact', 
           'Mr. MS donated Rs. 10,000',
           '1000+ signups',
           'qeue is full mp']

  constructor() { }

  ngOnInit() {
  }

}
