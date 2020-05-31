import { Component, OnInit } from '@angular/core';
import { trigger, animate, state, transition, style } from '@angular/animations';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado',
        style({
          opacity: 1
        })
      ),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(-50px, 0)'
        }),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('animacao-login', [
      state('criado',
        style({
          opacity: 1
        })
      ),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(50px, 0)'
        }),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public animacaoBanner: string = 'criado';
  public animacaoLogin: string = 'criado';

  constructor() { }

  ngOnInit(): void {
  }

}
