import{x as u,I as b,a0 as p,J as d,G as f,y as v,K as x,z as g}from"./main-DAl8Fc_T.js";const h=u`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`;var l=function(n,o,r,s){var a=arguments.length,t=a<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,r):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,o,r,s);else for(var c=n.length-1;c>=0;c--)(i=n[c])&&(t=(a<3?i(t):a>3?i(o,r,t):i(o,r))||t);return a>3&&t&&Object.defineProperty(o,r,t),t};let e=class extends v{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return g`
      <button ?disabled=${this.disabled} tabindex=${x(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};e.styles=[b,p,h];l([d()],e.prototype,"tabIdx",void 0);l([d({type:Boolean})],e.prototype,"disabled",void 0);l([d()],e.prototype,"color",void 0);e=l([f("wui-link")],e);
