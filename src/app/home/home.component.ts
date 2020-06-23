import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  cars = [
    {
      name: "BMW",
      price: 60,
      teaser: `https://i.auto-bild.de/mdb/large/22/6er-616.jpg`
    },{
      name: "Suzuki",
      price: 55,
      teaser: 'assets/img/suzuki.jpg'
    },{
      name:"Mercedes",
      price: 80,
      teaser: `assets/img/mercedes.jpg`
    },{
      name:"Mazda",
      price: 50,
      teaser: 'assets/img/mazda.jpg'
    }
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

}
