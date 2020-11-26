import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConsultService } from '../consult.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: Array <Response> = [ ];
  contato: any;

  constructor(public consultService: ConsultService ) { }

  ngOnInit(): void {
    this.contato = {};

    this.consultService.updateUser();


  }

  criar(frm: FormGroup){

    this.consultService.criar(this.contato).subscribe(resposta => {
      this.user.push(resposta);

      console.log(this.contato)

      frm.reset();
    })
  }

}
