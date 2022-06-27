import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  nomeURL :string = '';

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params:any)=>{
     // alert(params.nome)

      this.nomeURL = params.nome
    }); 
  }

  ngOnInit(): void {
  }

  parabenizar(idadeAtual:number){
    alert('Parabéns Você Fez ' + idadeAtual  + 'Anos');
  }

}
