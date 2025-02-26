"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6983],{75739:(e,t,i)=>{i.d(t,{n:()=>n});function n(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},66983:(e,t,i)=>{i.d(t,{PaperWalletConnector:()=>d});var n=i(16454),r=i(69385),s=i(8402),o=i(75739),a=i(19337),l=i(82495);i(74486);class d extends l.C{constructor(e){super(),(0,n._)(this,"id",a.w.paper),(0,n._)(this,"name","Paper Wallet"),(0,n._)(this,"ready",!0),(0,n._)(this,"user",null),(0,n._)(this,"onAccountsChanged",async e=>{0===e.length?await this.onDisconnect():this.emit("change",{account:s.getAddress(e[0])})}),(0,n._)(this,"onChainChanged",e=>{let t=(0,o.n)(e),i=-1===this.options.chains.findIndex(e=>e.chainId===t);this.emit("change",{chain:{id:t,unsupported:i}})}),(0,n._)(this,"onDisconnect",async()=>{this.emit("disconnect")}),this.options=e}getPaperSDK(){return this.paper||(this.paper=new Promise(async(e,t)=>{let n=this.options.advancedOptions?.recoveryShareManagement;try{let{PaperEmbeddedWalletSdk:t}=await Promise.resolve().then(i.bind(i,69385)),s={AWS_MANAGED:r.Q.AWS_MANAGED,USER_MANAGED:r.Q.USER_MANAGED},o=n?s[n]:void 0;e(new t({advancedOptions:{recoveryShareManagement:o},clientId:this.options.clientId,chain:"Ethereum",styles:this.options.styles,onAuthSuccess:this.options.onAuthSuccess}))}catch(e){t(e)}})),this.paper}async connect(e){let t=await this.getPaperSDK();if(!t)throw Error("Paper SDK not initialized");let i=await t.getUser();switch(i.status){case r._O.LOGGED_OUT:{let i;if(e?.googleLogin){let n=e.googleLogin;i=await t.auth.loginWithGoogle("object"==typeof n?n:void 0)}else i=e?.email&&e?.otp?await t.auth.verifyPaperEmailLoginOtp({email:e.email,otp:e.otp,recoveryCode:e.recoveryCode}):e?.email?await t.auth.loginWithPaperEmailOtp({email:e.email}):await t.auth.loginWithPaperModal();this.user=i.user;break}case r._O.LOGGED_IN_WALLET_INITIALIZED:"object"==typeof e?.googleLogin&&e.googleLogin.closeOpenedWindow&&e.googleLogin.openedWindow&&e.googleLogin.closeOpenedWindow(e.googleLogin.openedWindow),this.user=i}if(!this.user)throw Error("Error connecting User");return e?.chainId&&this.switchChain(e.chainId),this.setupListeners(),this.getAddress()}async disconnect(){let e=await this.paper;await e?.auth.logout(),this._signer=void 0,this.user=null}async getAddress(){return(await this.getSigner()).getAddress()}async isConnected(){try{return!!await this.getAddress()}catch(e){return!1}}async getProvider(){let e=await this.getSigner();if(!e.provider)throw Error("Provider not found");return e.provider}async getSigner(){if(this._signer)return this._signer;if(!this.user){let e=await this.getPaperSDK(),t=await e.getUser();t.status===r._O.LOGGED_IN_WALLET_INITIALIZED&&(this.user=t)}let e=await this.user?.wallet.getEthersJsSigner({rpcEndpoint:this.options.chain.rpc[0]||""});if(!e)throw Error("Signer not found");return this._signer=e,e}async isAuthorized(){return!1}async switchChain(e){let t=this.options.chains.find(t=>t.chainId===e);if(!t)throw Error("Chain not configured");await this.user?.wallet.setChain({chain:"Ethereum"}),this._signer=await this.user?.wallet.getEthersJsSigner({rpcEndpoint:t.rpc[0]||""}),this.emit("change",{chain:{id:e,unsupported:!1}})}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}updateChains(e){this.options.chains=e}async getEmail(){if(await this.getProvider(),!this.user)throw Error("No user found, Paper Wallet is not connected");return this.user.authDetails.email}}},69385:(e,t,i)=>{i.d(t,{PaperEmbeddedWalletSdk:()=>q,Q:()=>L,_O:()=>A});var n=i(58425),r=i(92960),s=i(79099),o=i(39121),a=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,p=(e,t)=>{for(var i in t||(t={}))h.call(t,i)&&g(e,i,t[i]);if(c)for(var i of c(t))u.call(t,i)&&g(e,i,t[i]);return e},m=(e,t)=>l(e,d(t)),I=(e,t,i)=>new Promise((n,r)=>{var s=e=>{try{a(i.next(e))}catch(e){r(e)}},o=e=>{try{a(i.throw(e))}catch(e){r(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,o);a((i=i.apply(e,t)).next())}),v="/sdk/2022-08-12/embedded-wallet",y=e=>`paperEwsWalletUserId-${e}`,w=e=>`walletToken-${e}`,f=(e,t)=>`a-${e}-${t}`,L=(e=>(e.USER_MANAGED="USER_MANAGED",e.AWS_MANAGED="AWS_MANAGED",e))(L||{}),E=(e=>(e.PAPER_EMAIL_OTP="PaperEmailOTP",e.GOOGLE="Google",e.TWITTER="Twitter",e.COGNITO="Cognito",e.AUTH0="Auth0",e.CUSTOM_JWT="CustomJWT",e))(E||{}),A=(e=>(e.LOGGED_OUT="Logged Out",e.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",e))(A||{}),S=(e=>(e.LOGGED_OUT="Logged Out",e.LOGGED_IN_WALLET_UNINITIALIZED="Logged In, Wallet Uninitialized",e.LOGGED_IN_NEW_DEVICE="Logged In, New Device",e.LOGGED_IN_WALLET_INITIALIZED="Logged In, Wallet Initialized",e))(S||{}),W=new Map,_=class{constructor({clientId:e}){this.isSupported="undefined"!=typeof window&&!!window.localStorage,this.clientId=e}getItem(e){return I(this,null,function*(){var t;return this.isSupported?window.localStorage.getItem(e):null!=(t=W.get(e))?t:null})}setItem(e,t){return I(this,null,function*(){if(this.isSupported)return window.localStorage.setItem(e,t);W.set(e,t)})}removeItem(e){return I(this,null,function*(){let t=yield this.getItem(e);return!!this.isSupported&&!!t&&(window.localStorage.removeItem(e),!0)})}saveAuthCookie(e){return I(this,null,function*(){yield this.setItem(w(this.clientId),e)})}getAuthCookie(){return I(this,null,function*(){return this.getItem(w(this.clientId))})}removeAuthCookie(){return I(this,null,function*(){return this.removeItem(w(this.clientId))})}saveDeviceShare(e,t){return I(this,null,function*(){yield this.saveWalletUserId(t),yield this.setItem(f(this.clientId,t),e)})}getDeviceShare(){return I(this,null,function*(){let e=yield this.getWalletUserId();return e?this.getItem(f(this.clientId,e)):null})}removeDeviceShare(){return I(this,null,function*(){let e=yield this.getWalletUserId();return!!e&&this.removeItem(f(this.clientId,e))})}getWalletUserId(){return I(this,null,function*(){return this.getItem(y(this.clientId))})}saveWalletUserId(e){return I(this,null,function*(){yield this.setItem(y(this.clientId),e)})}removeWalletUserId(){return I(this,null,function*(){return this.removeItem(y(this.clientId))})}};function O(e){return new Promise(t=>{setTimeout(t,1e3*e)})}var D={height:"100%",width:"100%",border:"none",backgroundColor:"transparent",colorScheme:"light",position:"fixed",top:"0px",right:"0px",zIndex:"2147483646",display:"none"},M=new Map,C=class{constructor({link:e,iframeId:t,container:i=document.body,iframeStyles:n,onIframeInitialize:r}){this.POLLING_INTERVAL_SECONDS=1.4,this.POST_LOAD_BUFFER_SECONDS=1;let s=document.getElementById(t),o=new URL(e),a="1.2.5";if(!a)throw Error("Missing SDK_VERSION env var");if(o.searchParams.set("sdkVersion",a),!s||s.src!=o.href){if(!s){s=document.createElement("iframe");let e=p(p({},D),n);Object.assign(s.style,e),s.setAttribute("id",t),s.setAttribute("fetchpriority","high"),i.appendChild(s)}s.src=o.href,s.setAttribute("data-version",a),s.onload=this.onIframeLoadHandler(s,this.POST_LOAD_BUFFER_SECONDS,r)}this.iframe=s}onIframeLoadedInitVariables(){return I(this,null,function*(){return{}})}onIframeLoadHandler(e,t,i){return()=>I(this,null,function*(){yield new Promise((r,s)=>I(this,null,function*(){var o;let a=new MessageChannel;a.port1.onmessage=t=>{let{data:n}=t;return a.port1.close(),n.success?(M.set(e.src,!0),i&&i(),r(!0)):s(Error(n.error))},yield O(t),null==(o=null==e?void 0:e.contentWindow)||o.postMessage({eventType:"initIframe",data:yield this.onIframeLoadedInitVariables()},`${(0,n.mb)()}${v}`,[a.port2])}))})}call(e){return I(this,arguments,function*({procedureName:e,params:t,showIframe:i=!1,injectRecoveryCode:r={isInjectRecoveryCode:!1}}){for(;!M.get(this.iframe.src);)yield O(this.POLLING_INTERVAL_SECONDS);return i&&(this.iframe.style.display="block",yield O(.005)),new Promise((s,o)=>{var a;if(r.isInjectRecoveryCode){let e=t=>I(this,null,function*(){var i,s;if(t.origin!==(0,n.mb)()||"paper_getRecoveryCode"!==t.data.type||"string"!=typeof t.data.userWalletId)return;let o=yield null==(i=r.getRecoveryCode)?void 0:i.call(r,t.data.userWalletId);null==(s=this.iframe.contentWindow)||s.postMessage({type:"paper_getRecoveryCode_response",recoveryCode:o},(0,n.mb)()),window.removeEventListener("message",e)});window.addEventListener("message",e)}let l=new MessageChannel;l.port1.onmessage=e=>I(this,null,function*(){let{data:t}=e;l.port1.close(),i&&(yield O(.1),this.iframe.style.display="none"),t.success?s(t.data):o(Error(t.error))}),null==(a=this.iframe.contentWindow)||a.postMessage({eventType:e,data:t},`${(0,n.mb)()}${v}`,[l.port2])})})}destroy(){M.delete(this.iframe.src)}},N=class extends C{constructor({clientId:e,customizationOptions:t}){super({iframeId:P,link:function({clientId:e,path:t,queryParams:i}){var r;let s=new URL(t,(0,n.mb)());if(i)for(let e of Object.keys(i))s.searchParams.set(e,(null==(r=i[e])?void 0:r.toString())||"");return s.searchParams.set("clientId",e),s}({clientId:e,path:v,queryParams:t}).href,container:document.body}),this.clientId=e}onIframeLoadedInitVariables(){return I(this,null,function*(){let e=new _({clientId:this.clientId});return{authCookie:yield e.getAuthCookie(),deviceShareStored:yield e.getDeviceShare(),walletUserId:yield e.getWalletUserId(),clientId:this.clientId}})}},P="paper-embedded-wallet-iframe",T=class{constructor({querier:e,preLogin:t,postLogin:i,clientId:n}){this.LoginQuerier=e,this.preLogin=t,this.postLogin=i,this.clientId=n}sendPaperEmailLoginOtp(e){return I(this,arguments,function*({email:e,recoveryShareManagement:t}){yield this.preLogin();let{isNewUser:i,isNewDevice:n,recoveryShareManagement:r}=yield this.LoginQuerier.call({procedureName:"sendPaperEmailLoginOtp",params:{email:e,recoveryShareManagement:t}});return{isNewUser:i,isNewDevice:n,recoveryShareManagement:r}})}},G=class extends T{constructor(){super(...arguments),this.closeWindow=({isWindowOpenedByFn:e,win:t,closeOpenedWindow:i})=>{e?null==t||t.close():t&&i?i(t):t&&t.close()}}loginWithPaperModal(){return I(this,null,function*(){yield this.preLogin();let e=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(e)})}getGoogleLoginUrl(){return I(this,null,function*(){return yield this.LoginQuerier.call({procedureName:"getHeadlessGoogleLoginLink",params:void 0})})}loginWithGoogle(e){return I(this,null,function*(){yield this.preLogin();let t=null==e?void 0:e.openedWindow,i=!1;if(t||(t=window.open("","Login","width=350, height=500"),i=!0),!t)throw Error("Something went wrong opening pop-up");yield this.preLogin();let{loginLink:r}=yield this.getGoogleLoginUrl();t.location.href=r;let s=yield new Promise((r,s)=>{let o=window.setInterval(()=>I(this,null,function*(){t&&t.closed&&(clearInterval(o),window.removeEventListener("message",a),s(Error("User closed login window")))}),1e3),a=l=>I(this,null,function*(){if(l.origin===(0,n.mb)()){if("object"!=typeof l.data){s(Error("Invalid event data"));return}switch(l.data.eventType){case"userLoginSuccess":window.removeEventListener("message",a),clearInterval(o),this.closeWindow({isWindowOpenedByFn:i,win:t,closeOpenedWindow:null==e?void 0:e.closeOpenedWindow}),l.data.authResult&&r(l.data.authResult);break;case"userLoginFailed":window.removeEventListener("message",a),clearInterval(o),this.closeWindow({isWindowOpenedByFn:i,win:t,closeOpenedWindow:null==e?void 0:e.closeOpenedWindow}),s(Error(l.data.error));break;case"injectDeveloperClientId":null==t||t.postMessage({eventType:"injectDeveloperClientIdResult",developerClientId:this.clientId},(0,n.mb)())}}});window.addEventListener("message",a)});return this.postLogin({storedToken:m(p({},s.storedToken),{shouldStoreCookieString:!0}),walletDetails:m(p({},s.walletDetails),{isIframeStorageEnabled:!1})})})}loginWithPaperEmailOtp(e){return I(this,arguments,function*({email:e}){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryShareManagement:"AWS_MANAGED"},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(t)})}verifyPaperEmailLoginOtp(e){return I(this,arguments,function*({email:e,otp:t}){let i=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryShareManagement:"AWS_MANAGED"},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(i)})}},U=class extends T{loginWithPaperModal(e){return I(this,null,function*(){yield this.preLogin();let t=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:void 0,showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0,getRecoveryCode:null==e?void 0:e.getRecoveryCode}});return this.postLogin(t)})}loginWithGoogle(e){return I(this,null,function*(){throw Error("loginWithGoogle is not yet supported in the RecoveryShareManagement.USER_MANAGED flow. Please use RecoveryShareManagement.AWS_MANAGED instead.")})}loginWithPaperEmailOtp(e){return I(this,arguments,function*({email:e,recoveryCode:t}){yield this.preLogin();let i=yield this.LoginQuerier.call({procedureName:"loginWithPaperModal",params:{email:e,recoveryCode:t},showIframe:!0,injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(i)})}verifyPaperEmailLoginOtp(e){return I(this,arguments,function*({email:e,otp:t,recoveryCode:i}){let n=yield this.LoginQuerier.call({procedureName:"verifyPaperEmailLoginOtp",params:{email:e,otp:t,recoveryCode:i},injectRecoveryCode:{isInjectRecoveryCode:!0}});return this.postLogin(n)})}},b=class{constructor({clientId:e,advancedOptions:t,querier:i,onAuthSuccess:n}){var r;this.clientId=e,this.advancedOptions={recoveryShareManagement:null!=(r=null==t?void 0:t.recoveryShareManagement)?r:"AWS_MANAGED"},this.AuthQuerier=i,this.localStorage=new _({clientId:e}),this.onAuthSuccess=n,this.userManagedLogin=new U({postLogin:e=>I(this,null,function*(){return this.postLogin(e)}),preLogin:()=>I(this,null,function*(){yield this.preLogin()}),querier:i,clientId:e}),this.awsManagedLogin=new G({postLogin:e=>I(this,null,function*(){return this.postLogin(e)}),preLogin:()=>I(this,null,function*(){yield this.preLogin()}),querier:i,clientId:e})}preLogin(){return I(this,null,function*(){yield this.logout()})}postLogin(e){return I(this,arguments,function*({storedToken:e,walletDetails:t}){return e.shouldStoreCookieString&&(yield this.localStorage.saveAuthCookie(e.cookieString)),yield this.onAuthSuccess({storedToken:e,walletDetails:t})})}loginWithJwtAuth(e){return I(this,arguments,function*({token:e,authProvider:t,recoveryCode:i}){yield this.preLogin();let n=yield this.AuthQuerier.call({procedureName:"loginWithJwtAuthCallback",params:{token:e,authProvider:t,recoveryCode:i}});return this.postLogin(n)})}loginWithPaperModal(e){return I(this,null,function*(){return yield this.preLogin(),"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperModal():this.userManagedLogin.loginWithPaperModal(e)})}loginWithPaperEmailOtp(e){return I(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithPaperEmailOtp({email:e.email}):this.userManagedLogin.loginWithPaperEmailOtp(e)})}loginWithGoogle(e){return I(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.loginWithGoogle(e):this.userManagedLogin.loginWithGoogle()})}sendPaperEmailLoginOtp(e){return I(this,arguments,function*({email:e}){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.sendPaperEmailLoginOtp({email:e,recoveryShareManagement:"AWS_MANAGED"}):this.userManagedLogin.sendPaperEmailLoginOtp({email:e})})}verifyPaperEmailLoginOtp(e){return I(this,null,function*(){return"AWS_MANAGED"===this.advancedOptions.recoveryShareManagement?this.awsManagedLogin.verifyPaperEmailLoginOtp(e):this.userManagedLogin.verifyPaperEmailLoginOtp(e)})}logout(){return I(this,null,function*(){let{success:e}=yield this.AuthQuerier.call({procedureName:"logout",params:void 0}),t=yield this.localStorage.removeAuthCookie(),i=yield this.localStorage.removeWalletUserId();return{success:e||t||i}})}},k=class{constructor({chain:e,clientId:t,querier:i}){this.chain=e,this.clientId=t,this.gaslessTransactionQuerier=i}callContract(e){return I(this,arguments,function*({contractAddress:e,methodArgs:t,methodInterface:i}){return yield this.gaslessTransactionQuerier.call({procedureName:"callContract",params:{chain:this.chain,contractAddress:e,method:{args:t,stub:i}}})})}},R=class extends s.Signer{constructor({provider:e,clientId:t,querier:i}){var n;super(),this.DEFAULT_ETHEREUM_CHAIN_ID=5,this.clientId=t,this.querier=i,this.endpoint=null==(n=e.connection)?void 0:n.url,(0,o.defineReadOnly)(this,"provider",e)}getAddress(){return I(this,null,function*(){let{address:e}=yield this.querier.call({procedureName:"getAddress",params:void 0});return e})}signMessage(e){return I(this,null,function*(){var t,i,n,r;let s=yield null==(t=this.provider)?void 0:t.getNetwork();s&&s._defaultProvider;let{signedMessage:o}=yield this.querier.call({procedureName:"signMessage",params:{message:e,chainId:null!=(r=null==(n=yield null==(i=this.provider)?void 0:i.getNetwork())?void 0:n.chainId)?r:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return o})}signTransaction(e){return I(this,null,function*(){var t,i,n;let{signedTransaction:r}=yield this.querier.call({procedureName:"signTransaction",params:{transaction:e,chainId:null!=(n=null==(i=yield null==(t=this.provider)?void 0:t.getNetwork())?void 0:i.chainId)?n:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return r})}_signTypedData(e,t,i){return I(this,null,function*(){var n,r,s;let{signedTypedData:o}=yield this.querier.call({procedureName:"signTypedDataV4",params:{domain:e,types:t,message:i,chainId:null!=(s=null==(r=yield null==(n=this.provider)?void 0:n.getNetwork())?void 0:r.chainId)?s:this.DEFAULT_ETHEREUM_CHAIN_ID,rpcEndpoint:this.endpoint}});return o})}connect(e){return new R({clientId:this.clientId,provider:e,querier:this.querier})}},j=class{constructor({clientId:e,chain:t,querier:i}){this.clientId=e,this.chain=t,this.walletManagerQuerier=i,this.gasless=new k({chain:t,clientId:e,querier:i}),this.localStorage=new _({clientId:e})}postWalletSetUp(e){return I(this,arguments,function*({deviceShareStored:e,walletAddress:t,isIframeStorageEnabled:i,walletUserId:n}){return i||(yield this.localStorage.saveDeviceShare(e,n)),{walletAddress:t}})}getUserWalletStatus(){return I(this,null,function*(){let e=yield this.walletManagerQuerier.call({procedureName:"getUserStatus",params:void 0});return"Logged In, Wallet Initialized"===e.status?{status:"Logged In, Wallet Initialized",user:m(p({},e.user),{wallet:this})}:e})}setChain(e){return I(this,arguments,function*({chain:e}){this.chain=e,this.gasless=new k({chain:e,clientId:this.clientId,querier:this.walletManagerQuerier})})}getEthersJsSigner(e){return I(this,null,function*(){var t;return new R({clientId:this.clientId,provider:(0,r.getDefaultProvider)(null!=(t=null==e?void 0:e.rpcEndpoint)?t:n.J6[this.chain]),querier:this.walletManagerQuerier})})}},q=class{constructor({clientId:e,chain:t,styles:i,advancedOptions:n,onAuthSuccess:r}){this.clientId=e,this.querier=new N({clientId:e,customizationOptions:i}),this.wallet=new j({clientId:e,chain:t,querier:this.querier}),this.auth=new b({clientId:e,advancedOptions:p({recoveryShareManagement:"USER_MANAGED"},null!=n?n:{}),querier:this.querier,onAuthSuccess:e=>I(this,null,function*(){return yield this.wallet.postWalletSetUp(m(p({},e.walletDetails),{walletUserId:e.storedToken.authDetails.userWalletId})),yield this.querier.call({procedureName:"initIframe",params:{deviceShareStored:e.walletDetails.deviceShareStored,clientId:this.clientId,walletUserId:e.storedToken.authDetails.userWalletId,authCookie:e.storedToken.cookieString}}),null==r||r(e),{user:{status:"Logged In, Wallet Initialized",authDetails:e.storedToken.authDetails,wallet:this.wallet,walletAddress:e.walletDetails.walletAddress}}})})}getUser(){return I(this,null,function*(){let e=yield this.wallet.getUserWalletStatus();switch(e.status){case"Logged In, New Device":case"Logged In, Wallet Uninitialized":return yield this.auth.logout(),this.getUser();case"Logged Out":return{status:"Logged Out"};case"Logged In, Wallet Initialized":return p({status:"Logged In, Wallet Initialized"},e.user)}})}}}}]);