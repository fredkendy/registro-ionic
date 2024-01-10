//arquivo module: empacotar componente (Home) em um módulo para disponibilizar para a aplicação

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  //quais componentes/classes são declarados no módulo
  declarations: [HomePage]
})
export class HomePageModule {}
