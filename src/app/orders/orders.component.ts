import { Component, OnInit } from '@angular/core';
import { ConsultService } from '../consult.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

quantity:string;
payment:string;
client:string;
product:string;
description:string;
categories:string;



  constructor(public consultService: ConsultService) { }

  ngOnInit(): void {

    this.consultService.updatePedidos();
    this.consultService.updateUser();
    this.consultService.updateProdutos();
    this.consultService.updateCategorias();

  }


  criar(frm: FormGroup){

    const info={
      quantity: this.quantity,
      payment: this.payment,
      client: this.client,
      product: this.product,
      description:this.description,
      categories:this.categories,
    };

    console.log(info);
}
}
