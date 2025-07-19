import { Component } from '@angular/core';
import { FaleConoscoComponent } from '../fale-conosco/fale-conosco.component';
import { EscolhaOfertaComponent } from '../escolha-oferta/escolha-oferta.component';

@Component({
  selector: 'app-landing-page',
  imports: [EscolhaOfertaComponent,FaleConoscoComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
