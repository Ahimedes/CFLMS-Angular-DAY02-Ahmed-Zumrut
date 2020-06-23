import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  projectName: string;
  clickCounter: number = 0;
  constructor() {
    this.projectName = "Car Rental Service"
  }
  countClick() {
    this.clickCounter +=10;
  }

  ngOnInit(): void {
  }

}
