import{x as p,I as d,J as f,G as x,y as g,z as u}from"./main-DAl8Fc_T.js";const h=p`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var c=function(o,e,r,n){var i=arguments.length,t=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,e,r,n);else for(var s=o.length-1;s>=0;s--)(a=o[s])&&(t=(i<3?a(t):i>3?a(e,r,t):a(e,r))||t);return i>3&&t&&Object.defineProperty(e,r,t),t};let l=class extends g{constructor(){super(...arguments),this.text=""}render(){return u`${this.template()}`}template(){return this.text?u`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};l.styles=[d,h];c([f()],l.prototype,"text",void 0);l=c([x("wui-separator")],l);
