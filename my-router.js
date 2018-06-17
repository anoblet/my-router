import { LitElement, html} from '@polymer/lit-element';
import { installRouter } from 'pwa-helpers/router.js';

class MyRouter extends LitElement {
  _render(props) {}

  _firstRendered() {
    installRouter((location) => this._locationChanged(location));
  }

  _locationChanged() {
    const path = window.decodeURIComponent(window.location.pathname);
    const relativePath = path.replace(/^\//, '');
    const parts = relativePath.split('/');
    const component = parts.pop();
    this.dispatchEvent(new CustomEvent('pathChanged', {detail: {path: path}, bubbles: true, composed: true}));
  }
}

window.customElements.define('my-router', MyRouter);
