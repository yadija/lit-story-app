import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';

class Offcanvas extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <button
        class="btn p-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i class="bi bi-list fs-3"></i>
      </button>

      <section
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <section class="offcanvas-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </section>
        <section class="offcanvas-body">
          <section class="list-group">
            <a href="/add.html" class="list-group-item list-group-item-action text-decoration-none">
              ${msg('Add New Story')}
            </a>
            <a
              href="/about.html"
              class="list-group-item list-group-item-action text-decoration-none"
            >
              ${msg('About Us')}
            </a>
          </section>

          <locale-picker class="p-3 mx-auto"></locale-picker>
        </section>
      </section>
    `;
  }
}

customElements.define('off-canvas', Offcanvas);
