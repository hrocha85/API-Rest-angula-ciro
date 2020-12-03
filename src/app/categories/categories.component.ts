import { Component, OnInit, ɵConsole } from '@angular/core';
import { ConsultService } from '../consult.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  nome: string;

  constructor(public consultService: ConsultService) {}

  ngOnInit(): void {
    this.consultService.updateCategorias();
  }

  criar(frm: FormGroup) {
    const info = {
      nome: this.nome,
    };

    console.log(info);
  }
}
