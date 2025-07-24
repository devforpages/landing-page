import { Component } from '@angular/core';
import { FaleConoscoComponent } from '../fale-conosco/fale-conosco.component';
import { EscolhaOfertaComponent } from '../escolha-oferta/escolha-oferta.component';
import { DetalhesProdutoComponent } from '../detalhes-produto/detalhes-produto.component';
import { EntregaComponent } from '../entrega/entrega.component';
import { SessaoVideoComponent } from '../sessao-video/sessao-video.component';

@Component({
  selector: 'app-landing-page',
  imports: [ SessaoVideoComponent, DetalhesProdutoComponent, EntregaComponent, EscolhaOfertaComponent, FaleConoscoComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
