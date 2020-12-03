import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConsultService } from '../consult.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  nome:string;
  description:string;
  price:number;
  categories:string;


  constructor(public consultService: ConsultService) {  }

  ngOnInit(): void {

    this.consultService.updateProdutos();
    this.consultService.updateCategorias();

  }

  criar(frm: FormGroup){

    const info={
      nome: this.nome,
      description: this.description,
      price:this.price,
      categories: this.categories,
    }

    console.log(info);
  }


}
