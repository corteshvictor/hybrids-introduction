<h1 align="center">
  <img alt="hybrids - the web components" src="https://raw.githubusercontent.com/hybridsjs/hybrids/master/docs/assets/hybrids-full-logo.svg?sanitize=true" width="500" align="center">
  <br/>
</h1>

# ¿Qué es Hybrids?
Hybrids es una librería de interfaz de usuario para crear componentes web con un fuerte enfoque declarativo y funcional basado en objetos simples y funciones puras. Creada por Dominik Lubański en mayo de 2018.
La librería hybrids proporcina una forma simple y declarativa para crear elementos personalizados. 

### Competidores
Para entender en que posicion se encuentra, debemos saber quienes son sus competidores mas cercados o mas populares.

| React | Stencil | Polymer | Slim | Skatejs |
|     :---:      |      :---:      |     :---:      |     :---:      |     :---:      |
| <img alt="React" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="80" />  | <img alt="Stencil" src="https://s3.amazonaws.com/media-p.slid.es/uploads/249891/images/6369783/Screen_Shot_2019-07-18_at_6.59.32_AM.png" width="80" />  | <img alt="Polymer" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Polymer_Project_logo.png" width="80" /> | <img alt="Slim" src="https://avatars2.githubusercontent.com/u/39967650?s=200&v=4" width="80" />  | <img alt="Skatejs" src="https://avatars0.githubusercontent.com/u/7636121?s=280&v=4" width="80" /> |


### Concepto
Actualmente, de forma nativa, La única forma de crear un elemento personalizado es usar una clase, que extiende de HTMLElement y definirlo con Custom Elements API: [CustomElements.define()](https://developer.mozilla.org/es/docs/Web/API/CustomElementRegistry/define)

``` js
class MyElement extends HTMLElement {
  ...
}

customElements.define('my-element', MyElement);
```

Con Hybrids, usted define sus elementos personalizados con la función `define` de la librería, en lugar de utilizar las funciones integradas del navegador:

``` js
import { define, html } from 'hybrids';

const HelloWorld = {
  name: 'Mundo',
  render: ({ name }) => html`Hola ${name}!`;
};

define('hello-world', HelloWorld);
```

Es mucho mas legible y concisa que la versión vanilla

``` js
class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.name = 'Mundo';
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(document.createTextNode(this.name));
  }
}

customElements.define('hello-world', HelloWorld);
```

Entrando en detalle con el componente HelloWorld, importamos `define` y `html` de la librería hybrids.
```js
import { define, html } from 'hybrids';
```
- html: Es lo que envuelve o hace referencia a nuestras etiquetas propias de html, es decir, si tenemos un título y un parrafo en nuestro archivo html de esta forma:
``` html
<h1>Título</h1>
<p>Párrafo</p>
```
se puede utilizar `html` de hybrids para representar esas etiquetas de la siguiente manera:
```html
html`<h1>Título<h1>
<p>Párrafo</p>`
```
- define: como se mencionó anteriormente, `define` nos ayuda a definir los elementos personalizados o customElements que queremos crear o utilizar. Tiene algún parecido con el vue-custom-element del framework vue.js.

El objeto que vemos acontinuación, es el que contiene la estructura del componente web con sus propiedades y también define la interfaz con la que interactura el usuario.
```js
const HelloWorld = {
  name: 'Mundo',
  render: ({ name }) => html`Hola ${name}!`;
};
```
- Una de las funciones principales que debería tener tu componente es la propiedad `render` que es una función que te permite crear o renderizar tu elemento para visualizarlo.
- Lo que vemos como name, es la propiedad o el estado del componente.



### Uso
Puedes configurar webpack, rollup para empaquetar tu proyecto e instalando el paquete de hybrids.
```
npm i hybrids
```

Si se dirige a los navegadores modernos y no desea utilizar herramientas externas (como webpack, parcel, Rollup ), puede usar ES modules:

```js
<script type="module">
  // We can use "/src" here - browsers, which support modules also support ES2015
  import { html, define } from 'https://unpkg.com/hybrids@[PUT_VERSION_HERE:x.x.x]/src';
  ...
</script>
```

### Enlaces externos
- [Documentación oficial](https://hybrids.js.org/)
- [Hablando un poco sobre la librería](https://www.youtube.com/watch?v=8M9PLG4SFrU)
