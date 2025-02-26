"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821,829],{34803:(e,t,i)=>{i.d(t,{W:()=>r});var n=i(40257),s=i(74486);class r extends s.A{constructor(e){let{chains:t=n.k9b,options:i}=e;super(),this.chains=t,this.options=i}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}},92555:(e,t,i)=>{i.d(t,{A:()=>o,C:()=>a,R:()=>h,S:()=>d,U:()=>l,a:()=>c});var n=i(16454);class s extends Error{constructor(e,t){let{cause:i,code:n,data:s}=t;if(!Number.isInteger(n))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(i)}`),this.cause=i,this.code=n,this.data=s}}class r extends s{constructor(e,t){let{cause:i,code:n,data:s}=t;if(!(Number.isInteger(n)&&n>=1e3&&n<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:i,code:n,data:s})}}class o extends Error{constructor(){super(...arguments),(0,n._)(this,"name","AddChainError"),(0,n._)(this,"message","Error adding chain")}}class a extends Error{constructor(e){let{chainId:t,connectorId:i}=e;super(`Chain "${t}" not configured for connector "${i}".`),(0,n._)(this,"name","ChainNotConfigured")}}class c extends Error{constructor(){super(...arguments),(0,n._)(this,"name","ConnectorNotFoundError"),(0,n._)(this,"message","Connector not found")}}class h extends s{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,n._)(this,"name","ResourceUnavailable")}}class d extends r{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,n._)(this,"name","SwitchChainError")}}class l extends r{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,n._)(this,"name","UserRejectedRequestError")}}},75739:(e,t,i)=>{i.d(t,{n:()=>n});function n(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},90829:(e,t,i)=>{i.d(t,{CryptoDefiWalletConnector:()=>h});var n=i(16454),s=i(92555),r=i(19337),o=i(30821),a=i(8402),c=i(51126);i(74486);class h extends o.InjectedConnector{constructor(e){super({chains:e.chains,options:{name:"Crypto Defi Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:c.g,...e.options},connectorStorage:e.connectorStorage}),(0,n._)(this,"id",r.w.cryptoDefiWallet)}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=await this.getProvider();if(!t)throw new s.a;this.setupListeners(),this.emit("message",{type:"connecting"});let i=null;if(this.options?.shimDisconnect&&!this.connectorStorage.getItem(this.shimDisconnectKey)&&(i=await this.getAccount().catch(()=>null)))try{await t.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(e){if(this.isUserRejectedRequestError(e))throw new s.U(e)}if(!i){let e=await t.request({method:"eth_requestAccounts"});i=a.getAddress(e[0])}let n=await this.getChainId(),r=this.isChainUnsupported(n);if(e.chainId&&n!==e.chainId)try{await this.switchChain(e.chainId),n=e.chainId,r=this.isChainUnsupported(e.chainId)}catch(t){console.error(`Could not switch to chain id : ${e.chainId}`,t)}this.options?.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let o={chain:{id:n,unsupported:r},provider:t,account:i};return this.emit("connect",o),o}catch(e){if(this.isUserRejectedRequestError(e))throw new s.U(e);if(-32002===e.code)throw new s.R(e);throw e}}}},30821:(e,t,i)=>{i.d(t,{InjectedConnector:()=>u});var n=i(16454),s=i(34803),r=i(92555),o=i(47057),a=i(17173),c=i(8402),h=i(24824),d=i(8471),l=i(75739);i(74486);class u extends s.W{constructor(e){let t={shimDisconnect:!0,getProvider:()=>{if((0,o.a)(globalThis.window))return globalThis.window.ethereum},...e.options};super({chains:e.chains,options:t}),(0,n._)(this,"shimDisconnectKey","injected.shimDisconnect"),(0,n._)(this,"onAccountsChanged",async e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:c.getAddress(e[0])})}),(0,n._)(this,"onChainChanged",e=>{let t=(0,l.n)(e),i=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:i}})}),(0,n._)(this,"onDisconnect",async e=>{if(1013===e.code&&await this.getProvider())try{if(await this.getAccount())return}catch{}this.emit("disconnect"),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey)});let i=t.getProvider();if("string"==typeof t.name)this.name=t.name;else if(i){let e=function(e){if(!e)return"Injected";let t=e=>e.isAvalanche?"Core Wallet":e.isBitKeep?"BitKeep":e.isBraveWallet?"Brave Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isExodus?"Exodus":e.isFrame?"Frame":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPortal?"Ripio Portal":e.isTally?"Tally":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isMetaMask?"MetaMask":e.isImToken?"imToken":void 0;if(e.providers?.length){let i=new Set,n=1;for(let s of e.providers){let e=t(s);e||(e=`Unknown Wallet #${n}`,n+=1),i.add(e)}let s=[...i];return s.length?s:s[0]??"Injected"}return t(e)??"Injected"}(i);t.name?this.name=t.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.id="injected",this.ready=!!i,this.connectorStorage=e.connectorStorage}async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{let t=await this.getProvider();if(!t)throw new r.a;this.setupListeners(),this.emit("message",{type:"connecting"});let i=await t.request({method:"eth_requestAccounts"}),n=c.getAddress(i[0]),s=await this.getChainId(),o=this.isChainUnsupported(s);if(e.chainId&&s!==e.chainId)try{await this.switchChain(e.chainId),s=e.chainId,o=this.isChainUnsupported(e.chainId)}catch(t){console.error(`Could not switch to chain id: ${e.chainId}`,t)}this.options.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");let a={account:n,chain:{id:s,unsupported:o},provider:t};return this.emit("connect",a),a}catch(e){if(this.isUserRejectedRequestError(e))throw new r.U(e);if(-32002===e.code)throw new r.R(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&await this.connectorStorage.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new r.a;let t=await e.request({method:"eth_accounts"});return c.getAddress(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new r.a;return e.request({method:"eth_chainId"}).then(l.n)}async getProvider(){let e=this.options.getProvider();return e&&(this._provider=e),this._provider}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,i]=await Promise.all([this.getProvider(),this.getAccount()]);return new h.j(t,e).getSigner(i)}async isAuthorized(){try{if(this.options.shimDisconnect&&!await this.connectorStorage.getItem(this.shimDisconnectKey))return!1;if(!await this.getProvider())throw new r.a;return!!await this.getAccount()}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new r.a;let i=d.hexValue(e);try{await t.request({method:"wallet_switchEthereumChain",params:[{chainId:i}]});let n=this.chains.find(t=>t.chainId===e);if(n)return n;return{chainId:e,name:`Chain ${i}`,slug:`${i}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],chain:"",shortName:"",testnet:!0}}catch(s){let n=this.chains.find(t=>t.chainId===e);if(!n)throw new r.C({chainId:e,connectorId:this.id});if(4902===s.code||s?.data?.originalError?.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:i,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:(0,a.g)(n),blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),n}catch(e){if(this.isUserRejectedRequestError(e))throw new r.U(s);throw new r.A}if(this.isUserRejectedRequestError(s))throw new r.U(s);throw new r.S(s)}}async setupListeners(){let e=await this.getProvider();e.on&&(e.on("accountsChanged",this.onAccountsChanged),e.on("chainChanged",this.onChainChanged),e.on("disconnect",this.onDisconnect))}isUserRejectedRequestError(e){return 4001===e.code}}}}]);