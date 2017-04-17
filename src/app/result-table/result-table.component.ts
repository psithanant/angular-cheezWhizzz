import { Component, OnInit } from '@angular/core';

const CHEESES = [
  {
  "id": 1,
  "name": "Mahon",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 2,
  "name": "Swiss",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 3,
  "name": "Gruyere",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 4,
  "name": "Emmental",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 5,
  "name": "Grana Padano",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 6,
  "name": "Cotija",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 7,
  "name": "Parmigano-Reggiano",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 8,
  "name": "Parmesan",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 9,
  "name": "Asiago",
  "animal": "cow",
  "firmness": "hard"
},
{
  "id": 10,
  "name": "Comte",
  "animal": "cow",
  "firmness": "hard"
}
];
@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  cheeses = CHEESES;
  constructor() { }

  ngOnInit() {
  }

}
