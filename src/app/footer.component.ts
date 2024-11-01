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

    <!-- <div class="footer-links">
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
      <a href="#privacy">Privacy Policy</a>
    </div>

    <div class="footer-socials">
      <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
    </div> -->
  </div>
  <div class="footer-copyright">
    &copy; {{ currentYear }} <a href="http://async.ng" target="_blank">Async Groups.</a> All rights reserved.
  </div>
</footer>




  `,
  styles: `




// SCSS Styles for a Modern Footer
.footer {
  background-color: #f1f1f1;  // Dark background color
  color: #1a1a1a;        // Light text color
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

  .footer-links {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    a {
      color: #f1f1f1;
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;

      &:hover {
        color: #4db8ff;  // Hover effect color
      }
    }
  }

  .footer-socials {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;

    a {
      color: #f1f1f1;
      font-size: 1.2rem;
      transition: color 0.3s ease;

      &:hover {
        color: #4db8ff;
      }
    }
  }

  .footer-copyright {
    a {
      color: #aaaaaa;
      text-decoration: none;
    }
    font-size: 0.8rem;
    color: #aaaaaa;
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

    .footer-links {
      gap: 2rem;
      margin-bottom: 0;
    }

    .footer-socials {
      gap: 1.5rem;
      margin-bottom: 0;
    }
  }
}



  `,
  standalone: true,
  imports: [LogoComponent],
})
export class SurveyFooterComponent {
    currentYear: number;

    constructor() {
      this.currentYear = new Date().getFullYear();
    }
}