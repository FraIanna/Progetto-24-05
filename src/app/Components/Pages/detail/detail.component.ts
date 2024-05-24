import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../../car.service';
import { icar } from './../../../icar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  carsArr: icar[] = [];
  currentCar!: icar[];

  constructor(private carSvc: CarService, private route: ActivatedRoute) {}
  async ngOnInit() {
    await this.carSvc.getCars();
    this.route.params.subscribe((params: any) => {
      this.currentCar = this.carSvc.getById2(params.model);
    });
  }
}
