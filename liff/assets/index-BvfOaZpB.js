import{x as m,I as f,J as s,G as $,y,z as x}from"./main-DAl8Fc_T.js";const p={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:i}){return t.length<=e+r?t:i==="end"?`${t.substring(0,e)}...`:i==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const r=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),i=this.hexToRgb(r),a=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),g=100-3*Number(a?.replace("px","")),d=`${g}% ${g}% at 65% 40%`,u=[];for(let c=0;c<5;c+=1){const h=this.tintColor(i,.15*c);u.push(`rgb(${h[0]}, ${h[1]}, ${h[2]})`)}return`
    --local-color-1: ${u[0]};
    --local-color-2: ${u[1]};
    --local-color-3: ${u[2]};
    --local-color-4: ${u[3]};
    --local-color-5: ${u[4]};
    --local-radial-circle: ${d}
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,i=e>>8&255,a=e&255;return[r,i,a]},tintColor(t,e){const[r,i,a]=t,l=Math.round(r+(255-r)*e),g=Math.round(i+(255-i)*e),d=Math.round(a+(255-a)*e);return[l,g,d]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)")?.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},b=m`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var n=function(t,e,r,i){var a=arguments.length,l=a<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,g;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(t,e,r,i);else for(var d=t.length-1;d>=0;d--)(g=t[d])&&(l=(a<3?g(l):a>3?g(e,r,l):g(e,r))||l);return a>3&&l&&Object.defineProperty(e,r,l),l};let o=class extends y{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&p.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&p.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&p.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&p.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&p.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&p.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&p.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&p.getSpacingStyles(this.margin,3)};
    `,x`<slot></slot>`}};o.styles=[f,b];n([s()],o.prototype,"flexDirection",void 0);n([s()],o.prototype,"flexWrap",void 0);n([s()],o.prototype,"flexBasis",void 0);n([s()],o.prototype,"flexGrow",void 0);n([s()],o.prototype,"flexShrink",void 0);n([s()],o.prototype,"alignItems",void 0);n([s()],o.prototype,"justifyContent",void 0);n([s()],o.prototype,"columnGap",void 0);n([s()],o.prototype,"rowGap",void 0);n([s()],o.prototype,"gap",void 0);n([s()],o.prototype,"padding",void 0);n([s()],o.prototype,"margin",void 0);o=n([$("wui-flex")],o);export{p as U};
