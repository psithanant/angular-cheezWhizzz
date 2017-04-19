import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

const CHEESES = [
  {
  'id': 1,
  'name': 'Brie',
  'animal': 'cow',
  'hardness': 'soft'
}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results = CHEESES;
  loading = false;
  constructor(public http: Http) {
  }
  seeAllCheeses() {
    this.results = [];
    this.loading = true;
    this.http.request('http://cheeswhiz.herokuapp.com/api/cheese')
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

  doSearch(cheeseName: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`http://cheeswhiz.herokuapp.com/api/cheese/specific/${cheeseName}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

  doSearchSubstitutes(cheeseName: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`http://cheeswhiz.herokuapp.com/api/cheese/substitute/${cheeseName}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

  searchByFirmness(firmness: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`http://cheeswhiz.herokuapp.com/api/cheese/firmness/${firmness}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

  searchByAnimal(animal: string) {
    this.results = [];
    this.loading = true;
    this.http.request(`http://cheeswhiz.herokuapp.com/api/cheese/animal/${animal}`)
      .subscribe((res: Response) => {
        this.results = res.json();
        this.loading = false;
      });
  }

}
