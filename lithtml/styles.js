import {html, render} from './node_modules/lit-html/lit-html.js';

export const styles = html`
  <style>
    /* Regular css syntax */
    :host {
      display: block;
      border: 2px dotted green;
      margin: 8px;
    }
    /*
    body, div, p, span, section, navigation {
      margin: 8px;
      padding: 8px;
      display: block;
      font-family: Roboto;
      font-size: 16px;
      border: 2px dotted green;
    }
    .wrapper {
      min-height: 32px;
    }
    */
  </style>
`;