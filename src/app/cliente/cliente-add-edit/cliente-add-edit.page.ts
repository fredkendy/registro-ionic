import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {

  //Exemplo de binding. Decorator de propriedades, que busca no DOM da pág pelo componente enviado como primeiro parametro
  //entrega uma referencia na propriedade nome (nome poderia ser qqr elemento HTML)
  @ViewChild('inputNome',	{read:	ElementRef})	nome:	ElementRef | undefined ;

  constructor() { }

  ngOnInit() {
  }

  //@ts-ignore
  submit() {
    console.log(this.nome?.nativeElement.value);
  }

}
