import{x as u,I as p,a0 as b,aq as f,J as l,G as h,y as v,z as w}from"./main-DAl8Fc_T.js";const g=u`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var n=function(s,o,e,r){var a=arguments.length,i=a<3?o:r===null?r=Object.getOwnPropertyDescriptor(o,e):r,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,o,e,r);else for(var c=s.length-1;c>=0;c--)(d=s[c])&&(i=(a<3?d(i):a>3?d(o,e,i):d(o,e))||i);return a>3&&i&&Object.defineProperty(o,e,i),i};let t=class extends v{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const o=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${o});
    --local-padding: var(${e});
`,w`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};t.styles=[p,b,f,g];n([l()],t.prototype,"size",void 0);n([l({type:Boolean})],t.prototype,"disabled",void 0);n([l()],t.prototype,"icon",void 0);n([l()],t.prototype,"iconColor",void 0);t=n([h("wui-icon-link")],t);
