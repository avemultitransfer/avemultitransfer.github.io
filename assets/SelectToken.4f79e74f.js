import{_ as M,T as O,g as D,f as E,a as R}from"./TokenIcon.ca48f3dc.js";import{m as j,l as q,u as U,a as W,j as k,c as z,p as G,r as v,o as l,g as f,e as m,d as s,t as i,F as I,k as y,h as n,w as C,n as H,b,B as p,i as J,q as g,T as K}from"./index.4a954fac.js";const P={class:"content"},Q={class:"p-16"},X={class:"network"},Y={class:"network-list"},Z=["onClick"],ee={class:"item-left"},te={class:"left-content"},oe={class:"token-name"},se={class:"token-address"},ne={class:"item-right"},ae={class:"item-right-left"},ce={class:"qty"},le={class:"amount"},ie={class:"item-right-right"},re={__name:"SelectToken",setup(de){const x=j("global"),w=q(),a=U();W(),k([]);const d=k([]),c=k(""),T=z(()=>c.value?c.value.startsWith("0x")?d.value.filter(t=>t.address.toLowerCase()==c.value.toLowerCase()):d.value.filter(t=>t.symbol.toLowerCase().indexOf(c.value.toLowerCase())>-1):d.value),u=x.cfg.allowChainList,r=k(u.find(t=>t.chainId==a.chainId)?u.find(t=>t.chainId==a.chainId):u[0]);async function $(t){r.value.chain!=t.chain&&(r.value=t,L(),g.wallet.switchNetwork(r.value.chainId))}async function L(){const t=K.loading({message:"Loading...",forbidClick:!0,duration:0}),_=await g.debank.getTokenList(a.walletAddress,r.value.chain);let h=[];for(let e of _.data.data)e.token=="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(e.token=g.wallet.MAIN_COIN_ADDRESS),new RegExp("^0x.*$","gi").test(e.token)&&e.value>0&&e.risk_score<60&&e.risk_level>=0&&e.flag!=="blacklist"&&e.symbol!==""&&e.flag!=="lp"&&h.push({address:e.token.toLowerCase(),tokenId:`${e.token}-${e.chain}`.toLowerCase(),chain:e.chain.toLowerCase(),symbol:e.symbol,decimals:e.decimals,icon:R(e.chain.toLowerCase(),e.token.toLowerCase()),amount:e.value,price:e.current_price_usd});d.value=h,t.clear()}function N(t){a.token=t,w.push("/")}function S(){w.push("/")}async function B(){a.isConnectWallet&&await L()}return G(()=>{console.log("onMounted"),B()}),(t,_)=>{const h=v("van-search"),e=v("van-icon"),F=v("van-cell"),V=v("van-list");return l(),f("div",null,[m(h,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=o=>c.value=o),shape:"round","show-action":"",placeholder:t.$t("searchTokenContractOrName"),"action-text":t.$t("cancel"),onCancel:S},null,8,["modelValue","placeholder","action-text"]),s("div",P,[s("div",Q,i(t.$t("myAssets")),1),s("div",X,[s("ul",Y,[(l(!0),f(I,null,y(n(u),o=>(l(),f("li",{class:H(r.value.chain==o.chain?"network-selected":""),onClick:A=>$(o)},i(o.chain.toUpperCase()),11,Z))),256))])]),s("div",null,[m(V,{"finished-text":t.$t("noMore"),class:"token-list"},{default:C(()=>[(l(!0),f(I,null,y(n(T),o=>(l(),b(F,{class:"item",key:o,onClick:A=>N(o)},{title:C(()=>[s("div",ee,[m(O,{class:"token-icon",tokenIcon:o.icon,chainIcon:n(D)(o.chain)},null,8,["tokenIcon","chainIcon"]),s("div",te,[s("div",oe,i(o.symbol),1),s("div",se,i(n(E)(o.address)),1)])])]),value:C(()=>[s("div",ne,[s("div",ae,[s("div",ce,i(n(p)(o.amount).toString().indexOf(".")==-1?n(p)(o.amount):n(p)(o.amount).toFixed(6)),1),s("div",le,"$"+i(n(p)(o.amount).multipliedBy(o.price).toFixed(2)),1)]),s("div",ie,[n(a).token&&n(a).token.address==o.address?(l(),b(e,{key:0,name:"success",color:"#3F80F7"})):J("",!0)])])]),_:2},1032,["onClick"]))),128))]),_:1},8,["finished-text"])])])])}}},he=M(re,[["__scopeId","data-v-ba626642"]]);export{he as default};
