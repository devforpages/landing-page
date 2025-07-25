import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { FaleConoscoService } from './fale-conosco.service';
import { FaleConoscoModel } from './fale-conosco-model/fale-conosco-model';
import { LoaderComponent } from '../shared/component/loader/loader.component';
import { DialogComponent } from '../shared/component/dialog/dialog.component';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LoaderComponent, DialogComponent],
})

export class FaleConoscoComponent {
  faleConoscoForm: FormGroup;
  isLoading!: boolean;
  tipo!: string;
  texto!: string;

  constructor(readonly formBuilder: FormBuilder, readonly faleConoscoService: FaleConoscoService) {
    this.faleConoscoForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mensagem: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(255),
        ],
      ],
    });
    this.reload(false);
    //this.dialog('sucesso', 'Teste após 5 segundos');
  }

   // getters para facilitar a validação no HTML
  get nome() {
    return this.faleConoscoForm.get('nome');
  }
  get email() {
    return this.faleConoscoForm.get('email');
  }
  get mensagem() {
    return this.faleConoscoForm.get('mensagem');
  }

  reload(isLoading: boolean) {
   setTimeout(() => {
      this.isLoading = isLoading;
    }, 2000);
  }

  dialog(tipo: string, texto: string){
    this.tipo = tipo;
    this.texto = texto;
  }
  
  onSubmit(): void {
    this.reload(true);
    if (this.faleConoscoForm.valid) {
      console.log('Dados enviados:', this.faleConoscoForm.value);

      const dadosPreenchidos: FaleConoscoModel = {
        replyTo: this.faleConoscoForm.value.email,
        subject: "Mensagem do fale conosco",
        text: this.faleConoscoForm.value.mensagem,
        html: `
          <h1>Olá, sou ${this.faleConoscoForm.value.nome}!</h1>
          <p>Este é meu e-mail: ${this.faleConoscoForm.value.email}</p>
          <p>${this.faleConoscoForm.value.mensagem}</p>
        `
      };

      this.faleConoscoService.enviarEmail(dadosPreenchidos).subscribe({
        next: (response) => {
          console.log("api!!!!: ", response);
        },
        error: (error) => {
          console.log("Erro na api: ",error.message);
          this.reload(false);
          this.dialog('erro', 'Ocorreu algum erro na sua mensagem!');
        },
        complete: () => {
          this.reload(false);
          this.faleConoscoForm.reset();
          this.dialog('sucesso', 'Sua mensagem foi enviada com sucesso!');
        }
      });
    }
  }
}