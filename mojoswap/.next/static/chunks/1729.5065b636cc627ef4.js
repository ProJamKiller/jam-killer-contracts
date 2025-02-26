"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1729],{34803:(e,t,n)=>{n.d(t,{W:()=>i});var s=n(40257),r=n(74486);class i extends r.A{constructor(e){let{chains:t=s.k9b,options:n}=e;super(),this.chains=t,this.options=n}getBlockExplorerUrls(e){let t=e.explorers?.map(e=>e.url)??[];return t.length>0?t:void 0}isChainUnsupported(e){return!this.chains.some(t=>t.chainId===e)}updateChains(e){this.chains=e}}},92555:(e,t,n)=>{n.d(t,{A:()=>o,C:()=>a,R:()=>c,S:()=>d,U:()=>u,a:()=>h});var s=n(16454);class r extends Error{constructor(e,t){let{cause:n,code:s,data:r}=t;if(!Number.isInteger(s))throw Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw Error('"message" must be a nonempty string.');super(`${e}. Cause: ${JSON.stringify(n)}`),this.cause=n,this.code=s,this.data=r}}class i extends r{constructor(e,t){let{cause:n,code:s,data:r}=t;if(!(Number.isInteger(s)&&s>=1e3&&s<=4999))throw Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,{cause:n,code:s,data:r})}}class o extends Error{constructor(){super(...arguments),(0,s._)(this,"name","AddChainError"),(0,s._)(this,"message","Error adding chain")}}class a extends Error{constructor(e){let{chainId:t,connectorId:n}=e;super(`Chain "${t}" not configured for connector "${n}".`),(0,s._)(this,"name","ChainNotConfigured")}}class h extends Error{constructor(){super(...arguments),(0,s._)(this,"name","ConnectorNotFoundError"),(0,s._)(this,"message","Connector not found")}}class c extends r{constructor(e){super("Resource unavailable",{cause:e,code:-32002}),(0,s._)(this,"name","ResourceUnavailable")}}class d extends i{constructor(e){super("Error switching chain",{cause:e,code:4902}),(0,s._)(this,"name","SwitchChainError")}}class u extends i{constructor(e){super("User rejected request",{cause:e,code:4001}),(0,s._)(this,"name","UserRejectedRequestError")}}},75739:(e,t,n)=>{n.d(t,{n:()=>s});function s(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}},81729:(e,t,n)=>{n.d(t,{BloctoConnector:()=>g});var s=n(16454),r=n(34803),i=n(92555),o=n(69425),a=n(8402),h=n(24824),c=n(8471),d=n(19337),u=n(17173),l=n(75739);n(74486);class g extends r.W{constructor(e){let{chains:t,options:n={}}=e;super({chains:t,options:n}),(0,s._)(this,"id",d.w.blocto),(0,s._)(this,"name","Blocto"),(0,s._)(this,"ready",!0),this._onAccountsChangedBind=this.onAccountsChanged.bind(this),this._onChainChangedBind=this.onChainChanged.bind(this),this._onDisconnectBind=this.onDisconnect.bind(this)}async connect(e){try{let t=await this.getProvider(e);this.setupListeners(),this.emit("message",{type:"connecting"});let n=await t.request({method:"eth_requestAccounts"}),s=a.getAddress(n[0]),r=await this.getChainId(),i=this.isChainUnsupported(r);return{account:s,chain:{id:r,unsupported:i},provider:t}}catch(e){if(this._handleConnectReset(),this._isUserRejectedRequestError(e))throw new i.U(e);throw e}}async disconnect(){let e=await this.getProvider();await e.request({method:"wallet_disconnect"}),this.removeListeners(),this._handleConnectReset()}async getAccount(){let e=await this.getProvider(),[t]=await e.request({method:"eth_accounts"})||[];if(!t)throw Error("No accounts found");return t}async getChainId(){let e=await this.getProvider(),t=await e.request({method:"eth_chainId"});return(0,l.n)(t)}getProvider(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this._provider){let t=e??this.chains[0]?.chainId??1,n=this.chains.find(e=>e.chainId===t)?.rpc[0];this._provider=new o.A({ethereum:{chainId:t,rpc:n},appId:this.options.appId})?.ethereum}if(!this._provider)throw new i.a;return Promise.resolve(this._provider)}async getSigner(){let{chainId:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,n]=await Promise.all([this.getProvider(),this.getAccount()]);return new h.j(t,e).getSigner(n)}async isAuthorized(){return!!this._provider?._blocto?.sessionKeyEnv??!1}async switchChain(e){let t=await this.getProvider(),n=c.hexValue(e),s=this.chains.find(t=>t.chainId===e);if(!s)throw new i.S(Error("chain not found on connector."));if(!(await t.supportChainList())[`${e}`])throw new i.S(Error(`Blocto unsupported chain: ${n}`));try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,rpcUrls:(0,u.g)(s)}]}),await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),s}catch(e){if(this._isUserRejectedRequestError(e))throw new i.U(e);throw new i.S(e)}}onAccountsChanged(){}async onChainChanged(e){let t=(0,l.n)(e),n=this.isChainUnsupported(t),s=await this.getAccount();this.emit("change",{chain:{id:t,unsupported:n},account:s})}onDisconnect(){this.emit("disconnect")}async setupListeners(){let e=await this.getProvider();e.on("accountsChanged",this._onAccountsChangedBind),e.on("chainChanged",this._onChainChangedBind),e.on("disconnect",this._onDisconnectBind)}async removeListeners(){let e=await this.getProvider();e.off("accountsChanged",this._onAccountsChangedBind),e.off("chainChanged",this._onChainChangedBind),e.off("disconnect",this._onDisconnectBind)}_isUserRejectedRequestError(e){return/(user rejected)/i.test(e.message)}_handleConnectReset(){this._provider=void 0}}}}]);