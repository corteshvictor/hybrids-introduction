import { html, define } from "hybrids";

const style = html`
  <style>
    .logo {
      border-radius: 50%;
      width: 120px;
    }
  </style>
`;

export const Logo = {
  render: () => html`
    ${style}
    <img
      class="logo"
      src="https://yt3.ggpht.com/a/AATXAJwhpaApGYKHqzj3WfrtRHD_1mn4jSOicO8AnQ=s288-c-k-c0xffffffff-no-rj-mo"
      alt="logo"
      class="logo"
    />
  `,
};

define("logo-header", Logo);
