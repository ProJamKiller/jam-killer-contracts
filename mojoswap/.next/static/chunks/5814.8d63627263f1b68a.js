"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5814],{55814:(t,a,r)=>{r.d(a,{E:()=>T,a:()=>C});var e=r(65579),n=r(37457),i=r(95848),c=r(27454),s=r(21187),o=r(12204),p=r(79195),l=r(88293),h=r(11561),m=r(29966),u=r(17152),d=r(73207);async function W(t,a){let r=await t.read("decimals",[]);return e.parseUnits(c.cw.parse(a),r)}class g{featureName=c.cD.name;constructor(t,a){this.erc20=t,this.contractWrapper=a}tokens=(0,p.f)(async t=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await this.erc20.normalizeAmount(t)]}));from=(0,p.f)(async(t,a)=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnFrom",args:await Promise.all([(0,c.aL)(t),this.erc20.normalizeAmount(a)])}))}class f{featureName=c.cE.name;constructor(t,a,r){this.erc20=t,this.contractWrapper=a,this.storage=r;let e=new o.C(this.contractWrapper,c.bg,this.storage);this.conditions=new l.D(this.contractWrapper,e,this.storage)}to=(0,p.f)(async(t,a,r)=>{let e=await this.erc20.normalizeAmount(a);return await this.conditions.getClaimTransaction(t,e,r)})}class y{constructor(t,a,r){this.erc20=t,this.contractWrapper=a,this.storage=r,this.claim=new f(this.erc20,this.contractWrapper,this.storage)}}class w{featureName=c.cF.name;constructor(t,a){this.erc20=t,this.contractWrapper=a}to=(0,p.f)(async t=>{let a=new i.C(this.contractWrapper),r=(await Promise.all(t.map(t=>Promise.all([(0,c.aL)(t.toAddress),this.erc20.normalizeAmount(t.amount)])))).map(t=>{let[r,e]=t;return a.encode("mintTo",[r,e])});return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})})}class b{featureName=c.cG.name;constructor(t,a){this.erc20=t,this.contractWrapper=a,this.batch=this.detectErc20BatchMintable()}to=(0,p.f)(async(t,a)=>await this.getMintTransaction(t,a));async getMintTransaction(t,a){return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:await Promise.all([(0,c.aL)(t),this.erc20.normalizeAmount(a)])})}detectErc20BatchMintable(){if((0,o.d)(this.contractWrapper,"ERC20BatchMintable"))return new w(this.erc20,this.contractWrapper)}}class C{featureName=c.cH.name;constructor(t,a){this.contractWrapper=t,this.roles=a}mint=(0,p.f)(async t=>{let a=t.payload,r=t.signature,[e,i]=await Promise.all([this.mapPayloadToContractStruct(a),this.contractWrapper.getCallOverrides()]);return await (0,u.s)(this.contractWrapper,n.gH.from(e.price),a.currencyAddress,i),p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[e,r],overrides:i})});mintBatch=(0,p.f)(async t=>{let a=await Promise.all(t.map(t=>this.mapPayloadToContractStruct(t.payload))),r=t.map((t,r)=>{let e=a[r],i=t.signature,c=t.payload.price;if(n.gH.from(c).gt(0))throw Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:e,signature:i}}),e=new i.C(this.contractWrapper),c=r.map(t=>e.encode("mintWithSignature",[t.message,t.signature]));return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[c]})});async verify(t){let a=t.payload,r=t.signature,e=await this.mapPayloadToContractStruct(a);return(await this.contractWrapper.read("verify",[e,r]))[0]}async generate(t){return(await this.generateBatch([t]))[0]}async generateBatch(t){await this.roles?.verify(["minter"],await this.contractWrapper.getSignerAddress());let[a,r,e]=await Promise.all([this.contractWrapper.getChainID(),this.contractWrapper.read("name",[]),Promise.all(t.map(t=>d.S.parseAsync(t)))]),n=this.contractWrapper.getSigner();(0,h.A)(n,"No signer available");let i=await Promise.all(e.map(t=>d.n.parseAsync(t))),c=await Promise.all(i.map(t=>this.mapPayloadToContractStruct(t))),s=await Promise.all(c.map(t=>this.contractWrapper.signTypedData(n,{name:r,version:"1",chainId:a,verifyingContract:this.contractWrapper.address},{MintRequest:d.M},t)));return e.map((t,a)=>({payload:i[a],signature:s[a].toString()}))}async mapPayloadToContractStruct(t){let[a,r]=await Promise.all([(0,m.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress),this.contractWrapper.read("decimals",[])]),n=e.parseUnits(t.quantity,r);return{to:t.to,primarySaleRecipient:t.primarySaleRecipient,quantity:n,price:a,currency:t.currencyAddress,validityEndTimestamp:t.mintEndTime,validityStartTimestamp:t.mintStartTime,uid:t.uid}}}class T{featureName=c.cI.name;get chainId(){return this._chainId}constructor(t,a,r){this.contractWrapper=t,this.storage=a,this.mintable=this.detectErc20Mintable(),this.burnable=this.detectErc20Burnable(),this.droppable=this.detectErc20Droppable(),this.signatureMintable=this.detectErc20SignatureMintable(),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return await (0,i.f)(this.contractWrapper.getProvider(),this.getAddress())}async balance(){return await this.balanceOf(await this.contractWrapper.getSignerAddress())}async balanceOf(t){return this.getValue(await this.contractWrapper.read("balanceOf",[await (0,c.aL)(t)]))}async totalSupply(){return await this.getValue(await this.contractWrapper.read("totalSupply",[]))}async allowance(t){let[a,r]=await Promise.all([this.contractWrapper.getSignerAddress(),(0,c.aL)(t)]);return await this.allowanceOf(a,r)}async allowanceOf(t,a){let r=await Promise.all([(0,c.aL)(t),(0,c.aL)(a)]);return await this.getValue(await this.contractWrapper.read("allowance",r))}transfer=(0,p.f)(async(t,a)=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transfer",args:await Promise.all([(0,c.aL)(t),this.normalizeAmount(a)])}));transferFrom=(0,p.f)(async(t,a,r)=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"transferFrom",args:await Promise.all([(0,c.aL)(t),(0,c.aL)(a),this.normalizeAmount(r)])}));setAllowance=(0,p.f)(async(t,a)=>p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:await Promise.all([(0,c.aL)(t),this.normalizeAmount(a)])}));transferBatch=(0,p.f)(async t=>{let a=new i.C(this.contractWrapper),r=(await Promise.all(t.map(t=>Promise.all([this.normalizeAmount(t.amount),(0,c.aL)(t.toAddress)])))).map(t=>{let[r,e]=t;return a.encode("transfer",[e,r])});return p.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r]})});mint=(0,p.f)(async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t));mintTo=(0,p.f)(async(t,a)=>(0,s.a)(this.mintable,c.cG).to.prepare(t,a));async getMintTransaction(t,a){return(0,s.a)(this.mintable,c.cG).getMintTransaction(t,a)}mintBatchTo=(0,p.f)(async t=>(0,s.a)(this.mintable?.batch,c.cF).to.prepare(t));burn=(0,p.f)(async t=>(0,s.a)(this.burnable,c.cD).tokens.prepare(t));burnFrom=(0,p.f)(async(t,a)=>(0,s.a)(this.burnable,c.cD).from.prepare(t,a));claim=(0,p.f)(async(t,a)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,a));claimTo=(0,p.f)(async(t,a,r)=>(0,s.a)(this.droppable?.claim,c.cE).to.prepare(t,a,r));get claimConditions(){return(0,s.a)(this.droppable?.claim,c.cE).conditions}get signature(){return(0,s.a)(this.signatureMintable,c.cH)}async normalizeAmount(t){return W(this.contractWrapper,t)}async getValue(t){return await (0,i.a)(this.contractWrapper.getProvider(),this.getAddress(),n.gH.from(t))}detectErc20Mintable(){if((0,o.d)(this.contractWrapper,"ERC20"))return new b(this,this.contractWrapper)}detectErc20Burnable(){if((0,o.d)(this.contractWrapper,"ERC20Burnable"))return new g(this,this.contractWrapper)}detectErc20Droppable(){if((0,o.d)(this.contractWrapper,"ERC20ClaimConditionsV1")||(0,o.d)(this.contractWrapper,"ERC20ClaimConditionsV2")||(0,o.d)(this.contractWrapper,"ERC20ClaimPhasesV1")||(0,o.d)(this.contractWrapper,"ERC20ClaimPhasesV2"))return new y(this,this.contractWrapper,this.storage)}detectErc20SignatureMintable(){if((0,o.d)(this.contractWrapper,"ERC20SignatureMintable"))return new C(this.contractWrapper)}}}}]);