import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyFooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, BannerComponent, SurveyFormComponent, SurveyFooterComponent],
  styles: [`


  `],
  template: `
  <async-nav></async-nav>
  <async-banner></async-banner>
  <async-survey-form></async-survey-form>
  <async-survey-footer></async-survey-footer>


  
  
  
  `,
})
export class AppComponent {
  title = 'survey';
}
