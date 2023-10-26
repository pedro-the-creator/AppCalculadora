import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  
  visor: string = '0';
  operacao!: number;
  valor1!: number;
  valor2!: number;
  constructor() {}

  adicionarNumero(valor: string){
    if((this.visor.length === 1) && (this.visor ==='0'))
    {
      this.visor = valor
    }else{
      this.visor += valor;
    }
  }

  adicionarOperacao(valor: number){
    this.operacao = valor;
    this.valor1 = +this.visor;
    this.limparVisor();
  }

  porcentagem() {
    this.valor1 = +this.visor;
    this.visor = "" + (this.valor1 / 100).toString();
    this.valor1 = +this.visor; 
  }

  maisMenos() {
    if (this.visor[0] !== '0') {
      this.visor = (-this.visor).toString();
    }
  }

  calcular(){
    this.valor2 = +this.visor
    switch(this.operacao){
      case 0: {
        this.visor = "" + (this.valor1 + this.valor2);
        console.log(this.visor)
        break;
      }
      case 1: {
        this.visor = "" + (this.valor1 - this.valor2);
        console.log(this.visor)
        break;
      }
      case 2: {
        this.visor = "" + (this.valor1 * this.valor2);
        console.log(this.visor)
        break;
      }
      case 3: {
        this.visor = "" + (this.valor1 / this.valor2);
        console.log(this.visor)
        break;
      }
    }
    this.valor1 = this.valor2;
  }

  limparVisor(){
    this.visor = '0'
  }
}