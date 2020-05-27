import { html, define } from "hybrids";
import style from "./form-suscribe-style";
import { registerApi } from "../api";
import "./sucessful-register";
import "./spinner-loader";

const validateEmail = (host, event) => {
  const value = event.target.value;
  // eslint-disable-next-line
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (emailRegex.test(value)) {
    host.invalidEmail = false;
    host.disabled = false;
  } else {
    host.disabled = true;
    host.invalidEmail = value ? true : false;
  }
};

const onSubmit = async (host, event) => {
  host.loading = true;
  event.preventDefault();
  const email = event.target.value;
  console.log(email);

  try {
    const { data } = await registerApi();
    if (data && data.id) host.sucess = true;
    host.loading = false;
  } catch (error) {
    host.loading = false;
    console.error(error);
  }
};

const render = ({ disabled, invalidEmail, sucess, loading }) => {
  const spinner = html` <spinner-loader></spinner-loader> `;

  const sucessRegister = html` <sucessful-register></sucessful-register> `;

  const formContent = html`
    ${style}
    <h1>Suscríbete</h1>
    <p>
      Para recibir notificaciones sobre nuevos videos, retos y tutoriales
      suscríbete a nuestro newsletter.
    </p>
    <form onsubmit="${onSubmit}">
      <span>${invalidEmail && "El correo electrónico es incorrecto"}</span>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="correo electrónico"
        oninput="${validateEmail}"
      />
      <button class="${{ disabled }}" disabled="${disabled}">
        ${loading ? spinner : "suscribir"}
      </button>
    </form>
  `;

  return sucess ? sucessRegister : formContent;
};

const FormSuscribe = {
  disabled: true,
  invalidEmail: false,
  sucess: false,
  loading: false,
  render,
};

define("form-suscribe", FormSuscribe);
