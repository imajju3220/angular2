import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title : 'Neat Tree',
      imageUrl: '../assets/car.jpg',
      username: 'nature',
      content:'Some quick example text to build on the card title and make up the bulk of the card content.'
    },
    {
      title : 'cheat Tree',
      imageUrl: '../assets/car.jpg',
      username: 'cloud',
      content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      title : 'bumboo Tree',
      imageUrl: '../assets/car.jpg',
      username: 'sea',
      content:'It has survived not only five centuries, but also the leap into electronic typesetting.'
    },
  ];
}
