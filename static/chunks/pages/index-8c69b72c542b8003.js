(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7802)}])},7802:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return V}});var a=t(5893),l=t(7294);let i=(0,l.createContext)();var n=t(5675),r=t.n(n),d=function(){return(0,a.jsx)("div",{className:"flex pl-40 h-16 bg-gradient-to-r from-teal-500 to-teal-800 w-full justify-center border-teal-100 border-t-2",children:(0,a.jsx)("h5",{className:"flex items-center justify-center text-white",children:"Footer"})})};t(9008);var c=t(1452),m=t(97),o=t(5837),x=t(8357),h=t(7938),u=t(2911),f=t(7714),p=t(682),g=t(6496),j=t(6610),N=t(3687),w=t(5948),v=JSON.parse('[{"id":1,"name":"Ross Gellar","image":"/images/man1.png"},{"id":2,"name":"Chandler Bing","image":"/images/man2.png"},{"id":3,"name":"Phoebe Buffay","image":"/images/woman1.png"}]'),b=t(4080),y=t(883),T=t(7734),S=t(8368),k=function(e){let{data:s,index:t}=e;console.log(v);let{modalOpen:n,setModalOpen:d}=(0,l.useContext)(i),[c,k]=(0,l.useState)(null),[C,Z]=(0,l.useState)(null),[F,E]=(0,l.useState)(v[0]),[_,I]=(0,l.useState)(""),L=""===_?v:v.filter(e=>e.name.toLowerCase().includes(_.toLowerCase()));function P(e){return console.log(e),new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}let U=s.updates,D="No Updates";(null==U?void 0:U.length)>0&&(D=new Date(U[U.length-1].timestamp).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})),console.log(D);let B=e=>{k(e),d(!0),console.log(e)},O=()=>{d(!1),Z(null)};return console.log(c),console.log(n),(0,a.jsxs)(a.Fragment,{children:[n&&C===t?(0,a.jsx)(b.u,{appear:!0,show:n,as:l.Fragment,children:(0,a.jsxs)(y.V,{as:"div",className:"relative z-10",onClose:O,children:[(0,a.jsx)(b.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)("div",{className:"fixed inset-0 bg-black/35"})}),(0,a.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,a.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,a.jsx)(b.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,a.jsxs)(y.V.Panel,{className:"w-full max-w-md min-w-[50%] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[(0,a.jsxs)(y.V.Title,{as:"h3",className:"text-2xl font-medium leading-6 text-slate-900 pb-3",children:["Lead #",s.leadNum," - ",s.custName]}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsxs)("div",{className:"my-5 flex flex-row",children:[(0,a.jsx)("div",{children:(0,a.jsx)(m.Z,{className:"w-5 h-5 me-2 mt-1 text-slate-900"})}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{for:"first-name",class:"block text-sm font-medium leading-6 text-slate-900",children:"Customer Name"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("input",{type:"text",name:"customer-name",id:"customer-name",className:"block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 sm:max-w-md",value:null==s?void 0:s.custName})})]})]}),(0,a.jsxs)("div",{className:"my-5 flex flex-row",children:[(0,a.jsx)("div",{children:(0,a.jsx)(o.Z,{className:"w-5 h-5 me-2 mt-1 text-slate-900"})}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{for:"first-name",className:"block text-sm font-medium leading-6 text-slate-900",children:"Estimated Job Total"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsxs)("div",{className:"flex rounded-md shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-teal-600 sm:max-w-md",children:[(0,a.jsx)("span",{className:"flex select-none items-center pl-3 text-slate-500 sm:text-sm",children:"$"}),(0,a.jsx)("input",{type:"text",name:"job-estimate",id:"job-estimate",className:"block flex-1 border-0 bg-transparent py-1.5 pl-1 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm sm:leading-6",value:null==s?void 0:s.estTotal})]})})]})]}),(0,a.jsxs)("div",{className:"my-5 flex flex-row",children:[(0,a.jsx)("div",{children:(0,a.jsx)(x.Z,{className:"w-5 h-5 me-2 mt-1 text-slate-900"})}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{for:"assigned-employee",className:"block text-sm font-medium leading-6 text-slate-900",children:"Assigned Employee"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)(T.h,{name:"assignedEmployee",value:F,onChange:E,children:(0,a.jsxs)("div",{className:"relative mt-1 sm:max-w-md rounded-md shadow-sm ring-1 ring-inset ring-slate-300",children:[(0,a.jsxs)("div",{className:"relative w-full cursor-default overflow-hidden rounded-md ring-1 ring-inset ring-slate-300 bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm",children:[(0,a.jsx)(T.h.Input,{className:"w-full border-none pl-3 py-2 pr-10 text-sm leading-5 text-slate-900 focus:ring-0",onChange:e=>I(e.target.value),displayValue:e=>e.name}),(0,a.jsx)(T.h.Button,{className:"absolute inset-y-0 right-0 flex items-center pr-2",children:(0,a.jsx)(h.Z,{className:"h-5 w-5 text-slate-400","aria-hidden":"true"})})]}),(0,a.jsx)(b.u,{as:l.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterLeave:()=>I(""),children:(0,a.jsx)(T.h.Options,{className:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",children:0===L.length&&""!==_?(0,a.jsx)("div",{className:"relative cursor-default select-none px-4 py-2 text-slate-900",children:"Nothing found."}):L.map(e=>(0,a.jsx)(T.h.Option,{className:e=>{let{active:s}=e;return"relative cursor-default select-none pl-10 pr-4 ".concat(s?"bg-teal-600 text-white":"text-slate-900")},value:e,children:s=>{let{selected:t,active:l}=s;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{className:"block truncate ".concat(t?"font-medium":"font-normal"," group flex w-full items-center rounded-md px-2 py-2 text-sm\n                                              }"),children:[(0,a.jsx)(r(),{src:e.image,width:"36",height:"36",objectFit:"cover",className:"rounded-full ",alt:"".concat(e.name," image")}),(0,a.jsx)("span",{className:"pl-2",children:e.name})]}),t?(0,a.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 ".concat(l?"text-white":"text-teal-600"),children:(0,a.jsx)(u.Z,{className:"h-5 w-5","aria-hidden":"true"})}):null]})}},e.id))})})]})})})]})]}),(0,a.jsxs)("div",{className:"my-5 flex flex-row",children:[(0,a.jsx)("div",{children:(0,a.jsx)(f.Z,{className:"w-5 h-5 me-2 mt-1 text-slate-900"})}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{for:"notes",className:"block text-sm font-medium leading-6 text-slate-900",children:"Notes"}),(0,a.jsx)("div",{className:"mt-1",children:(0,a.jsx)("textarea",{id:"about",name:"about",rows:4,className:"block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6",defaultValue:"",placeholder:"Add any details..."})})]})]}),(0,a.jsxs)("div",{className:"my-5 flex flex-row",children:[(0,a.jsx)("div",{children:(0,a.jsx)(p.Z,{className:"w-5 h-5 me-2 mt-1 text-slate-900"})}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("label",{for:"messages",className:"block text-sm font-medium leading-6 text-slate-900",children:"Messages"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsx)("input",{type:"text",name:"messages",id:"messages",className:"block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6 sm:max-w-md",placeholder:"Write a comment..."}),(0,a.jsx)("div",{className:"my-2 p-3 bg-slate-100 ring-1 ring-slate-300 rounded-md flex flex-col",children:s.chat.map(e=>{let t=P(e.date);return(0,a.jsxs)("div",{className:"mb-3 flex flex-col col-auto ".concat(e.author===s.assignedTo?"items-end":"items-start"),children:[(0,a.jsx)("div",{style:{maxWidth:"80%"},className:"text-me leading-6 rounded-md py-2 px-4 text-slate-900 text-sm ".concat(e.author===s.assignedTo?" bg-teal-300":"bg-slate-300"),children:e.text}),(0,a.jsx)("div",{className:"mt-1 mx-1 text-xs text-slate-900",children:v.map((s,l)=>(0,a.jsx)(a.Fragment,{children:e.author===s.id?(0,a.jsxs)("span",{children:[(0,a.jsx)("span",{className:"font-bold",children:s.name})," ",t]},l):""}))})]},e.id)})})]})]})]}),(0,a.jsxs)("div",{className:"my-5 flex flex-row",children:[(0,a.jsx)("div",{children:(0,a.jsx)(g.Z,{className:"w-5 h-5 me-2 mt-1 text-slate-900"})}),(0,a.jsx)("div",{className:"w-full",children:(0,a.jsx)(S.p,{children:e=>{var t;let{open:l}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(S.p.Button,{className:"flex text-sm font-medium text-slate-900 leading-6 mb-2 items-center",children:[(0,a.jsx)("span",{children:"Activity"}),(0,a.jsx)(j.Z,{className:"".concat(l?"rotate-180 transform":""," h-4 w-4 text-slate-900 ms-2")})]}),(0,a.jsx)(S.p.Panel,{children:null===(t=s.updates)||void 0===t?void 0:t.map((e,s)=>{let t=P(e.timestamp);return(0,a.jsx)("div",{className:"text-xs pb-1",children:(0,a.jsxs)("p",{children:[(0,a.jsx)("span",{className:"font-bold",children:e.type})," - ",t]})},s)})})]})}})})]})]}),(0,a.jsxs)("div",{className:"mt-4 flex justify-end",children:[(0,a.jsx)("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:()=>O(),children:"Close"}),(0,a.jsx)("button",{className:"bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",children:"Save Changes"})]})]})})})})]})}):null,(0,a.jsx)(w._l,{index:t,draggableId:s.id.toString(),children:e=>(0,a.jsxs)("div",{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,className:"bg-white rounded-md p-3 mt-3 mx-2","data-id":t,onClick:()=>{B(s),Z(t)},children:[(0,a.jsxs)("div",{className:"flex justify-between items-end mb-2",children:[(0,a.jsxs)("h5",{className:"text-me text-lg leading-6 text-slate-800",children:["Lead #",s.leadNum]}),(0,a.jsx)("ul",{className:"flex space-x-3",children:v.map((e,t)=>(0,a.jsx)(a.Fragment,{children:s.assignedTo===e.id?(0,a.jsx)("li",{children:(0,a.jsx)(r(),{src:e.image,width:"36",height:"36",objectFit:"cover",className:"rounded-full",alt:"".concat(e.name," image")})},t):""}))})]}),(0,a.jsx)("h5",{className:"text-me mb-2 text-lg leading-6 text-slate-800",children:s.custName}),(0,a.jsxs)("h5",{className:"text-me mb-2 text-lg leading-6 text-slate-800",children:["$",s.estTotal," (est job total)"]}),(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("div",{className:"flex space-x-6 items-center",children:[(0,a.jsxs)("span",{className:"flex space-x-1 items-center",children:[(0,a.jsx)(p.Z,{className:"w-4 h-4 text-slate-500"}),(0,a.jsx)("span",{children:s.chat.length})]}),(0,a.jsxs)("span",{className:"flex space-x-1 items-center",children:[(0,a.jsx)(N.Z,{className:"w-4 h-4 text-slate-500"}),(0,a.jsx)("span",{children:s.attachment})]}),s.notes?(0,a.jsx)("span",{className:"flex space-x-1 items-center",children:(0,a.jsx)(f.Z,{className:"w-4 h-4 text-slate-500"})}):""]})}),(0,a.jsxs)("h5",{className:"text-me text-sm leading-6 text-slate-500",children:["Last Update: ",D]})]})})]})},C=JSON.parse('[{"name":"New Leads","items":[{"id":1,"priority":0,"leadNum":1,"custName":"Peter Parker","estTotal":1000,"chat":[{"id":1,"text":"This is a sample message","author":1,"date":"2024-03-06T00:00:00.000"},{"id":2,"text":"This is another sample message","author":2,"date":"2024-03-06T00:00:00.000"}],"attachment":2,"assignedTo":1,"notes":"This is a note. It is not long","updates":[{"id":1,"type":"Editted Customer Name","timestamp":"2024-03-07T15:56:00.000"},{"id":1,"type":"Editted Estimated Job Total","timestamp":"2024-03-08T10:27:00.000"}]},{"id":2,"priority":0,"leadNum":2,"custName":"Venelipe Vee","estTotal":1250,"chat":[{"id":1,"text":"This is a sample message","author":1,"date":"2024-03-06T00:00:00.000"},{"id":2,"text":"This is another sample message","author":2,"date":"2024-03-06T00:00:00.000"}],"attachment":0,"assignedTo":2,"statusUpdated":"2024-03-05"}]},{"name":"First Contact","items":[{"id":3,"priority":0,"leadNum":3,"custName":"Cance Jones","estTotal":7000,"chat":[{"id":1,"text":"This is a sample message","author":1,"date":"2024-03-06T00:00:00.000"},{"id":2,"text":"This is another sample message","author":2,"date":"2024-03-06T00:00:00.000"}],"attachment":1,"assignedTo":3,"statusUpdated":"2024-03-05"}]},{"name":"Second Contact","items":[{"id":4,"priority":0,"leadNum":4,"custName":"Genny Panhorst","estTotal":12500,"chat":[{"id":1,"text":"This is a sample message","author":1,"date":"2024-03-06T00:00:00.000"},{"id":2,"text":"This is another sample message","author":2,"date":"2024-03-06T00:00:00.000"}],"attachment":12,"assignedTo":3,"statusUpdated":"2024-03-05"},{"id":5,"priority":0,"leadNum":5,"custName":"Geo Storm","estTotal":2000,"chat":[{"id":1,"text":"This is a sample message","author":1,"date":"2024-03-06T00:00:00.000"},{"id":2,"text":"This is another sample message","author":2,"date":"2024-03-06T00:00:00.000"}],"attachment":4,"assignedTo":1,"statusUpdated":"2024-03-05"}]},{"name":"Third Contact","items":[{"id":6,"priority":0,"leadNum":6,"custName":"Benson Boon","estTotal":1500,"chat":[{"id":1,"text":"This is a sample message","author":1,"date":"2024-03-06T15:23:23.000"},{"id":2,"text":"This is another sample message","author":2,"date":"2024-03-06T15:37:37.000"},{"id":2,"text":"This is a really long message, with some more words, and then even more. I need some more still after that, and then perhaps a few additional ones.","author":2,"date":"2024-03-06T00:00:00.000"}],"attachment":6,"assignedTo":2,"statusUpdated":"2024-03-05"},{"id":7,"priority":0,"leadNum":7,"custName":"Ash Wednesday","estTotal":15000,"chat":[{"id":1,"text":"This is a sample message","author":1,"date":"2024-03-06T00:00:00.000"},{"id":2,"text":"This is another sample message","author":2,"date":"2024-03-06T00:00:00.000"}],"attachment":3,"assignedTo":1,"statusUpdated":"2024-03-05"},{"id":8,"priority":0,"leadNum":8,"custName":"Mickey Mantle","estTotal":12000,"chat":[{"id":1,"text":"This is a sample message","author":1,"date":"2024-03-06T00:00:00.000"},{"id":2,"text":"This is another sample message","author":2,"date":"2024-03-06T00:00:00.000"}],"attachment":4,"assignedTo":2,"statusUpdated":"2024-03-05"}]},{"name":"Won","items":[]},{"name":"Lost","items":[]}]');function Z(){let[e,s]=(0,l.useState)(!1),[t,i]=(0,l.useState)(C),[n,r]=(0,l.useState)(!1),[d,m]=(0,l.useState)(0),[o,x]=(0,l.useState)(!1),[h,u]=(0,l.useState)(!1),[f,p]=(0,l.useState)(null);(0,l.useEffect)(()=>{s(!0)},[]);let g=e=>{if(console.log(e.target.attributes),13===e.keyCode){let s=e.target.value;if(0===s.length)r(!1);else{let a=e.target.attributes["data-id"].value,l={id:"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var s=16*Math.random()|0;return("x"==e?s:3&s|8).toString(16)}),title:s,priority:0,chat:0,attachment:0,assignees:[]};t[a].items.push(l),i(t),r(!1),e.target.value=""}}};return(0,a.jsx)("main",{className:"pl-40 pt-16",children:(0,a.jsxs)("div",{className:"p-10 flex flex-col overflow-auto h-[calc(100vh-128px)]",children:[(0,a.jsx)("div",{className:"flex justify-initial justify-between",children:(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)("h4",{className:"text-4xl font-bold text-slate-600",children:"Leads"})})}),e&&(0,a.jsx)(w.Z5,{onDragEnd:e=>{var s=t[parseInt(e.source.droppableId)].items[e.source.index];t[parseInt(e.source.droppableId)].items.splice(e.source.index,1),t[parseInt(e.destination.droppableId)].items.splice(e.destination.index,0,s),i(t)},children:(0,a.jsx)("div",{className:"grid grid-cols-6 gap-5 my-5",children:C.map((e,s)=>(0,a.jsx)("div",{children:(0,a.jsx)(w.bK,{droppableId:s.toString(),children:(t,l)=>(0,a.jsx)("div",{...t.droppableProps,ref:t.innerRef,children:(0,a.jsxs)("div",{className:"bg-slate-100 rounded-md shadow-md flex flex-col relative overflow-hidden ".concat(l.isDraggingOver&&"bg-green-100"),children:[(0,a.jsx)("span",{className:"w-full h-1 bg-gradient-to-r from-slate-600 to-slate-400 absolute inset-x-0 top-0"}),(0,a.jsxs)("h4",{className:"p-3 flex justify-between items-center mb-2",children:[(0,a.jsx)("span",{className:"text-2xl text-slate-600",children:e.name}),(0,a.jsx)("span",{className:"text-white bg-teal-600 rounded-full w-8 h-8 flex justify-center items-center font-bold",children:e.items.length})]}),(0,a.jsxs)("div",{className:"overflow-y-auto h-auto",children:[e.items.length>0&&e.items.map((e,s)=>(0,a.jsx)(k,{data:e,index:s,className:"m-3"},e.id)),t.placeholder]}),n&&d===s?(0,a.jsx)("div",{className:"p-3",children:(0,a.jsx)("textarea",{className:"border-slate-300 rounded focus:ring-purple-400",rows:3,placeholder:"Task info","data-id":s,onKeyDown:e=>g(e)})}):(0,a.jsxs)("button",{className:"flex justify-center items-center my-3 space-x-2 text-lg",onClick:()=>{m(s),r(!0)},children:[(0,a.jsx)("span",{children:"Add task"}),(0,a.jsx)(c.Z,{className:"w-5 h-5 text-slate-500"})]})]})})})},e.name))})})]})})}var F=t(341),E=t(9871),_=t(2281),I=t(2187),L=function(e){return(0,a.jsxs)("div",{className:"fixed inset-y-0 left-0 bg-white w-40",children:[(0,a.jsx)("h1",{className:"flex items-center justify-center text-xl h-16 bg-teal-600 text-white font-bold",children:"Build It Right"}),(0,a.jsxs)("ul",{className:"flex flex-col text-lg h-full",children:[(0,a.jsxs)("li",{className:"flex justify-center items-center flex-col py-7 text-stone-500",children:[(0,a.jsx)(x.Z,{className:"w-7 h-7"}),"Manage"]}),(0,a.jsxs)("li",{className:"flex justify-center items-center flex-col py-7 border-l-4 border-teal-500 text-teal-500 font-bold",children:[(0,a.jsx)(F.Z,{className:"w-7 h-7 text-teal-500"})," Leads"]}),(0,a.jsxs)("li",{className:"flex justify-center items-center flex-col py-7 text-stone-500",children:[(0,a.jsx)(E.Z,{className:"w-7 h-7"}),"Schedule"]}),(0,a.jsxs)("li",{className:"flex justify-center items-center flex-col py-7 text-stone-500",children:[(0,a.jsx)(_.Z,{className:"w-7 h-7"}),"Report"]}),(0,a.jsxs)("li",{className:"flex justify-center items-center flex-col py-7 text-stone-500 mt-auto mb-16",children:[(0,a.jsx)(I.Z,{className:"w-7 h-7"}),"Settings"]})]})]})},P=t(9633),U=t(624),D=t(4412),B=function(e){return(0,a.jsxs)("div",{className:"h-16 pl-40 fixed bg-gradient-to-r from-teal-500 to-teal-800 w-full flex items-center justify-between pr-5",children:[(0,a.jsxs)("div",{className:"flex px-5 items-center",children:[(0,a.jsx)(P.Z,{className:"w-5 h-5 text-white"}),(0,a.jsx)("input",{type:"text",placeholder:"Search for tasks ...",className:"bg-transparent border-0 text-white placeholder-stone-200 outline-none focus:ring-0 text-lg"})]}),(0,a.jsxs)("div",{className:"flex space-x-5",children:[(0,a.jsx)(U.Z,{className:"w-7 h-7 text-white"}),(0,a.jsx)(D.Z,{className:"w-7 h-7 text-white"}),(0,a.jsxs)("div",{className:"flex items-center text-white space-x-4",children:[(0,a.jsx)("h3",{className:"font-bold mr-3",children:"M. John Doe"}),(0,a.jsx)(r(),{src:"https://randomuser.me/api/portraits/men/75.jpg",width:"36",height:"36",objectFit:"cover",className:"rounded-full",alt:"random user image"})]})]})]})},O=function(e){let{children:s}=e;return(0,a.jsxs)("div",{className:"min-w-full min-h-screen h-screen overflow-hidden bg-teal-100",children:[(0,a.jsx)(B,{}),(0,a.jsx)(L,{}),(0,a.jsx)(Z,{children:s}),(0,a.jsx)(d,{})]})};function V(){let[e,s]=(0,l.useState)(!1);return(0,a.jsx)(i.Provider,{value:{modalOpen:e,setModalOpen:s},children:(0,a.jsx)(O,{})})}}},function(e){e.O(0,[630,46,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);