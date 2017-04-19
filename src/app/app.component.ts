import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import CheeseService from './cheese.service';

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
  styleUrls: ['./app.component.css'],
  providers: [CheeseService]
})
export class AppComponent {
  results = CHEESES;
  loading = false;
  constructor( private api: CheeseService ) {
  }
  seeAllCheeses() {
    this.results = [];
    this.loading = true;
    this.api.getAllCheeses().then((cheeses) => {
        this.results = cheeses;
        this.loading = false;
      });
  }

  doSearch(cheeseName: string) {
    this.results = [];
    this.loading = true;
    this.api.getByCheeseName(cheeseName).then((cheeses) => {
        this.results = cheeses;
        this.loading = false;
      });
  }

  doSearchSubstitutes(cheeseName: string) {
    this.results = [];
    this.loading = true;
    this.api.getSubstitutes(cheeseName).then((cheeses) => {
        this.results = cheeses;
        this.loading = false;
      });
  }

  searchByFirmness(firmness: string) {
    this.results = [];
    this.loading = true;
    this.api.getByFirmness(firmness).then((cheeses) => {
        this.results = cheeses;
        this.loading = false;
      });
  }

  searchByAnimal(animal: string) {
    this.results = [];
    this.loading = true;
    this.api.getByAnimal(animal).then((cheeses) => {
        this.results = cheeses;
        this.loading = false;
      });
  }

}
