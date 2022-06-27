import { Component } from '@angular/core';
import { ExemploService } from './exemplo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomePessoa:string ='';
  title:string = 'aula-angular';
  placeholder:string='Informe o seu nome ';
  nomes: Array<string> = ['Douglas','Laerte','Cristiano Ronaldo','Messi','Pelé'];
  valorAtual:number = 0;

  constructor(private ExemploService:ExemploService){
    setTimeout(() => {
      this.title ='Teste Laerte'
    }, 5000 );
  }

  public obterHoraAtual():number{
      return new Date().getHours();
  }

  public jaEnoite(): boolean{
    return this.obterHoraAtual() > 18;
  }

  public jaETarde():boolean{

    return this.obterHoraAtual()<= 18 && this.obterHoraAtual()> 12;
  }

  public jaEDia():boolean{

    return this.obterHoraAtual() <=12;
  }

  public async aoClicarBotao():Promise<void>{
    this.valorAtual ++;

    const result = await this.ExemploService.exemplo();
    console.log(result)
  }

}
