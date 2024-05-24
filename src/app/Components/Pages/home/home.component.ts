import { Component } from '@angular/core';
import { __awaiter } from 'tslib';
import { CarService } from '../../../car.service';
import { icar } from '../../../icar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carsArr: icar[] = [];
  random: icar[] = [];
  limitedCarsArr: icar[] = [];

  constructor(private carSvc: CarService) {}

  async ngOnInit() {
    await this.carSvc.getCars();
    this.carsArr = this.carSvc.getall();
    this.randomCars(2);
    this.limitedCarsArr = this.carsArr.slice(0, 2);
  }
  randomCars(count: number) {
    const shuffled = this.carsArr.slice(1).sort(() => 0.5 - Math.random());
    this.random = shuffled.slice(0, count);
  }
}
