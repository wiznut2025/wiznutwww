import{x as c,I as m,J as u,G as f,y as v,K as x,z as d}from"./main-DAl8Fc_T.js";import"./index-DyWFDADB.js";const w=c`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var a=function(s,i,r,o){var n=arguments.length,e=n<3?i:o===null?o=Object.getOwnPropertyDescriptor(i,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(s,i,r,o);else for(var p=s.length-1;p>=0;p--)(l=s[p])&&(e=(n<3?l(e):n>3?l(i,r,e):l(i,r))||e);return n>3&&e&&Object.defineProperty(i,r,e),e};let t=class extends v{constructor(){super(...arguments),this.disabled=!1}render(){return d`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="mdl"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${x(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?d`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};t.styles=[m,w];a([u()],t.prototype,"errorMessage",void 0);a([u({type:Boolean})],t.prototype,"disabled",void 0);a([u()],t.prototype,"value",void 0);a([u()],t.prototype,"tabIdx",void 0);t=a([f("wui-email-input")],t);
