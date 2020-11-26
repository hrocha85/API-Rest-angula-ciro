import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface Response{


    id:string;
    nome:string;
    email:string;
    telefone: number;


}

interface ResponseCategories{
  id: string;
  nome: string;

}

interface ResponseOrders{

  {
    id:string;
    moment:string;
    orderStatus: string;
    client:{
      id:string;
      nome:string;
      email:string;
      telefone:number;
    }

  },
  items:{
    quantity:2;

  }
 

}

interface ResponseProducts{

  {
    "id": string;
    "name": "Produto 1",
    "description": "Uma descricao",
    "price": 90.5,
    "imgUrl": "",
    "categories": [
      {
        "id": 2,
        "nome": "Books"
      }
    ]
  },

}


@Injectable({
  providedIn: 'root'
})
export class ConsultService {

  constructor(private http:HttpClient) { }

  user: Array <Response> = [ ];
  lastUpdate: Date;

  categories:Array<ResponseCategories> = [];

  orders:Array<ResponseOrders> = [];


  updateUser(){

  this.http.get<Array<Response>>('http://localhost:8080/users').subscribe(data =>{
    this.user = data;
    this.lastUpdate;
    });

    }

  updateCategorias(){

  this.http.get<Array<ResponseCategories>>('http://localhost:8080/categories').subscribe(data =>{
    this.categories = data;
    this.lastUpdate;
    });

    }

  updatePedidos(){

  this.http.get<Array<ResponseOrders>>('http://localhost:8080/orders').subscribe(data =>{
    this.orders = data;
    this.lastUpdate;
    });

    }



    criar(contato: any){
      return this.http.post('http://localhost:8080/users', contato );

    }










}
