import{af as $,ah as R,ai as _,x as f,I as y,J as O,G as b,y as w,K as j,z as l,F as m,a3 as c,a0 as P}from"./main-DAl8Fc_T.js";import{e as T,n as U}from"./ref-Cef3Gtsl.js";import"./index-BvfOaZpB.js";import{R as B}from"./ConstantsUtil-Dmg8YACJ.js";const u=$({isLegalCheckboxChecked:!1}),x={state:u,subscribe(r){return _(u,()=>r(u))},subscribeKey(r,e){return R(u,r,e)},setIsLegalCheckboxChecked(r){u.isLegalCheckboxChecked=r}},E=f`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var v=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(t=(i<3?s(t):i>3?s(e,n,t):s(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let h=class extends w{constructor(){super(...arguments),this.inputElementRef=T(),this.checked=void 0}render(){return l`
      <label>
        <input
          ${U(this.inputElementRef)}
          ?checked=${j(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("checkboxChange",{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};h.styles=[y,E];v([O({type:Boolean})],h.prototype,"checked",void 0);h=v([b("wui-checkbox")],h);const L=f`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var k=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(t=(i<3?s(t):i>3?s(e,n,t):s(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let p=class extends w{constructor(){super(),this.unsubscribe=[],this.checked=x.state.isLegalCheckboxChecked,this.unsubscribe.push(x.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=c.state,o=c.state.features?.legalCheckbox;return!e&&!n||!o?null:l`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=c.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=c.state;return e?l`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=c.state;return e?l`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){x.setIsLegalCheckboxChecked(!this.checked)}};p.styles=[L];k([m()],p.prototype,"checked",void 0);p=k([b("w3m-legal-checkbox")],p);const F=f`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;var W=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(t=(i<3?s(t):i>3?s(e,n,t):s(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let g=class extends w{render(){return l`
      <a
        data-testid="ux-branding-reown"
        href=${B}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};g.styles=[y,P,F];g=W([b("wui-ux-by-reown")],g);const D=f`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: var(--wui-spacing-m);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var C=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var a=r.length-1;a>=0;a--)(s=r[a])&&(t=(i<3?s(t):i>3?s(e,n,t):s(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let d=class extends w{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=c.state.remoteFeatures,this.unsubscribe.push(c.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=c.state,o=c.state.features?.legalCheckbox;return!e&&!n||o?l`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:l`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=c.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=c.state;return e?l`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=c.state;return e?l`<a href=${e}>Privacy Policy</a>`:null}reownBrandingTemplate(e=!1){return this.remoteFeatures?.reownBranding?e?l`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:l`<wui-ux-by-reown></wui-ux-by-reown>`:null}};d.styles=[D];C([m()],d.prototype,"remoteFeatures",void 0);d=C([b("w3m-legal-footer")],d);export{x as O};
