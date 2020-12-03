import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

interface Response {
  id: string;
  nome: string;
  email: string;
  telefone: number;
}

interface ResponseCategories {
  id: string;
  nome: string;
}

interface ResponseOrders {
  id: string;
  moment: string;
  orderStatus: string;
  client: {
    id: string;
    nome: string;
    email: string;
    telefone: number;
  };
  items: {
    quantity: number;
    price: number;
    subtotal: number;
    product: {
      id: string;
      name: string;
      description: string;
      price: number;
      imgUrl: string;
      categories: {
        id: string;
        nome: string;
      };
    };
    payment: boolean;
    total: number;
  };
}

interface ResponseProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  categories: {
    id: string;
    nome: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ConsultService {
  constructor(private http: HttpClient) {}

  user: Array<Response> = [];
  lastUpdate: Date;

  categories: Array<ResponseCategories> = [];

  orders: Array<ResponseOrders> = [];

  products: Array<ResponseProducts> = [];

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  updateUser() {
    this.http
      .get<Array<Response>>('http://localhost:8080/users')
      .subscribe((data) => {
        this.user = data;
        this.lastUpdate;
      });
  }

  updateCategorias() {
    this.http
      .get<Array<ResponseCategories>>('http://localhost:8080/categories')
      .subscribe((data) => {
        this.categories = data;
        this.lastUpdate;
      });
  }

  updatePedidos() {
    this.http
      .get<Array<ResponseOrders>>('http://localhost:8080/orders')
      .subscribe((data) => {
        this.orders = data;
        this.lastUpdate;
      });
  }

  updateProdutos() {
    this.http
      .get<Array<ResponseProducts>>('http://localhost:8080/products')
      .subscribe((data) => {
        this.products = data;
        this.lastUpdate;
      });
  }

  // criar(contato: any){
  //   return this.http.post('http://localhost:8080/users', contato );

  // }

  criarCategoria(
    categorie: ResponseCategories
  ): Observable<ResponseCategories> {
    return this.http.post<ResponseCategories>(
      'http://localhost:8080/categories',
      categorie
    );
  }
}
