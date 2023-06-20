import { Component } from '@angular/core';

@Component({
  selector: 'app-curd-app',
  templateUrl: './curd-app.component.html',
  styleUrls: ['./curd-app.component.css']
})
export class CurdAppComponent {

  constructor(){}
  
  mobile = true;

  mobiles = [
    {
      name: "xyz",
      price: 50000,
      ram: "2GB",
      storge: "8GB"
    },
    {
      name: "abc",
      price: 40000,
      ram: "6GB",
      storge: "4GB"
    },
    {
      name: "pqr",
      price: 60000,
      ram: "8GB",
      storge: "16GB"
    },
    {
      name: "efg",
      price: 90000,
      ram: "12GB",
      storge: "8GB"
    }
  ]
  editFun(data: any) {
    console.log(data)
  }
}
