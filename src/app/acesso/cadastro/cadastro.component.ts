import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter();

  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    nomeCompleto: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    nomeUsuario: new FormControl(null,[Validators.required, Validators.minLength(1), Validators.maxLength(50)]),
    senha: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  public ativarLogin(): void {
    this.exibirPainel.emit('login');
  }

  public confirmaCadastro(): void {
    const usuario: UsuarioModel = new UsuarioModel(
      this.formulario.value.email,
      this.formulario.value.nomeCompleto,
      this.formulario.value.nomeUsuario,
      this.formulario.value.senha,
    );
    console.log(usuario);
  }

}
