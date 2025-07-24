import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaleConoscoModel } from './fale-conosco-model/fale-conosco-model';

@Injectable({
  providedIn: 'root'
})
export class FaleConoscoService {

  apiUrlEnvioEmail: string = "https://envia-email.onrender.com/send-email";

  constructor(readonly httpClient: HttpClient) { }

  enviarEmail(faleConoscoModel: FaleConoscoModel) : Observable<FaleConoscoModel> {
    return this.httpClient.post<FaleConoscoModel>(this.apiUrlEnvioEmail, faleConoscoModel);
  }

}


 
