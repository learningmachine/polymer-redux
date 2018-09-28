import { html } from '@polymer/lit-element';
import '../components/Input';
import '../components/Button';

import CSS from './_components.app-css';

const App = html`
    ${CSS}
    <section class="demo-certificate-input">
        <demo-input class="demo-certificate-input__input"></demo-input><demo-button></demo-button>     
    </section>
`;

export default App;
