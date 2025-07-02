/*
import { Injectable } from '@angular/core';

// Declaração da função gtag para TypeScript
declare function gtag(
  command: 'config' | 'event',
  targetIdOrEventName: string,
  params?: { [key: string]: any }
): void;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() {}

  
   // Envia qualquer evento para o Google Analytics 4
   // @param eventName Nome do evento (ex.: 'generate_lead', 'purchase')
   // @param params Objeto com parâmetros do evento
  
  public sendEvent(eventName: string, params: { [key: string]: any } = {}): void {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
      console.log(`Evento '${eventName}' enviado para o GA4`, params);
    } else {
      console.warn('gtag não está definido. Verifique se o GA4 está corretamente instalado.');
    }
  }

  //Evento de clique em botão
  public trackButtonClick(buttonId: string, buttonName: string, screen: string): void {
    this.sendEvent('click_button', {
      event_category: 'interacao',
      event_label: buttonId,
      content_type: 'button',
      method: 'click',
      item_id: buttonId,
      item_name: buttonName,
      screen_name: screen,
      engagement_time_msec: 500,
      value: 1
    });
  }

  //Evento de geração de lead
  public trackGenerateLead(formId: string, formName: string, screen: string): void {
    this.sendEvent('generate_lead', {
      event_category: 'lead',
      event_label: formId,
      method: 'form',
      content_type: 'formulario',
      item_id: formId,
      item_name: formName,
      screen_name: screen,
      engagement_time_msec: 500,
      value: 1,
      currency: 'BRL'
    });
  }

  //Evento de compra
  public trackPurchase(transactionId: string, value: number, items: any[]): void {
    this.sendEvent('purchase', {
      transaction_id: transactionId,
      affiliation: 'Loja Online',
      value: value,
      currency: 'BRL',
      tax: 0,
      shipping: 0,
      items: items
    });
  }

  //Evento de login
  public trackLogin(method: string): void {
    this.sendEvent('login', {
      method: method
    });
  }

  //Evento de cadastro
  public trackSignUp(method: string): void {
    this.sendEvent('sign_up', {
      method: method
    });
  }

  //Evento de busca no site
  public trackSearch(term: string): void {
    this.sendEvent('search', {
      search_term: term
    });
  }
}


  //Como ficaria no html
  //<button (click)="onButtonClick()">Comprar</button>
  //<button (click)="onLead()">Gerar Lead</button>
  //<button (click)="onSearch()">Buscar</button>




// Como ficaria no componente
  constructor(private analytics: AnalyticsService) {}

  onButtonClick() {
    this.analytics.trackButtonClick('btn-001', 'Botao Comprar', 'pagina_home');
  }

  onLead() {
    this.analytics.trackGenerateLead('form-contato', 'Formulario Contato', 'pagina_contato');
  }

  onPurchase() {
    this.analytics.trackPurchase('T12345', 299.99, [
      {
        item_id: 'SKU123',
        item_name: 'Aspirador de Pó',
        quantity: 1,
        price: 299.99,
        item_brand: 'MarcaTop',
        item_category: 'Eletrodomésticos'
      }
    ]);
  }

  onLogin() {
    this.analytics.trackLogin('email');
  }

  //Evento de login:
  this.analytics.sendEvent('login', {
    method: 'email'
  });

  onSignUp() {
    this.analytics.trackSignUp('google');
  }

  onSearch() {
    this.analytics.trackSearch('aspirador de po');
  }
}


  //Observação muito importante:
  //Para que os parâmetros personalizados apareçam nos relatórios do GA4, você precisa ir em:
  //Admin > Definições da Propriedade > Definições de Eventos > Parâmetros personalizados > Criar novo.
  //Se não fizer isso, o GA4 recebe os dados, mas eles não aparecem nos relatórios padrão, só em BigQuery ou em explorações personalizadas.


  // Inserir no idex.html no inicio da tag <head>
  // <!-- Google tag (gtag.js) -->
  //<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  // <script>
  //  window.dataLayer = window.dataLayer || [];
  //  function gtag(){dataLayer.push(arguments);}
  //  gtag('js', new Date());
  //  gtag('config', 'G-XXXXXXXXXX');
  //</script>
  //Substituir G-XXXXXXXXXX pelo ID da sua propriedade GA4.



*/