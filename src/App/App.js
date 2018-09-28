import { html, LitElement } from '@polymer/lit-element';
import '../components/Input';
import '../components/Button';

import CSS from './_components.app-css';

class App extends LitElement {
  _render () {
    return html`
      ${CSS}
      <section class="demo-certificate-input">
          <demo-input class="demo-certificate-input__input"></demo-input><demo-button></demo-button>     
      </section>
    `;
  }
}

export default App;
