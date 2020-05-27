import { html } from "hybrids";

const style = html`
  <style>
    h1 {
      font-size: 3em;
    }

    p {
      padding: 0 10px;
      font-size: 1.4em;
    }

    input[type="email"] {
      width: 100%;
      font-size: 1.2em;
      padding: 5px;
      margin: 5px 0;
    }

    span {
      color: red;
    }

    button {
      box-shadow: 0px 1px 0px 0px #f0f7fa;
      background-color: #019ad2;
      border-radius: 6px;
      border: 1px solid #057fd0;
      cursor: pointer;
      color: #ffffff;
      font-size: 1em;
      font-weight: bold;
      padding: 10px;
      width: 104%;
    }

    button.disabled {
      background-color: #c3c3c3;
      border: 1px solid #636363;
      color: #636363;
      cursor: not-allowed;
    }
  </style>
`;

export default style;
