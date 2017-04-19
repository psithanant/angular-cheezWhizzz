import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export default class CheeseService {
  constructor(public http:Http) {
  }
  getAllCheeses() {
    return this.http.get('http://cheeswhiz.herokuapp.com/api/cheese')
      .toPromise()
      .then((res: Response) => res.json());
  }

  getByCheeseName(cheeseName) {
    return this.http.get(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeseName}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  getSubstitutes(cheeseName) {
    return this.http.get(`http://cheeswhiz.herokuapp.com/api/cheese/substitute/${cheeseName}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  getByFirmness(firmness) {
    return this.http.get(`http://cheeswhiz.herokuapp.com/api/cheese/firmness/${firmness}`)
      .toPromise()
      .then((res: Response) => res.json());
  }

  getByAnimal(animal) {
    return this.http.get(`http://cheeswhiz.herokuapp.com/api/cheese/animal/${animal}`)
      .toPromise()
      .then((res: Response) => res.json());
  }
}
