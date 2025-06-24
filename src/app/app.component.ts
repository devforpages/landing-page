import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderLandingPageComponent } from './landing-page/header-landing-page/header-landing-page.component';
import { FooterLandingPageComponent } from './landing-page/footer-landing-page/footer-landing-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLandingPageComponent,LandingPageComponent,FooterLandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
