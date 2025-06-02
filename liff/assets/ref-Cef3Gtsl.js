import{aw as o,ax as n,ay as h}from"./main-DAl8Fc_T.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=()=>new a;class a{}const e=new WeakMap,r=o(class extends n{render(t){return h}update(t,[i]){const s=i!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=i,this.ht=t.options?.host,this.rt(this.ct=t.element)),h}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const i=this.ht??globalThis;let s=e.get(i);s===void 0&&(s=new WeakMap,e.set(i,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?e.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{l as e,r as n};
