import { icar } from './icar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  carsArr: icar[] = [];

  async getCars() {
    try {
      let response = await fetch('../assets/db.json');
      if (!response.ok) {
        throw new Error('Impossibile recuperare i dati');
      }
      let jsonContent = await response.json();
      this.carsArr = jsonContent;
      console.log(this.carsArr);
      return this.carsArr;
    } catch (error) {
      console.log(error, 'errore');
    }
    return [];
  }

  getall(): icar[] {
    return this.carsArr;
  }

  getById(brand: string) {
    console.log(brand);
    const filteredCars = this.carsArr.filter((car) => car.brand === brand);
    console.log(filteredCars);
    if (filteredCars) {
      console.log(filteredCars);
      return filteredCars;
    } else throw new Error('Marchio non trovato');
  }

  getById2(model: string) {
    const filteredCars = this.carsArr.filter(
      (car) => car.model.trim().toLocaleLowerCase() === model
    );
    if (filteredCars) {
      console.log(filteredCars);
      return filteredCars;
    } else throw new Error('Marchio non trovato');
  }

  constructor() {
    this.getCars();
  }
}
