import { html } from '@polymer/lit-element';
import CSS from './_components.input-css';

const Input = ({ onInput = () => {}, isValid = true } = {}) => {
  // TODO: better handle this dynamic class (cf npm classnames)
  const inputClass = `demo-input ${isValid ? '' : 'is-invalid'}`;

  return html`
    ${CSS}
    <label class="demo-u-visually-hidden" for='demo input'>Enter Text</label>
    <input 
      type='text'
      id='demo input'
      placeholder='Some text'
      class='${inputClass}'
      @input='${(e) => { onInput(e.target.value); }}'
    />
  `;
};

export default Input;
