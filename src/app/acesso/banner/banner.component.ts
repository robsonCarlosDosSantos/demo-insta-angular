import { Component, OnInit } from '@angular/core';
import { ImagemModel } from './imagem.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state('escondido', style({ opacity: 0 })),
      state('visivel', style({ opacity: 1 })),
      transition('escondido <=> visivel', [
        animate('1s ease-in')
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  public exibicao: string = '';

  public imagens: Array<ImagemModel> = [
    { estado: 'visivel', url: '../../../assets/banner-acesso/img_1.png'},
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_2.png'},
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_3.png'},
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_4.png'},
    { estado: 'escondido', url: '../../../assets/banner-acesso/img_5.png'}
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.alternarEstadoImagem(), 2000);
  }

  public mudar(): void {
    this.exibicao = this.exibicao === 'visivel' ? 'escondido' : 'visivel';
  }

  public alternarEstadoImagem(): void {
    let index: number;
    for (let i = 0; i < this.imagens.length; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';
        index = i === this.imagens.length - 1 ? 0 : i + 1;
        break;
      }
    }
    this.imagens[index].estado = 'visivel';
    setTimeout(() => this.alternarEstadoImagem(), 2000);
  }

}
