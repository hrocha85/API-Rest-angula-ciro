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
  nome:string;
  email:string;
  telefone:string;
  password:string;

  constructor(public consultService: ConsultService ) { }

  ngOnInit(): void {
    this.contato = {};

    this.consultService.updateUser();


  }

  criar(frm: FormGroup){

    const info={
      nome: this.nome,
      email: this.email,
      telefone:this.telefone,
      password: this.password,
    };

    // this.consultService.criar(info).subscribe(resposta => {
    //   // this.user.push(respostas);


    //   frm.reset();
    // }
    // )
  }

}
