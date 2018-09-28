import { html, LitElement } from '@polymer/lit-element';
import CSS from './_components.button-css';
import Spinner from '../Spinner';

class Button extends LitElement {
  constructor () {
    super();
    this.defaultProps();
    this.handleClick = this.handleClick.bind(this);
  }

  defaultProps () {
    this.showSpinner = false;
    // this is a trick to manage the display of the spinner without triggering contempt from LitElement
    // not having it as a property allows us to reset it without warning.
    this.activateSpinner = this.showSpinner;
    this.cancelSpinner = false;
    this.onClick = () => {};
  }

  static get properties () {
    return {
      showSpinner: Boolean,
      cancelSpinner: Boolean,
      onClick: Function,
      isDisabled: Boolean,
      isHollow: Boolean
    };
  }

  handleClick () {
    this.onClick();
    this.showSpinner = true;
    this.activateSpinner = this.showSpinner;
  }

  getButtonText () {
    return html`<label class='demo-button__label'>Verify</label>`;
  }

  getSpinner () {
    return html`${Spinner({ isInverted: this.isHollow })}`;
  }

  _propertiesChanged (props, changedProps, prevProps) {
    this._props = props;
    if (props.cancelSpinner) {
      this.activateSpinner = false;
    }
    super._propertiesChanged(props, changedProps, prevProps);
  }

  render () {
    const buttonClass = [
      'demo-button',
      this.isHollow ? 'demo-button--hollow' : '',
      this.isDisabled ? 'is-disabled' : '',
      this.activateSpinner ? 'has-spinner' : ''
    ].join(' ');

    return html`
      ${CSS}
      <button class='${buttonClass}' @click='${this.handleClick}' ?disabled='${this.isDisabled}'>
       ${this.activateSpinner ? this.getSpinner() : this.getButtonText()}
      </button>
    `;
  }
}

window.customElements.define('demo-button-raw', Button);

// wrap Button in order to plug into Container
// necessary trade-off to deal with class component in the store connector
function ButtonWrapper (props) {
  return html`
  <demo-button-raw
    .onClick='${props.onClick}'
    ?cancelSpinner='${props.cancelSpinner}'
    ?isDisabled='${props.isDisabled}'
    ?isHollow='${props.isHollow}'
  ></demo-button-raw>`;
}

export { ButtonWrapper as Button };
