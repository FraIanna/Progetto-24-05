import { Component } from '@angular/core';
import { icar } from '../../../icar';
import { CarService } from '../../../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss',
})
export class BrandComponent {
  carsArr: icar[] = [];
  brandArr: icar[] = [];
  brand: string = '';

  constructor(private carSvc: CarService, private route: ActivatedRoute) {}

  async ngOnInit() {
    await this.carSvc.getCars();
    this.route.params.subscribe((params: any) => {
      this.brand = params['brand'];
      this.brandArr = this.carSvc.getById(this.brand);
    });
  }
}
