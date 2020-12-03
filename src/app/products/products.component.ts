import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConsultService } from '../consult.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public consultService: ConsultService) {  }

  ngOnInit(): void {

    this.consultService.updateProdutos();


  }

}
