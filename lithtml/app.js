import {html, render} from './node_modules/lit-html/lit-html.js';
import { unsafeHTML } from './node_modules/lit-html/directives/unsafe-html.js';
import { styles } from './styles.js';

const externalTemplate = `
  <div>Content rendered from an external source</div>
  <button>My button</button>
  <a href="#">My anchor</a>
`;

//${unsafeHTML(externalTemplate)}

const onInit = () => {
    document.body.addEventListener('inter-app-data', function (e) { 
        console.log(e.detail)
     }, false);

     document.body.addEventListener('angularjs-ready', function (e) { 
        
        //
        render(appTemplate({
            config: 'foo'
        }), document.getElementById('lithtml-app-builtin'));
     }, false);
}

// This is a lit-html template function. It returns a lit-html template.
const appTemplate = () => html`<section>       
    <x-should-update></x-should-update>
    ${styles}
    </section>`;

onInit();

render(appTemplate({
    config: 'foo'
}), document.getElementById('lithtml-app-separate'));


