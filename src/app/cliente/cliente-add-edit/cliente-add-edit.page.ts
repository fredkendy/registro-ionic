import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Cliente {
  nome: string;
  email: string;
  telefone: string;
  renda: string;
  nascimento: string;
}

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {

  //Exemplo de binding. Decorator de propriedades, que busca no DOM da pág pelo componente enviado como primeiro parametro
  //entrega uma referencia na propriedade nome (nome poderia ser qqr elemento HTML)
  //@ViewChild('inputNome',	{read:	ElementRef})	nome:	ElementRef | undefined ;

  cliente = {
    nome: '',
    email: '',
    telefone: '',
    renda: '',
    nascimento: ''
  };

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.cliente);
  }

}
