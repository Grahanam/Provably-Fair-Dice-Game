(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4689:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var n=t(5155);t(5565);var l=t(2115),s=t(337),a=t(7274),o=t(1478);let d=e=>{let{state:r}=e,t=(0,l.useRef)(null),d=(0,l.useRef)(null),c=(0,l.useRef)(new s.Z58),i=(0,l.useRef)(null),u=(0,l.useRef)(null),m=(0,l.useRef)(r),x=(0,l.useRef)(new s.Tap),h=(0,l.useRef)([]),b=(0,l.useRef)(null),f=(0,l.useRef)({hasRolled:!1,hasRolling:!1,currentTween:null});(0,l.useEffect)(()=>{m.current=r},[r]);let p=(0,l.useCallback)(e=>{switch(console.log("final dice:",e),e){case 1:default:return[0,-Math.PI/2,0];case 2:return[0,Math.PI/2,0];case 3:return[-Math.PI/2,0,0];case 4:return[Math.PI/2,0,0];case 5:return[0,0,0];case 6:return[Math.PI,0,0]}},[]),w=(0,l.useCallback)(()=>{f.current.currentTween&&f.current.currentTween.kill(),f.current.currentTween=o.os.to(u.current.rotation,{x:"+=6",y:"+=6",z:"+=6",duration:6,repeat:-1,ease:"none"})},[]),g=(0,l.useCallback)(()=>{f.current.currentTween&&f.current.currentTween.kill(),f.current.currentTween=o.os.to(u.current.rotation,{x:"+=6",y:"+=6",z:"+=6",duration:2,repeat:-1,ease:"none"})},[p]),j=e=>{f.current.currentTween&&f.current.currentTween.kill();let r=p(e);f.current.currentTween=o.os.to(u.current.rotation,{x:r[0],y:r[1],z:r[2],duration:1,ease:"elastic.out(1, 0.3)"})};return(0,l.useEffect)(()=>{let e=c.current,r=new s.ubm(50,1,.1,1e3),n=new a.JeP({antialias:!0});i.current=r,d.current=n;let l=[x.current.load("textures/dice1.png"),x.current.load("textures/dice2.png"),x.current.load("textures/dice4.png"),x.current.load("textures/dice3.png"),x.current.load("textures/dice5.png"),x.current.load("textures/dice6.png")];h.current=l.map(e=>new s.V9B({map:e})),b.current=new s.iNn;let o=new s.eaF(b.current,h.current);u.current=o,e.add(o),n.setSize(100,100),t.current.appendChild(n.domElement),r.position.z=2;let m=()=>{n.render(e,r),requestAnimationFrame(m)};return m(),()=>{f.current.currentTween&&f.current.currentTween.kill(),e.remove(o),b.current.dispose(),h.current.forEach(e=>{e.dispose(),e.map&&e.map.dispose()}),n.dispose(),mountNode&&mountNode.removeChild(n.domElement)}},[]),(0,l.useEffect)(()=>{switch(r.animation){case"idle":w();break;case"rolling":f.current.hasRolling||(f.current.hasRolling=!0,f.current.hasRolled=!1,g());break;case"result":f.current.hasRolled||(f.current.hasRolling=!1,f.current.hasRolled=!0,j(r.number))}},[r.animation,r.number,g,j]),(0,n.jsx)("div",{ref:t,className:"w-27 h-27 border-4 rounded-lg border-gray-600"})};d.displayName="Dice";let c=(0,l.forwardRef)((e,r)=>{let[t,s]=(0,l.useState)({show:!1,type:"",message:""}),a={won:"Jackpot ! \uD83D\uDCB0 Your bet doubled !",lose:"Oof ! \uD83D\uDC80 Bet lost !",info:"Stay sharp! \uD83C\uDFB2 Game updated.",maxlimit:"Oops! \uD83D\uDC80 \uD83D\uDCB0 Not enough funds!"};return(0,l.useImperativeHandle)(r,()=>({showAlert:e=>{s({show:!0,type:e,message:a[e]}),setTimeout(()=>s({show:!1,type:e}),5e3)}})),(0,n.jsx)(n.Fragment,{children:t.show&&(0,n.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700 p-2 rounded border-1 border-yellow-500",children:(0,n.jsx)("div",{children:t.message})})})});c.displayName="Alert";let i=e=>{let{label:r,amount:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"font-bold",children:r}),(0,n.jsxs)("div",{className:"flex flex-row items-center border-2 border-yellow-500 rounded font-black bg-gray-800 px-2",children:[(0,n.jsx)("div",{className:"text-yellow-500 text-xl border-r-1 py-2 pr-2",children:"$"}),(0,n.jsx)("div",{className:"min-w-12 pl-2",children:t})]})]})},u=e=>{let{label:r,onClick:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{className:"bg-gray-700 p-2 px-4 rounded-sm text-white text-black border-2 border-white font-bold cursor-pointer",onClick:t,children:r})})},m=e=>{let{data:r}=e;return(0,l.useEffect)(()=>{},[r]),(0,n.jsxs)("table",{className:"table-fixed w-[99%] rounded border-separate border border-gray-400 border-spacing-0 ",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border border-yellow-500 text-yellow-500 p-1",children:"Bet"}),(0,n.jsx)("th",{className:"border border-yellow-500 text-yellow-500 p-1",children:"Win/Lose"}),(0,n.jsx)("th",{className:"border border-yellow-500 text-yellow-500 p-1",children:"Balance"})]})}),(0,n.jsx)("tbody",{children:r.length>0?(0,n.jsx)(n.Fragment,{children:r.map((e,r)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border border-gray-400",children:e.bet}),e.lose&&(0,n.jsx)("th",{className:"border border-gray-400 text-red-500",children:e.lose}),e.win&&(0,n.jsx)("th",{className:"border border-gray-400 text-green-500",children:e.win}),(0,n.jsx)("th",{className:"border border-gray-400",children:e.balance})]},r))}):(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{className:"border border-gray-400 ",children:"-"}),(0,n.jsx)("th",{className:"border border-gray-400",children:"-"}),(0,n.jsx)("th",{className:"border border-gray-400",children:"-"})]})})})]})},x="http://localhost:4000";function h(){let e=(0,l.useRef)(),[r,t]=(0,l.useState)(1e4),[s,a]=(0,l.useState)(""),[o,h]=(0,l.useState)(0),[b,f]=(0,l.useState)(0),[p,w]=(0,l.useState)(!1),[g,j]=(0,l.useState)({animation:"idle",number:0}),[N,y]=(0,l.useState)(!1),[v,k]=(0,l.useState)([]),R=async()=>{if(0>=T(s))return;if(T(s)>r){e.current.showAlert("maxlimit");return}w(!0),j(e=>({...e,animation:"rolling"})),await new Promise(e=>setTimeout(e,4e3));let n=Math.random().toString(36).substring(2);console.log(x);let l=await fetch("".concat(x,"/roll-dice"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientSeed:n})}),o=await l.json(),d=o.diceValue;j(e=>({...e,animation:"result",number:o.diceValue})),await new Promise(e=>setTimeout(e,2e3));let c={bet:s},i=T(s);if(d>3){h(e=>e+i),c.win=S(2*i),e.current.showAlert("won");let n=r+i;c.balance=S(n),t(n)}else{c.lose=S(i),f(e=>e+i),e.current.showAlert("lose");let n=r-i;c.balance=S(n),t(n)}k([c,...v]),w(!1),a(""),await new Promise(e=>setTimeout(e,2e3)),j(e=>({...e,animation:"idle",number:0}))},T=e=>Number(e.replace(/,/g,"")),S=e=>isNaN(e)||""===e?"":Number(e).toLocaleString();return(0,n.jsxs)("div",{className:"max-w-[1100px] mx-auto grid grid-rows-[20px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:[(0,n.jsxs)("div",{className:"relative flex justify-between  w-full",children:[(0,n.jsx)(u,{label:"Stats",onClick:()=>y(!N)}),N&&(0,n.jsxs)("div",{className:"absolute top-14 border-2 rounded p-1 md:p-5 bg-gray-700\n            transition-opacity duration-300 ".concat(N?"opacity-100 w-full":"opacity-0 w-auto"),children:[(0,n.jsxs)("div",{className:"flex justify-between text-right pb-3 pr-2",children:[(0,n.jsx)("span",{className:"text-yellow-500 font-bold text-md md:text-lg",children:"Game Stats :"}),(0,n.jsx)("span",{onClick:()=>y(!N),className:"font-bold",children:"X"})]}),(0,n.jsxs)("div",{className:" flex flex-row justify-between ",children:[(0,n.jsx)(i,{label:"Profit Gained",amount:S(o)}),(0,n.jsx)(i,{label:"Loss incurred",amount:S(b)})]}),(0,n.jsxs)("div",{className:"pt-3",children:[(0,n.jsx)("h3",{className:"font-bold font-2xl",children:"History"}),(0,n.jsx)("div",{className:" mt-2 max-h-48 overflow-y-auto ",children:(0,n.jsx)(m,{data:v})})]})]}),(0,n.jsx)(c,{ref:e}),(0,n.jsx)("div",{children:(0,n.jsx)(i,{amount:S(r)})})]}),(0,n.jsxs)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start w-full",children:[(0,n.jsxs)("div",{className:"w-full flex flex-col md:flex-row items-center",children:[(0,n.jsxs)("div",{className:"w-full flex flex-col-reverse md:flex-col ",children:[(0,n.jsxs)("div",{className:"flex justify-around",children:[(0,n.jsx)("span",{className:"".concat("rolling"==g.animation?"animate-bounce":""),children:"1"}),(0,n.jsx)("span",{className:"".concat("rolling"==g.animation?"animate-bounce":""),children:"2"}),(0,n.jsx)("span",{className:"".concat("rolling"==g.animation?"animate-bounce":""),children:"3"})]}),(0,n.jsx)("div",{className:"w-full border-gray-600 border-4 md:border-r-0 md:pr-0 rounded-full md:rounded-tr-none md:rounded-br-none p-1 ".concat("rolling"==g.animation?"animate-pulse":""),children:(0,n.jsx)("div",{className:"box-content bg-red-500 h-2 my-2 mr-2 ml-2 md:mr-0 rounded-full md:rounded-tr-none md:rounded-br-none"})})]}),(0,n.jsx)("div",{className:"flex justify-center py-3",children:(0,n.jsx)(d,{number:3,state:g})}),(0,n.jsxs)("div",{className:"w-full",children:[(0,n.jsxs)("div",{className:"flex justify-around",children:[(0,n.jsx)("span",{className:"".concat("rolling"==g.animation?"animate-bounce":""),children:"4"}),(0,n.jsx)("span",{className:"".concat("rolling"==g.animation?"animate-bounce":""),children:"5"}),(0,n.jsx)("span",{className:"".concat("rolling"==g.animation?"animate-bounce":""),children:"6"})]}),(0,n.jsx)("div",{className:"w-full border-4 md:border-l-0 md:pl-0 border-gray-600 rounded-full md:rounded-tl-none md:rounded-bl-none p-1 ".concat("rolling"==g.animation?"animate-pulse":""),children:(0,n.jsx)("div",{className:"box-content bg-green-500 h-2 my-2 mr-2 ml-2 md:ml-0 rounded-full md:rounded-tl-none md:rounded-bl-none"})})]})]}),(0,n.jsx)("div",{className:"flex gap-4 items-center flex-col  h-24 w-24 sm:flex-row",children:v.length>0&&(0,n.jsx)("div",{className:"border-yellow-500 border-2 bg-gray-700 h-full w-full overflow-y-auto p-1 rounded",children:v.map((e,r)=>(0,n.jsxs)("div",{children:[e.win&&(0,n.jsxs)("div",{className:"text-green-500",children:["$ ",e.win]}),e.lose&&(0,n.jsxs)("div",{className:"text-red-500",children:["$ ",e.lose]})]},r))})})]}),(0,n.jsxs)("footer",{className:"row-start-3 flex gap-6 flex-wrap items-center justify-center",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("input",{className:"border-1 p-2 rounded-tl-sm rounded-bl-sm bg-gray-800",type:"tel",placeholder:"Enter Bet Amount",value:s,onChange:e=>{""==e.target.value?a(""):(T(e.target.value),a(S(T(e.target.value)))),console.log(typeof e.target.value)},disabled:p}),(0,n.jsx)("span",{className:"text-yellow-500 text-xl border-1 border-white rounded-tr-sm rounded-br-sm p-2 bg-gray-800 p-1 cursor-default",children:"$"})]}),(0,n.jsx)("button",{className:"bg-yellow-500 p-2 px-4 rounded-sm text-black border-2 border-white font-bold cursor-pointer",onClick:R,disabled:p,children:"Roll Dice"})]})]})}},9260:(e,r,t)=>{Promise.resolve().then(t.bind(t,4689))}},e=>{var r=r=>e(e.s=r);e.O(0,[367,831,592,716,441,587,358],()=>r(9260)),_N_E=e.O()}]);