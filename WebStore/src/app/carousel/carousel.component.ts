import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  //images = ["car", "car2", "Image20"].map((n) => '../../assets/Images/$(n).png');
  images = ["../../assets/Images/car1.png", "../../assets/Images/car3.3.png", "../../assets/Images/car4.png"];
  constructor() { }

  ngOnInit() {
  }

}
