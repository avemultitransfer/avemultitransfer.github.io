import{_ as D,T as R,g as j,f as q,a as z}from"./TokenIcon.c6098c38.js";import{k as U,i as W,j as J,u as G,l as k,c as L,m as H,r as f,o as d,f as v,d as p,b as o,t as u,F as y,n as B,g as a,w as g,bq as K,a as A,B as h,h as P,T as Q,p as w}from"./index.013eaa45.js";const X={class:"content"},Y={class:"p-16"},Z={class:"network"},ee={class:"network-list"},te=["onClick"],se={class:"item-left"},oe={class:"left-content"},ae={class:"token-name"},ne={class:"token-address"},le={class:"item-right"},ce={class:"item-right-left"},ie={class:"qty"},re={class:"amount"},de={class:"item-right-right"},ue={__name:"SelectToken",setup(_e){const T=U("global"),C=W(),l=J();G();const F=k([]),_=k([]),c=k(""),I=L(()=>c.value?c.value.startsWith("0x")?_.value.filter(t=>t.address.toLowerCase()==c.value.toLowerCase()):_.value.filter(t=>t.symbol.toLowerCase().indexOf(c.value.toLowerCase())>-1):_.value),b={text:"BSC",value:"bsc",isAllow:!0},i=k({text:b.text,value:b.value,isAllow:b.isAllow}),$=L(()=>{let t=[b];for(let n of F.value){let r=T.cfg.allowChainList.some(m=>m.chain==n.chain),e={text:n.chain.toUpperCase(),value:n.chain,isAllow:r};t.push(e)}return t});async function N(t){!t.isAllow||i.value.value!=t.value&&(i.value=t,x())}async function x(){if(i.value.value=="tbsc"){_.value=[{address:"0x0000000000000000000000000000000000000000",tokenId:"0x0000000000000000000000000000000000000000-bsc",chain:"bsc",symbol:"BNB",decimals:18,icon:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0x0000000000000000000000000000000000000000.png",amount:.19955571,price:290.2},{address:"0x227A05695F10B591731Fd925396b548a45067798",tokenId:"0x227A05695F10B591731Fd925396b548a45067798-bsc",chain:"bsc",symbol:"JF",decimals:18,icon:"https://static.debank.com/image/bsc_token/logo_url/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a/74d0d0f5a5fcf76ab35b89b29cb9c95e.png",amount:99999,price:1},{address:"0xfBFB9B43aE76322a804b69A5f36671312541dd0F",tokenId:"0xfBFB9B43aE76322a804b69A5f36671312541dd0F-bsc",chain:"bsc",symbol:"BT",decimals:18,icon:"https://static.debank.com/image/bsc_token/logo_url/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a/74d0d0f5a5fcf76ab35b89b29cb9c95e.png",amount:99999,price:1}];return}let t=[];const n=Q.loading({message:"Loading...",forbidClick:!0,duration:0});i.value.value=="all"?t=await w.debank.getAllTokenList(l.walletAddress):t=await w.debank.getTokenList(l.walletAddress,i.value.value);let r=[];for(let e of t.data.data)e.token=="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(e.token=w.wallet.MAIN_COIN_ADDRESS),new RegExp("^0x.*$","gi").test(e.token)&&e.value>0&&e.risk_score<60&&e.risk_level>=0&&e.flag!=="blacklist"&&e.symbol!==""&&e.flag!=="lp"&&r.push({address:e.token.toLowerCase(),tokenId:`${e.token}-${e.chain}`.toLowerCase(),chain:e.chain.toLowerCase(),symbol:e.symbol,decimals:e.decimals,icon:z(e.chain.toLowerCase(),e.token.toLowerCase()),amount:e.value,price:e.current_price_usd});_.value=r,n.clear()}function S(t){l.token=t,C.push("/")}function V(){C.push("/")}async function E(){l.isConnectWallet&&await x()}return H(()=>{console.log("onMounted"),E()}),(t,n)=>{const r=f("van-search"),e=f("van-icon"),m=f("van-cell"),M=f("van-list");return d(),v("div",null,[p(r,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=s=>c.value=s),shape:"round","show-action":"",placeholder:t.$t("searchTokenContractOrName"),"action-text":t.$t("cancel"),onCancel:V},null,8,["modelValue","placeholder","action-text"]),o("div",X,[o("div",Y,u(t.$t("myAssets")),1),o("div",Z,[o("ul",ee,[(d(!0),v(y,null,B(a($),s=>(d(),v("li",{class:K(i.value.value==s.value?"network-selected":""),onClick:O=>N(s)},u(s.text),11,te))),256))])]),o("div",null,[p(M,{"finished-text":t.$t("noMore"),class:"token-list"},{default:g(()=>[(d(!0),v(y,null,B(a(I),s=>(d(),A(m,{class:"item",key:s,onClick:O=>S(s)},{title:g(()=>[o("div",se,[p(R,{class:"token-icon",tokenIcon:s.icon,chainIcon:a(j)(s.chain)},null,8,["tokenIcon","chainIcon"]),o("div",oe,[o("div",ae,u(s.symbol),1),o("div",ne,u(a(q)(s.address)),1)])])]),value:g(()=>[o("div",le,[o("div",ce,[o("div",ie,u(a(h)(s.amount).toString().indexOf(".")==-1?a(h)(s.amount):a(h)(s.amount).toFixed(6)),1),o("div",re,"$"+u(a(h)(s.amount).multipliedBy(s.price).toFixed(2)),1)]),o("div",de,[a(l).token&&a(l).token.address==s.address?(d(),A(e,{key:0,name:"success",color:"#3F80F7"})):P("",!0)])])]),_:2},1032,["onClick"]))),128))]),_:1},8,["finished-text"])])])])}}},fe=D(ue,[["__scopeId","data-v-1bf63cf4"]]);export{fe as default};
