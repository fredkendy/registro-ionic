import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  //FormGroup agrega valores dos FormControls (guardam valores informados pelo user)
  clienteForm!: FormGroup;

  //visível na classe. Injeção de dependência do FormBuilder (permite usar recursos como FormGroup)
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      telefone: ['', Validators.required],
      renda: ['0', Validators.compose([Validators.required, Validators.min(0)])],
      nascimento: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.cliente);
  }

}
