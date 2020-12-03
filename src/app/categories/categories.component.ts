import { Component, OnInit, ɵConsole } from '@angular/core';
import { ConsultService } from '../consult.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  id: string;
  nome: string;
  categories: Array<any>;

  constructor(
    public consultService: ConsultService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.consultService.updateCategorias();

    this.http
      .post<any>('http://localhost:8080/categories', {
        nome: this.nome,
        id: this.id,
      })
      .subscribe((data) => {
        this.nome = data.nome;
      });
  }

  criar(frm: FormGroup) {
    const info = {
      id: Math.floor(Math.random() * 100).toString(),
      nome: this.nome,
    };

    console.log(info);

    this.consultService
      .criarCategoria(info)
      .subscribe((categorie) => this.categories.push(categorie));
  }
}
