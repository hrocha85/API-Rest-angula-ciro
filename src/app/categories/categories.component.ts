import { Component, OnInit } from '@angular/core';
import { ConsultService } from '../consult.service'
;
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public consultService: ConsultService ) { }

  ngOnInit(): void {

    this.consultService.updateCategorias();
  }

}
