import { html } from '@polymer/lit-element';

export default function Output ({ value }) {
  return html`
    <div>${value}</div>
  `;
}
