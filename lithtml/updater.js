import { LitElement, html } from './node_modules/@polymer/lit-element/lit-element.js';

class ShouldUpdate extends LitElement {

  static get properties() {
    return {
      active: { type: Boolean },
      count: { type: String },
    };
  }

  constructor() {
      
    super();

    this.active = true;
    this.count = '';

    // Increment a counter each second. Note that even when render is prevented, javascript will
    // continue to run. When rendering is turned on again at a later time, the values of the
    // properties at that moment are picked up again.
    
    // setInterval(() => {
    //   this.count += 1;
    // }, 1000);

    document.body.addEventListener('inter-app-data', (e) => { 
        this.count = JSON.stringify(e.detail)
     }, false);
  }

  render() {
    return html`
      Current Angular state: <code>${this.count}</code>
      <br>
      Listning status:<strong> ${this.active}</strong>
      <br>
      <button @click="${() => this.active = !this.active}">
        Toggle listening
      </button>
    `;
  }

  // The shouldUpdate function receives a map with keys for the changed properties
  // pointing to their previous values.
  // Based on this, you can decide whether the component should re-render on not. This
  // is useful to for example block re-rendering of the component while it is not active
  // or in view.
  shouldUpdate(changedProperties) {
      console.log('changedProperties: ', changedProperties)
      
    if(changedProperties.get('active') !== undefined) return true
    return this.active;
  }

}

customElements.define('x-should-update', ShouldUpdate);