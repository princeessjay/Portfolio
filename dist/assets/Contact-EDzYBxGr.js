import{P as f,c as y,r as S,a as _e,j as l,F as Ie,d as Re,e as Te,b as P}from"./index-DyPimCT9.js";function H(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?H(Object(r),!0).forEach(function(n){le(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function F(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(e){return typeof e}:F=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}function le(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Fe(t,e){return ke(t)||De(t,e)||Le(t,e)||Me()}function ke(t){if(Array.isArray(t))return t}function De(t,e){var r=t&&(typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"]);if(r!=null){var n=[],a=!0,o=!1,c,u;try{for(r=r.call(t);!(a=(c=r.next()).done)&&(n.push(c.value),!(e&&n.length===e));a=!0);}catch(i){o=!0,u=i}finally{try{!a&&r.return!=null&&r.return()}finally{if(o)throw u}}return n}}function Le(t,e){if(t){if(typeof t=="string")return ee(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(t,e)}}function ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Me(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ue=function(e){var r=y.useRef(e);return y.useEffect(function(){r.current=e},[e]),r.current},M=function(e){return e!==null&&F(e)==="object"},te="[object Object]",$e=function t(e,r){if(!M(e)||!M(r))return e===r;var n=Array.isArray(e),a=Array.isArray(r);if(n!==a)return!1;var o=Object.prototype.toString.call(e)===te,c=Object.prototype.toString.call(r)===te;if(o!==c)return!1;if(!o&&!n)return e===r;var u=Object.keys(e),i=Object.keys(r);if(u.length!==i.length)return!1;for(var d={},p=0;p<u.length;p+=1)d[u[p]]=!0;for(var s=0;s<i.length;s+=1)d[i[s]]=!0;var v=Object.keys(d);if(v.length!==u.length)return!1;var C=e,j=r,x=function(_){return t(C[_],j[_])};return v.every(x)},Be=function(e,r,n){return M(e)?Object.keys(e).reduce(function(a,o){var c=!M(r)||!$e(e[o],r[o]);return n.includes(o)?(c&&console.warn("Unsupported prop change: options.".concat(o," is not a mutable property.")),a):c?X(X({},a||{}),{},le({},o,e[o])):a},null):null},ce=y.createContext(null);ce.displayName="ElementsContext";var Ye=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e},ue=y.createContext(null);ue.displayName="CartElementContext";var We=function(e,r){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(r," in an <Elements> provider."));return e};f.any,f.object;var re=function(e){var r=y.useContext(ce);return Ye(r,e)},ne=function(e){var r=y.useContext(ue);return We(r,e)};f.func.isRequired;var b=function(e,r,n){var a=!!n,o=y.useRef(n);y.useEffect(function(){o.current=n},[n]),y.useEffect(function(){if(!a||!e)return function(){};var c=function(){o.current&&o.current.apply(o,arguments)};return e.on(r,c),function(){e.off(r,c)}},[a,r,e,o])},ze=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},m=function(e,r){var n="".concat(ze(e),"Element"),a=function(i){var d=i.id,p=i.className,s=i.options,v=s===void 0?{}:s,C=i.onBlur,j=i.onFocus,x=i.onReady,A=i.onChange,_=i.onEscape,ye=i.onClick,ve=i.onLoadError,ge=i.onLoaderStart,Ee=i.onNetworksChange,U=i.onCheckout,be=i.onLineItemClick,xe=i.onConfirm,Ce=i.onCancel,Se=i.onShippingAddressChange,we=i.onShippingRateChange,je=re("mounts <".concat(n,">")),$=je.elements,Oe=y.useState(null),G=Fe(Oe,2),g=G[0],Ne=G[1],O=y.useRef(null),B=y.useRef(null),V=ne("mounts <".concat(n,">")),Y=V.setCart,W=V.setCartState;b(g,"blur",C),b(g,"focus",j),b(g,"escape",_),b(g,"click",ye),b(g,"loaderror",ve),b(g,"loaderstart",ge),b(g,"networkschange",Ee),b(g,"lineitemclick",be),b(g,"confirm",xe),b(g,"cancel",Ce),b(g,"shippingaddresschange",Se),b(g,"shippingratechange",we);var I;e==="cart"?I=function(Z){W(Z),x&&x(Z)}:x&&(e==="payButton"?I=x:I=function(){x(g)}),b(g,"ready",I);var Pe=e==="cart"?function(E){W(E),A&&A(E)}:A;b(g,"change",Pe);var Ae=e==="cart"?function(E){W(E),U&&U(E)}:U;b(g,"checkout",Ae),y.useLayoutEffect(function(){if(O.current===null&&$&&B.current!==null){var E=$.create(e,v);e==="cart"&&Y&&Y(E),O.current=E,Ne(E),E.mount(B.current)}},[$,v,Y]);var Q=Ue(v);return y.useEffect(function(){if(O.current){var E=Be(v,Q,["paymentRequest"]);E&&O.current.update(E)}},[v,Q]),y.useLayoutEffect(function(){return function(){O.current&&(O.current.destroy(),O.current=null)}},[]),y.createElement("div",{id:d,className:p,ref:B})},o=function(i){re("mounts <".concat(n,">")),ne("mounts <".concat(n,">"));var d=i.id,p=i.className;return y.createElement("div",{id:d,className:p})},c=r?o:a;return c.propTypes={id:f.string,className:f.string,onChange:f.func,onBlur:f.func,onFocus:f.func,onReady:f.func,onEscape:f.func,onClick:f.func,onLoadError:f.func,onLoaderStart:f.func,onNetworksChange:f.func,onCheckout:f.func,onLineItemClick:f.func,onConfirm:f.func,onCancel:f.func,onShippingAddressChange:f.func,onShippingRateChange:f.func,options:f.object},c.displayName=n,c.__elementType=e,c},h=typeof window>"u";m("auBankAccount",h);var Ke=m("card",h);m("cardNumber",h);m("cardExpiry",h);m("cardCvc",h);m("fpxBank",h);m("iban",h);m("idealBank",h);m("p24Bank",h);m("epsBank",h);m("payment",h);m("payButton",h);m("paymentRequestButton",h);m("linkAuthentication",h);m("address",h);m("shippingAddress",h);m("cart",h);m("paymentMethodMessaging",h);m("affirmMessage",h);m("afterpayClearpayMessage",h);var J=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,Je=Object.getOwnPropertyNames,Ge=Object.prototype.hasOwnProperty,Ve=(t,e)=>{for(var r in e)J(t,r,{get:e[r],enumerable:!0})},Qe=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Je(e))!Ge.call(t,a)&&a!==r&&J(t,a,{get:()=>e[a],enumerable:!(n=qe(e,a))||n.enumerable});return t},Ze=t=>Qe(J({},"__esModule",{value:!0}),t),ae=(t,e,r)=>new Promise((n,a)=>{var o=i=>{try{u(r.next(i))}catch(d){a(d)}},c=i=>{try{u(r.throw(i))}catch(d){a(d)}},u=i=>i.done?n(i.value):Promise.resolve(i.value).then(o,c);u((r=r.apply(t,e)).next())}),de={};Ve(de,{SubmissionError:()=>N,appendExtraData:()=>k,createClient:()=>fe,getDefaultClient:()=>gt,isSubmissionError:()=>st});var K=Ze(de),w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",He=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function Xe(t){t=String(t);for(var e,r,n,a,o="",c=0,u=t.length%3;c<t.length;){if((r=t.charCodeAt(c++))>255||(n=t.charCodeAt(c++))>255||(a=t.charCodeAt(c++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");e=r<<16|n<<8|a,o+=w.charAt(e>>18&63)+w.charAt(e>>12&63)+w.charAt(e>>6&63)+w.charAt(e&63)}return u?o.slice(0,u-3)+"===".substring(u):o}function et(t){if(t=String(t).replace(/[\t\n\f\r ]+/g,""),!He.test(t))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");t+="==".slice(2-(t.length&3));for(var e,r="",n,a,o=0;o<t.length;)e=w.indexOf(t.charAt(o++))<<18|w.indexOf(t.charAt(o++))<<12|(n=w.indexOf(t.charAt(o++)))<<6|(a=w.indexOf(t.charAt(o++))),r+=n===64?String.fromCharCode(e>>16&255):a===64?String.fromCharCode(e>>16&255,e>>8&255):String.fromCharCode(e>>16&255,e>>8&255,e&255);return r}var tt=()=>navigator.webdriver||!!document.documentElement.getAttribute(et("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,rt=class{constructor(){this.loadedAt=Date.now(),this.webdriver=tt()}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},nt=class{constructor(t){this.kind="success",this.next=t.next}};function at(t){return"next"in t&&typeof t.next=="string"}var ot=class{constructor(t,e){this.paymentIntentClientSecret=t,this.resubmitKey=e,this.kind="stripePluginPending"}};function it(t){if("stripe"in t&&"resubmitKey"in t&&typeof t.resubmitKey=="string"){let{stripe:e}=t;return typeof e=="object"&&e!=null&&"paymentIntentClientSecret"in e&&typeof e.paymentIntentClientSecret=="string"}return!1}function st(t){return t.kind==="error"}var N=class{constructor(...t){this.kind="error",this.formErrors=[],this.fieldErrors=new Map;var e;for(let r of t){if(!r.field){this.formErrors.push({code:r.code&&lt(r.code)?r.code:"UNSPECIFIED",message:r.message});continue}let n=(e=this.fieldErrors.get(r.field))!=null?e:[];n.push({code:r.code&&ut(r.code)?r.code:"UNSPECIFIED",message:r.message}),this.fieldErrors.set(r.field,n)}}getFormErrors(){return[...this.formErrors]}getFieldErrors(t){var e;return(e=this.fieldErrors.get(t))!=null?e:[]}getAllFieldErrors(){return Array.from(this.fieldErrors)}};function lt(t){return t in ct}var ct={BLOCKED:"BLOCKED",EMPTY:"EMPTY",FILES_TOO_BIG:"FILES_TOO_BIG",FORM_NOT_FOUND:"FORM_NOT_FOUND",INACTIVE:"INACTIVE",NO_FILE_UPLOADS:"NO_FILE_UPLOADS",PROJECT_NOT_FOUND:"PROJECT_NOT_FOUND",TOO_MANY_FILES:"TOO_MANY_FILES"};function ut(t){return t in dt}var dt={REQUIRED_FIELD_EMPTY:"REQUIRED_FIELD_EMPTY",REQUIRED_FIELD_MISSING:"REQUIRED_FIELD_MISSING",STRIPE_CLIENT_ERROR:"STRIPE_CLIENT_ERROR",STRIPE_SCA_ERROR:"STRIPE_SCA_ERROR",TYPE_EMAIL:"TYPE_EMAIL",TYPE_NUMERIC:"TYPE_NUMERIC",TYPE_TEXT:"TYPE_TEXT"};function ft(t){return"errors"in t&&Array.isArray(t.errors)&&t.errors.every(e=>typeof e.message=="string")||"error"in t&&typeof t.error=="string"}var pt="3.0.1",mt=t=>Xe(JSON.stringify(t)),ht=t=>{let e=`@formspree/core@${pt}`;return t?`${t} ${e}`:e};function k(t,e,r){t instanceof FormData?t.append(e,r):t[e]=r}function yt(t){return t!==null&&typeof t=="object"}var vt=class{constructor(t={}){this.project=t.project,this.stripe=t.stripe,typeof window<"u"&&(this.session=new rt)}submitForm(t,e){return ae(this,arguments,function*(r,n,a={}){let o=a.endpoint||"https://formspree.io",c=this.project?`${o}/p/${this.project}/f/${r}`:`${o}/f/${r}`,u={Accept:"application/json","Formspree-Client":ht(a.clientName)};this.session&&(u["Formspree-Session-Data"]=mt(this.session.data())),n instanceof FormData||(u["Content-Type"]="application/json");function i(p){return ae(this,null,function*(){try{let s=yield(yield fetch(c,{method:"POST",mode:"cors",body:p instanceof FormData?p:JSON.stringify(p),headers:u})).json();if(yt(s)){if(ft(s))return Array.isArray(s.errors)?new N(...s.errors):new N({message:s.error});if(it(s))return new ot(s.stripe.paymentIntentClientSecret,s.resubmitKey);if(at(s))return new nt({next:s.next})}return new N({message:"Unexpected response format"})}catch(s){let v=s instanceof Error?s.message:`Unknown error while posting to Formspree: ${JSON.stringify(s)}`;return new N({message:v})}})}if(this.stripe&&a.createPaymentMethod){let p=yield a.createPaymentMethod();if(p.error)return new N({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Error creating payment method"});k(n,"paymentMethod",p.paymentMethod.id);let s=yield i(n);if(s.kind==="error")return s;if(s.kind==="stripePluginPending"){let v=yield this.stripe.handleCardAction(s.paymentIntentClientSecret);if(v.error)return new N({code:"STRIPE_CLIENT_ERROR",field:"paymentMethod",message:"Stripe SCA error"});n instanceof FormData?n.delete("paymentMethod"):delete n.paymentMethod,k(n,"paymentIntent",v.paymentIntent.id),k(n,"resubmitKey",s.resubmitKey);let C=yield i(n);return oe(C),C}return s}let d=yield i(n);return oe(d),d})}};function oe(t){let{kind:e}=t;if(e!=="success"&&e!=="error")throw new Error(`Unexpected submission result (kind: ${e})`)}var fe=t=>new vt(t),gt=()=>(z||(z=fe()),z),z,pe={};Object.defineProperty(pe,"__esModule",{value:!0});function D(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(e){return typeof e}:D=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(t)}var me="https://js.stripe.com/v3",Et=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,ie="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",bt=function(){for(var e=document.querySelectorAll('script[src^="'.concat(me,'"]')),r=0;r<e.length;r++){var n=e[r];if(Et.test(n.src))return n}return null},xt=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(me).concat(r);var a=document.head||document.body;if(!a)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return a.appendChild(n),n},Ct=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:r})},R=null,St=function(e){return R!==null||(R=new Promise(function(r,n){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&e&&console.warn(ie),window.Stripe){r(window.Stripe);return}try{var a=bt();a&&e?console.warn(ie):a||(a=xt(e)),a.addEventListener("load",function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}),a.addEventListener("error",function(){n(new Error("Failed to load Stripe.js"))})}catch(o){n(o);return}})),R},wt=function(e,r,n){if(e===null)return null;var a=e.apply(void 0,r);return Ct(a,n),a},se=function(e){var r=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||D(e)!=="object")throw new Error(r);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(r)},L,q=!1,he=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];q=!0;var a=Date.now();return St(L).then(function(o){return wt(o,r,a)})};he.setLoadParameters=function(t){if(q&&L){var e=se(t),r=Object.keys(e),n=r.reduce(function(a,o){var c;return a&&t[o]===((c=L)===null||c===void 0?void 0:c[o])},!0);if(n)return}if(q)throw new Error("You cannot change load parameters after calling loadStripe");L=se(t)};pe.loadStripe=he;function T(t){let{prefix:e,field:r,errors:n,...a}=t;if(n==null)return null;let o=r?n.getFieldErrors(r):n.getFormErrors();return o.length===0?null:y.createElement("div",{...a},e?`${e} `:null,o.map(c=>c.message).join(", "))}var jt=y.createContext(null);function Ot(){return S.useContext(jt)??{client:K.getDefaultClient()}}var Nt="2.5.1",Pt=`@formspree/react@${Nt}`;function At(t,e={}){let r=Ot(),{client:n=r.client,extraData:a,onError:o,onSuccess:c,origin:u}=e,{stripe:i}=n,d=S.useMemo(()=>i==null?void 0:i.elements().getElement(Ke),[i]);return async function(p){let s=_t(p)?It(p):p;if(typeof a=="object")for(let[C,j]of Object.entries(a)){let x;typeof j=="function"?x=await j():x=j,x!==void 0&&K.appendExtraData(s,C,x)}let v=await n.submitForm(t,s,{endpoint:u,clientName:Pt,createPaymentMethod:i&&d?()=>i.createPaymentMethod({type:"card",card:d,billing_details:Rt(s)}):void 0});K.isSubmissionError(v)?o==null||o(v):c==null||c(v)}}function _t(t){return"preventDefault"in t&&typeof t.preventDefault=="function"}function It(t){t.preventDefault();let e=t.currentTarget;if(e.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(e)}function Rt(t){let e={address:Tt(t)};for(let r of["name","email","phone"]){let n=t instanceof FormData?t.get(r):t[r];n&&typeof n=="string"&&(e[r]=n)}return e}function Tt(t){let e={};for(let[r,n]of[["address_line1","line1"],["address_line2","line2"],["address_city","city"],["address_country","country"],["address_state","state"],["address_postal_code","postal_code"]]){let a=t instanceof FormData?t.get(r):t[r];a&&typeof a=="string"&&(e[n]=a)}return e}function Ft(t,e={}){let[r,n]=S.useState(null),[a,o]=S.useState(null),[c,u]=S.useState(!1),[i,d]=S.useState(!1),p=At(t,{client:e.client,extraData:e.data,onError(s){n(s),u(!1),d(!1)},onSuccess(s){n(null),o(s),u(!1),d(!0)},origin:e.endpoint});return[{errors:r,result:a,submitting:c,succeeded:i},async function(s){u(!0),await p(s)},function(){n(null),o(null),u(!1),d(!1)}]}const Dt=()=>{const t=S.useRef();S.useEffect(()=>{_e(t)},[]);const[e,r]=Ft("myzgzwgb");return e.succeeded?l.jsx("p",{children:"Thanks for your message!"}):l.jsx(l.Fragment,{children:l.jsxs("section",{ref:t,id:"contact",className:"w-full mt-10 md:mt-20",children:[l.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold pl-2",children:"CONTACT"}),l.jsx("h2",{className:"text-sm md:text-lg lg:text-xl my-5 text-center text-blue-500",children:"I Want to Hear from You"}),l.jsxs("div",{className:"w-full md:w-4/5 mx-auto p-5 flex flex-col md:flex-row justify-between",children:[l.jsxs("div",{className:"w-full md:w-1/2",children:[l.jsxs("div",{className:"flex items-center mb-5",children:[l.jsx(Ie,{className:"text-5xl md:text-6xl p-4 rounded-full bg-blue-500"}),l.jsxs("div",{className:"ml-5",children:[l.jsx("span",{children:"Address"}),l.jsx("br",{}),l.jsx("span",{className:"text-gray-500 hover:text-black transition-colors",children:"Hardoi, Uttar Pradesh"})]})]}),l.jsxs("div",{className:"flex items-center mb-5",children:[l.jsx(Re,{className:"text-5xl md:text-6xl p-4 rounded-full bg-blue-500 "}),l.jsxs("div",{className:"ml-5",children:[l.jsx("span",{children:"Email"}),l.jsx("br",{}),l.jsx("span",{className:"text-gray-500 hover:text-black transition-colors",children:"vikaskashyaprock@gmail.com"})]})]}),l.jsxs("div",{className:"flex items-center mb-5",children:[l.jsx(Te,{className:"text-5xl md:text-6xl p-4 rounded-full bg-blue-500"}),l.jsxs("div",{className:"ml-5",children:[l.jsx("span",{children:"Phone"}),l.jsx("br",{}),l.jsx("span",{className:"text-gray-500 hover:text-black transition-colors",children:"+91 8542050782"})]})]})]}),l.jsx("div",{className:"w-full md:w-1/2 mt-5 md:mt-0",children:l.jsxs("form",{onSubmit:r,className:"flex flex-wrap gap-5",children:[l.jsx(P.Input,{size:"lg",color:"white",type:"text",id:"name",name:"name",label:"Your Name",variant:"outlined",required:!0}),l.jsx(T,{prefix:"Name",field:"name",errors:e.errors}),l.jsx(P.Input,{size:"lg",color:"white",type:"email",id:"email",name:"email",label:"Your Email",variant:"outlined",required:!0}),l.jsx(T,{prefix:"Email",field:"email",errors:e.errors}),l.jsx(P.Input,{size:"lg",color:"white",type:"number",id:"phone",name:"phone",label:"Your Phone",variant:"outlined",required:!0}),l.jsx(T,{prefix:"Phone",field:"phone",errors:e.errors}),l.jsx(P.Textarea,{label:"Message...",size:"lg",id:"message",name:"message",required:!0}),l.jsx(T,{prefix:"Message",field:"message",errors:e.errors}),l.jsx(P.Button,{type:"submit",className:"px-6 lg:px-8 py-3 lg:py-4 rounded-md bg-gradient-to-r from-blue-500 to-indigo-900 hover:scale-105",disabled:e.submitting,children:"Submit Now"})]})})]})]})})};export{Dt as default};
