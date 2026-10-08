import { Component } from '@angular/core';

/**
 * @title Survey Banner
 */
@Component({
    selector: 'async-banner',
    template: `
    <section class="head">
      <article>
        <p class="eyebrow">/ Partners Survey</p>
        <h1>Understanding Recruitment Challenges in Network Marketing</h1>
        <span class="rule" aria-hidden="true"></span>
        <p>
          Thank you for taking the time to participate in this survey. Your insights will help us identify common
          challenges and develop strategies to improve recruitment efforts within our organization.
        </p>

        <p class="trust">
        Your answers are used solely for study and process improvement. We value your candid responses.
        </p>
      </article>
    </section>
  `,
    styles: [
        `
      .head {
        background: radial-gradient(120% 140% at 50% 0%, #1a1440 0%, var(--dp-navy) 45%, var(--dp-ink) 100%);
        padding: 3em 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        article {
          color: white;
          max-width: 800px;
          padding: 1em;
          .eyebrow {
            font-size: 0.78em;
            font-weight: 800;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--dp-gold);
            margin: 0 0 0.8em;
          }
          h1 {
            font-family: 'Garamond', serif;
            font-size: 2em;
            margin: 0 0 0.4em;
            line-height: 1.25;
          }
          .rule {
            display: block;
            width: 64px;
            height: 3px;
            background: var(--dp-gold);
            border-radius: 2px;
            margin: 0 auto 1.2em;
          }
          p {
            font-size: 1em;
            line-height: 1.7em;
            text-align: center;
            margin: 0 auto 1.2em;
            max-width: 62ch;
            color: rgba(255, 255, 255, 0.88);
          }
          .trust {
            font-size: 0.85em;
            color: var(--dp-gold);
            margin-bottom: 0;
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
          h1 {
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
          h1 {
            font-size: 1.3em;
          }
          p {
            font-size: 0.85em;
          }
        }
      }
    `,
    ],
    imports: []
})
export class BannerComponent {}
