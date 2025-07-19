import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class FaleConoscoComponent {
  faleConoscoForm: FormGroup;

  constructor(readonly formBuilder: FormBuilder) {
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
  }

  onSubmit(): void {
    if (this.faleConoscoForm.valid) {
      console.log('Dados enviados:', this.faleConoscoForm.value);
      // aqui você pode integrar com a API ou exibir uma mensagem de sucesso
      this.faleConoscoForm.reset(); // limpa o formulário após o envio
    }
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
}