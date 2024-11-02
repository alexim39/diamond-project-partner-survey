import { Component } from '@angular/core';

/**
 * @title Survey Banner
 */
@Component({
  selector: 'async-banner',
  template: `
    <section class="head">
      <article>
        <h2>Understanding Recruitment Challenges in (C21FG) Network Marketing</h2>
        <p>
          Thank you for taking the time to participate in this survey. Your insights will help us identify common
          challenges and develop strategies to improve recruitment efforts within our organization.
        </p>

        <p>
        This information will be utilized solely for the purposes of study and process improvement, and will not be applied for any other reasons. We greatly value and encourage your candid responses.
        </p>
      </article>
    </section>
  `,
  styles: [
    `
      .head {
        background: #02052c;
        padding: 2em 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        article {
          color: white;
          max-width: 800px;
          padding: 1em;
          h2 {
            font-family: 'Garamond', serif;
            font-size: 1.8em;
            margin-bottom: 0.5em;
          }
          p {
            font-family: 'Courier New', monospace;
            font-size: 1em;
            line-height: 1.6em;
            text-align: justify;
            margin-bottom: 2em;
          }
        }
      }

      // Responsive adjustments
      @media (max-width: 768px) {
        .head {
          padding: 1.5em 1em;
        }

        article {
          padding: 1em;
          h2 {
            font-size: 1.5em;
          }
          p {
            font-size: 0.9em;
          }
        }
      }

      @media (max-width: 480px) {
        article {
          padding: 0.5em;
          h2 {
            font-size: 1.3em;
          }
          p {
            font-size: 0.85em;
          }
        }
      }
    `,
  ],
  standalone: true,
  imports: [],
})
export class BannerComponent {}
