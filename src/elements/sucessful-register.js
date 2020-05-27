import { html, define } from "hybrids";

const style = html`
  <style>
    h1 {
      font-size: 3em;
    }
    p {
      padding: 0 10px;
      font-size: 1.4em;
    }
  </style>
`;

const Sucessful = {
  render: () => html`
    ${style}
    <h1>¡Registrado exitosamente!</h1>
    <p>Espera contenido muy pronto.</p>
  `,
};

define("sucessful-register", Sucessful);
