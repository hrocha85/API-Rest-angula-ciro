import { Component, OnInit } from '@angular/core';
import { ConsultService } from '../consult.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(public consultService: ConsultService) { }

  ngOnInit(): void {

    this.consultService.updatePedidos();

  }

}
