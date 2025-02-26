"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{44083:(e,t,r)=>{r.d(t,{UDz:()=>l.UDz,Up$:()=>i.C,Xvf:()=>i.T});var i=r(67804),n=r(40887),l=r(3281),o=(r(91157),r(96540));r(41271);var a=r(53842),s=r(93918),c=r(17049);r(57699);var d=r(74848);r(76599),r(21950),r(73394),r(63201),r(21777),r(50547);var m=r(95219);r(17965),r(14255),r(58676),r(87583),r(48287).Buffer;let h=e=>{let t=(0,a.u)().wallets.smartWallet,{personalWallet:r,personalWalletChainId:i,switchChainPersonalWallet:n}=e,m=(0,l.eFi)(),h=(0,l.u2$)().activeChain,g=(0,l.eKZ)()!==i,[f,p]=(0,o.useState)(!1),[x,u]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),j=(0,l.qV2)(),{onConnect:b}=e,C=(0,o.useRef)(!1),S=(0,o.useContext)(a.M).modalSize,H=(0,o.useCallback)(async()=>{if(r&&!C.current){p(!1);try{C.current=!0,await m(e.smartWallet,{personalWallet:r}),b()}catch(e){console.error(e),p(!0)}}},[r,m,e.smartWallet,b]);return((0,o.useEffect)(()=>{g||H()},[g,H,r]),f||"connecting"!==j&&g)?f?(0,d.jsx)(s.C,{fullHeight:!0,animate:"fadein",flex:"column",center:"both",p:"lg",style:{minHeight:"300px"},children:(0,d.jsx)(a.T,{color:"danger",children:t.failedToConnect})}):(0,d.jsxs)(s.C,{fullHeight:!0,animate:"fadein",flex:"column",children:[(0,d.jsx)(s.C,{p:"lg",children:(0,d.jsx)(s.M,{title:e.personalWalletConfig.meta.name,imgSrc:e.personalWalletConfig.meta.iconURL,onBack:e.onBack})}),"compact"===S&&(0,d.jsx)(a.S,{y:"lg"}),(0,d.jsx)(s.C,{expand:!0,flex:"column",center:"both",p:"lg",children:(0,d.jsxs)(s.C,{p:"wide"===S?"lg":void 0,children:[(0,d.jsx)(s.C,{flex:"row",center:"x",color:"danger",children:(0,d.jsx)(c.Pip,{width:s.i.lg,height:s.i.lg})}),(0,d.jsx)(a.S,{y:"md"}),(0,d.jsx)(a.T,{size:"lg",color:"primaryText",center:!0,weight:500,children:t.wrongNetworkScreen.title}),(0,d.jsx)(a.S,{y:"lg"}),(0,d.jsx)(a.T,{multiline:!0,center:!0,children:t.wrongNetworkScreen.subtitle}),(0,d.jsx)(a.S,{y:"xl"}),(0,d.jsxs)(s.C,{flex:"column",gap:"md",children:[(0,d.jsxs)(s.B,{type:"button",fullWidth:!0,variant:"accent",style:{display:"flex",alignItems:"center",gap:s.s.sm},onClick:async()=>{p(!1),u(!1),w(!0);try{await n(h.chainId)}catch(e){u(!0)}finally{w(!1)}},children:[" ",y?"Switching":"Switch Network",y&&(0,d.jsx)(a.a,{size:"sm",color:"accentButtonText"})]}),(0,d.jsxs)(s.C,{flex:"row",gap:"sm",center:"both",color:"danger",style:{textAlign:"center",fontSize:s.f.sm,opacity:x?1:0,transition:"opacity 200ms ease"},children:[(0,d.jsx)(c.Pip,{width:s.i.sm,height:s.i.sm}),(0,d.jsx)("span",{children:t.wrongNetworkScreen.failedToSwitch})]})]})]})})]}):(0,d.jsxs)(s.C,{fullHeight:!0,flex:"column",center:"both",style:{minHeight:"300px"},children:[(0,d.jsx)(a.T,{color:"primaryText",multiline:!0,center:!0,children:t.connecting}),(0,d.jsx)(a.S,{y:"lg"}),(0,d.jsx)(a.a,{color:"accentText",size:"lg"})]})};(0,m.AH)`
  opacity: 0;
`,(0,m.AH)`
  opacity: 1;
`,(0,m.AH)`
  position: relative;
  width: 100%;
  height: 100%;
`,(0,m.AH)`
  display: grid;
  position: relative;
  width: 100%;
`,(0,m.AH)`
  transition-delay: 150ms;
  transition-property: opacity;
  transition-duration: 75ms;
`,(0,m.AH)`
  transition-property: opacity;
  transition-duration: 150ms;
`,(0,m.AH)`
  background-color: transparent;
  grid-column-start: 1;
  grid-row-start: 1;
`;let g=(0,m.i7)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,f=(0,m.AH)`
  border: 0.15rem solid #f3f3f300;
  border-top: 0.15rem solid #000000;
  border-left: 0.15rem solid #000000;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${g} 1s linear infinite;
`;(0,m.AH)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`,(0,m.AH)`
  color: #000000;
  width: 2rem;
  height: 2rem;
`,(0,m.AH)`
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #1f2937;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
`}}]);