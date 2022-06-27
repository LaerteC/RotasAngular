import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})
export class FilhoComponent implements OnInit {


  @Input('nomeCompleto') nomeTodo: string ='';

  @Input() idade?:number;

  @Output() aoFazerAniver: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }


  public fazerAniversario():void{

    if(this.idade){
      this.idade ++;

      this.aoFazerAniver.emit(this.idade);
    }
  }
}
