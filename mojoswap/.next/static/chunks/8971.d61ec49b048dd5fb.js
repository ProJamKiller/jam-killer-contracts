"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8971],{7471:(t,e,r)=>{r.d(e,{D:()=>w,F:()=>p,I:()=>l,a:()=>c,b:()=>h,c:()=>u,f:()=>d,g:()=>g,u:()=>f});var a=r(17152),n=r(8471),i=r(37457),o=r(86863),s=r(48287).Buffer;let l=n.arrayify("0x80ac58cd"),c=n.arrayify("0xd9b67a26"),p={name:"Failed to load NFT metadata"};async function d(t,e,r){let o;if(e.startsWith("data:application/json;base64")&&void 0!==s){let r=e.split(",")[1],n=JSON.parse(s.from(r,"base64").toString("utf-8"));return a.a.parse({...n,id:i.gH.from(t).toString(),uri:e})}let l=e.replace("{id}",n.hexZeroPad(i.gH.from(t).toHexString(),32).slice(2));try{o=await r.downloadJSON(l)}catch(n){let a=e.replace("{id}",i.gH.from(t).toString());try{o=await r.downloadJSON(a)}catch(r){console.warn(`failed to get token metadata: ${JSON.stringify({tokenId:t.toString(),tokenUri:e})} -- falling back to default metadata`),o=p}}return a.a.parse({...o,id:i.gH.from(t).toString(),uri:e})}async function u(t,e,n,s){let u;let h=(await r.e(4811).then(r.t.bind(r,94811,19))).default,f=new o.NZ(t,h,e),[g,w]=await Promise.all([f.supportsInterface(l),f.supportsInterface(c)]);if(g){let a=(await Promise.resolve().then(r.t.bind(r,1024,19))).default,i=new o.NZ(t,a,e);u=await i.tokenURI(n)}else if(w){let a=(await Promise.resolve().then(r.t.bind(r,51146,19))).default,i=new o.NZ(t,a,e);u=await i.uri(n)}else throw Error("Contract must implement ERC 1155 or ERC 721.");return u?d(n,u,s):a.a.parse({...p,id:i.gH.from(n).toString(),uri:""})}async function h(t,e){return"string"==typeof t?t:await e.upload(a.C.parse(t))}async function f(t,e,r,n){if(void 0===t.find(t=>"string"!=typeof t))return t;if(void 0===t.find(t=>"object"!=typeof t))return await e.uploadBatch(t.map(t=>a.C.parse(t)),{rewriteFileNames:{fileStartNumber:r||0},onProgress:n?.onProgress});throw Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)")}function g(t){let e=t[0].substring(0,t[0].lastIndexOf("/"));for(let r=0;r<t.length;r++){let a=t[r].substring(0,t[r].lastIndexOf("/"));if(e!==a)throw Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${e}' but got '${a}'`)}return e.replace(/\/$/,"")+"/"}let w=100},21187:(t,e,r)=>{r.d(e,{E:()=>l,R:()=>o,S:()=>s,a:()=>c});var a=r(37457),n=r(14476),i=r(27454);let o=n.z.union([n.z.date().transform(t=>a.gH.from(Math.floor(t.getTime()/1e3))),n.z.number().transform(t=>a.gH.from(t))]),s=o.default(new Date(0)),l=o.default(new Date(Date.now()+31536e7));function c(t,e){if(!t)throw new i.x(e);return t}},34590:(t,e,r)=>{r.d(e,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},33553:(t,e,r)=>{r.r(e),r.d(e,{MarketplaceV3:()=>u});var a=r(21187),n=r(12204),i=r(27454),o=r(95848),s=r(34590),l=r(97205),c=r(20522),p=r(35948),d=r(79195);r(3802),r(16763),r(74486);class u{static contractRoles=i.dH;get directListings(){return(0,a.a)(this.detectDirectListings(),i.dA)}get englishAuctions(){return(0,a.a)(this.detectEnglishAuctions(),i.dB)}get offers(){return(0,a.a)(this.detectOffers(),i.dC)}get chainId(){return this._chainId}constructor(t,e,r){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},p=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new i.cs(t,e,p,a,r);this._chainId=d,this.abi=i.bj.parse(p||[]),this.contractWrapper=h,this.storage=r,this.metadata=new n.C(this.contractWrapper,i.b$,this.storage),this.app=new n.b(this.contractWrapper,this.metadata,this.storage),this.roles=new c.C(this.contractWrapper,u.contractRoles),this.encoder=new o.C(this.contractWrapper),this.estimator=new n.G(this.contractWrapper),this.events=new n.a(this.contractWrapper),this.platformFees=new l.C(this.contractWrapper),this.interceptor=new s.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async prepare(t,e,r){return d.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:e,overrides:r})}async call(t,e,r){return this.contractWrapper.call(t,e,r)}detectDirectListings(){if((0,n.d)(this.contractWrapper,"DirectListings"))return new p.M(this.contractWrapper,this.storage)}detectEnglishAuctions(){if((0,n.d)(this.contractWrapper,"EnglishAuctions"))return new p.a(this.contractWrapper,this.storage)}detectOffers(){if((0,n.d)(this.contractWrapper,"Offers"))return new p.b(this.contractWrapper,this.storage)}}},17152:(t,e,r)=>{r.d(e,{B:()=>l,C:()=>c,N:()=>p,a:()=>d,s:()=>u});var a=r(27454),n=r(14476),i=r(95848);let o=n.z.object({}).catchall(n.z.union([a.cx,n.z.unknown()])),s=n.z.union([n.z.array(n.z.array(o)).transform(t=>t.flat()),n.z.array(o),o]).optional().nullable(),l=n.z.object({name:n.z.union([n.z.string(),n.z.number()]).optional().nullable(),description:n.z.string().nullable().optional().nullable(),image:a.cy.nullable().optional(),animation_url:a.cy.optional().nullable()}),c=l.extend({external_url:a.cy.nullable().optional(),background_color:a.cz.optional().nullable(),properties:s,attributes:s}).catchall(n.z.union([a.cx,n.z.unknown()])),p=n.z.union([c,n.z.string()]),d=c.extend({id:n.z.string(),uri:n.z.string(),image:n.z.string().nullable().optional(),external_url:n.z.string().nullable().optional(),animation_url:n.z.string().nullable().optional()});async function u(t,e,n,o){if((0,i.i)(n))o.value=e;else{let i=(await Promise.resolve().then(r.t.bind(r,96337,19))).default,s=t.getSigner(),l=t.getProvider(),c=new a.cs(s||l,n,i,t.options,t.storage),p=await t.getSignerAddress(),d=t.address;return(await c.read("allowance",[p,d])).lt(e)&&await c.sendTransaction("approve",[d,e]),o}}}}]);