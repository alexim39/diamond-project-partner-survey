import {Component} from '@angular/core';
import { LogoComponent } from './nav/logo.component';


/**
 * @title Survey Banner
 */
@Component({
    selector: 'async-survey-footer',
    template: `



<footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
    <span class="logo"><async-logo></async-logo></span>
    </div>

  </div>
  <div class="footer-copyright">
    &copy; {{ currentYear }}, <a href="https://async.ng" target="_blank" rel="noopener">Async Group.</a> All rights reserved.
  </div>
</footer>




  `,
    styles: `




// SCSS Styles for a Modern Footer
.footer {
  background-color: #f1f1f1;
  color: #1a1a1a;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    width: 100%;
  }

  .footer-logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .footer-copyright {
    a {
      color: #595959;
      text-decoration: underline;
    }
    font-size: 0.8rem;
    color: #595959;
    margin-top: 1rem;
  }
}

// Responsive Design
@media (min-width: 768px) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem;

    .footer-container {
      flex-direction: row;
      justify-content: space-between;
    }
  }
}



  `,
    imports: [LogoComponent]
})
export class SurveyFooterComponent {
    currentYear: number;

    constructor() {
      this.currentYear = new Date().getFullYear();
    }
}