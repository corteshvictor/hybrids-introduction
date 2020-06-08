<h1  align="center">
<img  alt="hybrids - the web components"  src="https://raw.githubusercontent.com/hybridsjs/hybrids/master/docs/assets/hybrids-full-logo.svg?sanitize=true"  width="500"  align="center">
<br/>
</h1>

# ¿Qué es Hybrids?

Hybrids es una librería de interfaz de usuario para crear componentes web con un fuerte enfoque declarativo y funcional basado en objetos simples y funciones puras. Creada por Dominik Lubański en mayo de 2018. La librería hybrids proporciona una forma simple y declarativa para crear elementos personalizados.

  

## Competidores

Para entender en qué posición se encuentra esta librería, debemos saber quienes son sus competidores más cercados o mas populares.

| React | Stencil | Polymer | Slim | Skatejs |
| :---: | :---: | :---: | :---: | :---: |
| <img  alt="React"  src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"  width="80" /> | <img  alt="Stencil"  src="https://s3.amazonaws.com/media-p.slid.es/uploads/249891/images/6369783/Screen_Shot_2019-07-18_at_6.59.32_AM.png"  width="80" /> | <img  alt="Polymer"  src="https://upload.wikimedia.org/wikipedia/commons/6/69/Polymer_Project_logo.png"  width="80" /> | <img  alt="Slim"  src="https://avatars2.githubusercontent.com/u/39967650?s=200&v=4"  width="80" /> | <img  alt="Skatejs"  src="https://avatars0.githubusercontent.com/u/7636121?s=280&v=4"  width="80" /> |

## Concepto

Actualmente, de forma nativa, La única forma de crear un elemento personalizado es usar una clase, que extiende de HTMLElement y definirlo con Custom Elements API: [CustomElements.define()](https://developer.mozilla.org/es/docs/Web/API/CustomElementRegistry/define)

```js
class MyElement extends HTMLElement {
	...
}

customElements.define('my-element', MyElement);
```

Con Hybrids, usted define sus elementos personalizados con la función **define** de la librería, en lugar de utilizar las funciones integradas del navegador:

```js
import { define, html } from  'hybrids';

const HelloWorld  = {
	name: 'Mundo',
	render: ({ name }) => html`Hola ${name}!`;
};

define('hello-world', HelloWorld);
```
Es mucho mas legible y concisa que la versión vanilla
```js
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

**Componente HelloWorld** 

Entrando en detalle, importamos `define` y `html` de la librería hybrids.
```js
import { define, html } from 'hybrids';
```
- **html:** Es lo que envuelve o hace referencia a nuestras etiquetas propias de html, es decir, si tenemos un título y un párrafo en nuestro archivo html de esta forma:
	``` html
	<h1>Título</h1>
	<p>Párrafo</p>
	```
	se puede utilizar `html` de hybrids para representar esas etiquetas de la siguiente manera:
	```html
	html`<h1>Título<h1>
	<p>Párrafo</p>`
	```
	
- **define:** como se mencionó anteriormente, `define` nos ayuda a definir los elementos personalizados o customElements que queremos crear o utilizar. Tiene algún parecido con el vue-custom-element del framework vue.js.

El objeto que vemos a continuación, es el que contiene la estructura del componente web con sus propiedades y también determina la interfaz con la que interactúa el usuario.

```js
const HelloWorld = {
	name: 'Mundo',
	render: ({ name }) => html`Hola ${name}!`;
};
```

- **render:** Una de las funciones principales que debería tener tu componente es la propiedad `render` que es una función que te permite crear o renderizar tu elemento para visualizarlo.

- **name (property):** Es la propiedad o el estado del componente, este nombre lo puedes definir como desees, no necesariamente se debe llamar `name`

**NOTA:** Las propiedades o estados utilizan la función de transformación (transform) para garantizar el tipo estricto del valor establecido por propiedad o atributo. Es decir, cuando agregas un valor por defecto, como el caso de `name: 'Mundo'`, estas definiendo que el valor es una cadena o string, por ende, el transform congela el tipo de valor para evitar la mutación de sus propiedades. Además, defaultValue se comparte entre instancias de elementos personalizados, por lo que ninguno de ellos debería cambiarlo. Para omitir la transformación, defaultValue debe establecerse en undefined.

*Transform Types*
- string -> String(value)
- number -> Number(value)
- boolean -> Boolean(value)
- function -> defaultValue(value)
- object -> Object.freeze(value)
- undefined -> value

## Uso
Puedes configurar webpack, rollup para empaquetar tu proyecto e instalando el paquete de hybrids.
```
npm i hybrids
```
Si se dirige a los navegadores modernos y no desea utilizar herramientas externas (como webpack, parcel, Rollup ), puede usar ES modules:
```js
<script  type="module">
// We can use "/src" here - browsers, which support modules also support ES2015
import {  html, define  } from 'https://unpkg.com/hybrids@[PUT_VERSION_HERE:x.x.x]/src';
...
</script>
```
## Ventajas y Desventajas
**Ventajas**
- Definición simple: objetos simples y funciones puras, nada de clase o el contexto del `this`
- Recálculo rápido: caché inteligente integrada y mecanismos de detección de cambios que permite activar la función de actualización `render` solo cuando cambia una de las propiedades del componente.
- Se puede integrar de forma fácil con otras librerías como Redux y React.

**Desventajas**
- Poca documentación: la pagina oficial tiene la documentación básica para entender la librería pero no profundiza.
- Baja comunidad: La comunidad es muy poca, casi nula, la que utiliza esta librería, por ende, no existe tanta documentación, artículos, ejemplos, para apoyarte sobre ciertos conceptos que quieras aclarar y la documentación no lo brinda.


## Conclusión
Me parece que es una librería que tiene mucho potencial, su curva de aprendizaje no es baja pero tampoco tan compleja, pero sí dificulta buscar información. Para una persona que apenas esta iniciando en el desarrollo de componentes web, la documentación es simple comparada con React, Vue y Svelte, y como no tiene una comunidad grande se dificulta su aprendizaje. Cabe aclarar que, prácticamente, el único que la mantiene es el mismo creador hasta el momento.

Es posible utilizar Hybrids en un proyecto de producción, pero en lo personal, no lo utilizaría por el momento, para proyectos que impliquen varios desarrolladores. De pronto para un proyecto pequeño personal, sí la tendría presente pero en un proyecto empresarial no. 

¿Por qué estas aprendiendo sobre la librería si no la piensas utilizar?, como desarrollador web, pienso que es bueno conocer que existen otras librerías y framework que te ayudan a solucionar o construir proyectos web, en algunos casos, dependiendo del proyecto tu decides que utilizar y entre mas conocimiento en general tengas, puedes decidir cual te conviene más.

Por obtener conocimientos generales de varias herramientas no te va a disminuir el rendimiento por la cual te has especializado, puede que en un futuro te encuentres con un proyecto echo en esta librería y al menos cuentas con las bases de su mecanismo para utilizarla.



## Enlaces externos
comparto el enlace oficial de la librería hybrids por si quieres consultar y tener mayor información. También comparto un enlace donde coderos propuso un reto utilizando esta librería en la que participe con otras personas explicando el código de la solución y dando nuestros puntos de vista. 

Doy gracias a Coderos, especialmente a Christopher Díaz por presentar el reto, hacer que indagará un poco sobre ella y así poder aprender de forma muy general su base y utilización para crear componentes web con ella.

-  [Documentación oficial](https://hybrids.js.org/)
-  [Hablando sobre hybrids - Coderos](https://www.youtube.com/watch?v=8M9PLG4SFrU)
