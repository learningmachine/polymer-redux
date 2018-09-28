import { html } from '@polymer/lit-element';

export default function Output ({ values }) {
  return html`
    <ul>${ values.map(value => html`<li>${value}</li>`) }</ul>
  `;
}
