import{u as ye,c as j,r as b,o as u,a as k,w as f,b as s,t as a,d as c,e as w,f as o,g as p,h as D,F as E,i as Ee,j as De,k as Me,l as v,m as He,n as x,p as Oe,T as $,q as le,s as W,B as oe,D as Ue,v as Qe,x as We,y as je}from"./index.882af987.js";import{_ as ie,T as he,f as ge,c as ze,s as fe,g as pe}from"./TokenIcon.8ca25d8a.js";import{_ as T,d as Pe}from"./dayjs.min.9f0dadfb.js";const qe={class:"transfer-confirm-popup"},Ge={class:"title"},Je={class:"transfer-detail"},Ke={class:"item"},Xe={class:"title-left"},Ye={class:"content-left"},Ze={class:"item"},et={class:"title-left"},tt={class:"content-left"},nt={class:"item"},st={class:"title-left"},at={class:"content-left"},lt={class:"item"},ot={class:"title-left"},it={class:"content-left"},ut={class:"item"},rt={class:"title-left"},dt={class:"content-left"},ct={class:"item"},mt={class:"title-left"},vt={class:"content-left"},ft={class:"item"},pt={class:"title-left"},yt={class:"content-left"},ht={key:0,style:{color:"#f6465d","margin-left":"4px"}};const gt={class:"btn"},kt={__name:"TransferConfirm",props:{visable:{type:Boolean,default:!1},detail:{type:Object,default:{receiptTotalAmount:0,sentListQty:0,sentRate:0,gas:0,serviceFee:0,token:{symbol:"",address:"",amount:0,icon:""},balance:0,isCustomRule:!1,sentRuleType:0,sentAmount:0,realSentTotalAmount:0}}},emits:["update:visable","confirm"],setup(r,{emit:N}){const e=r,{t:i}=ye(),C=j(()=>{if(e.detail){if(e.detail.isCustomRule)return i("customRule");if(e.detail.sentRuleType==0)return`${e.detail.sentAmount} ${e.detail.token.symbol}/${i("address")}`;if(e.detail.sentRuleType==1)return i("dividedEqually",{amount:e.detail.sentAmount,symbol:e.detail.token.symbol})}return""});function F(){N("update:visable",!1)}return(g,A)=>{const I=b("van-notice-bar"),M=b("van-button"),z=b("van-popup");return u(),k(z,{show:r.visable,"close-on-click-overlay":!1,round:"",position:"bottom",closeable:"",onClose:F},{default:f(()=>[s("div",qe,[s("div",Ge,a(g.$t("multiTransferConfirm")),1),s("div",Je,[s("div",Ke,[s("div",Xe,a(g.$t("operationToken")),1),s("div",Ye,[c(he,{class:"token-icon",tokenIcon:r.detail.token.icon},null,8,["tokenIcon"]),w(" "+a(r.detail.token.symbol),1)])]),s("div",Ze,[s("div",et,a(g.$t("totalQuantity")),1),s("div",tt,a(o(C)),1)]),s("div",nt,[s("div",st,a(g.$t("countOfAddress")),1),s("div",at,a(r.detail.sentListQty),1)]),s("div",lt,[s("div",ot,a(g.$t("totalAmountOfTransfer")),1),s("div",it,a(`${r.detail.realSentTotalAmount} ${r.detail.token.symbol}`),1)]),s("div",ut,[s("div",rt,a(g.$t("serviceFee")),1),s("div",dt,a(`${r.detail.serviceFee} BNB`),1)]),s("div",ct,[s("div",mt,a(g.$t("estimateGas")),1),s("div",vt,a(`${r.detail.gas} BNB`),1)]),s("div",ft,[s("div",pt,a(g.$t("totalAmountOfReceived")),1),s("div",yt,[w(a(`${r.detail.receiptTotalAmount} ${r.detail.token.symbol}`),1),r.detail.sentRate!=0?(u(),p("span",ht,"( "+a(g.$t("expended",{percentage:r.detail.sentRate*100}))+")",1)):D("",!0)])])]),D("",!0),s("div",gt,[c(M,{class:"confirm-btn",type:"primary",onClick:A[0]||(A[0]=ue=>N("confirm"))},{default:f(()=>[w(a(g.$t("confirmSend")),1)]),_:1})])])]),_:1},8,["show"])}}},_t=ie(kt,[["__scopeId","data-v-1357063d"]]);const bt={class:"title"},$t={class:"body"},wt={class:"status-text"},St={key:0},Tt={key:1},Ct={key:2},At={key:3},Rt={class:"status-icon"},Lt={class:"tx"},Ft={key:1,class:"trade-hash"},It={__name:"ChainTrade",props:{tradeVisable:{type:Boolean,default:!1},status:{type:Number,default:0},tradeHash:{type:String,default:""},message:{type:String,default:""}},emits:["update:tradeVisable"],setup(r,{emit:N}){return(e,i)=>{const C=b("van-loading"),F=b("van-icon"),g=b("van-popup");return u(),k(g,{class:"dialog",show:r.tradeVisable,round:"","close-on-click-overlay":!1,onClose:i[1]||(i[1]=A=>N("update:tradeVisable"))},{default:f(()=>[s("div",bt,a(e.$t("transactionDetails")),1),s("div",$t,[s("div",wt,[r.status!=0?(u(),p(E,{key:0},[r.status==1?(u(),p("div",St,a(e.$t("sendingTransactionToBlockchain")),1)):r.status==2?(u(),p("div",Tt,a(e.$t("waitingForServiceSyncronizing")),1)):r.status==-1?(u(),p("div",Ct,a(r.message?r.message:e.$t("sendTransactionToBlockchainFailed")),1)):r.status==-2?(u(),p("div",At,a(e.$t("servicesyncronizingTimeout")),1)):D("",!0)],64)):D("",!0)]),s("div",Rt,[r.status==1||r.status==2?(u(),k(C,{key:0,type:"spinner",size:"48px"})):r.status==0?(u(),k(F,{key:1,color:"#07c160",size:"40px",name:"checked"})):r.status==-1||r.status==-2?(u(),k(F,{key:2,color:"#FA5151",size:"40px",name:"clear"})):D("",!0)]),r.tradeHash?(u(),p("div",{key:0,class:"trade-hash",onClick:i[0]||(i[0]=A=>o(ze)(r.tradeHash))},[w(a(e.$t("txHash"))+": ",1),s("span",Lt,a(o(ge)(r.tradeHash)),1),c(T,{name:"copy"})])):(u(),p("div",Ft,a(e.$t("txHash"))+": N/A",1))])]),_:1},8,["show"])}}},Bt=ie(It,[["__scopeId","data-v-ced696b6"]]),Nt=[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_operator",type:"address"},{indexed:!1,internalType:"uint256",name:"_arrayLimit",type:"uint256"}],name:"ArrayLimitChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_operator",type:"address"},{indexed:!1,internalType:"uint256",name:"_baseFee",type:"uint256"}],name:"BaseFeeChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"_token",type:"address"},{indexed:!1,internalType:"address",name:"_sourceAccount",type:"address"},{indexed:!1,internalType:"uint256",name:"_targetAccountCount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_totalAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_totalRealAmount",type:"uint256"}],name:"Sent",type:"event"},{stateMutability:"payable",type:"fallback"},{inputs:[],name:"arrayLimit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_arrayLimit",type:"uint256"},{internalType:"uint256",name:"_baseFee",type:"uint256"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_token",type:"address"},{internalType:"address[]",name:"_accounts",type:"address[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"}],name:"multiSend",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_arrayLimit",type:"uint256"}],name:"setArrayLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_baseFee",type:"uint256"}],name:"setBaseFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"recipient",type:"address"},{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}];const Vt={class:"body"},xt={class:"tools-bar"},Et={class:"address-text"},Dt={style:{"margin-left":"4px"}},Mt={class:"tools"},Ht={class:"token-title"},Ot={class:"token-box"},Ut={class:"token-amount"},Qt={class:"form-item address-ipt"},Wt={class:"title"},jt={class:"index"},zt={class:"content"},Pt=["onClick"],qt={class:"form-item create"},Gt={class:"field"},Jt={class:"content"},Kt={class:"content"},Xt={class:"transfer-icon"},Yt={class:"title"},Zt={class:"transfer-icon"},en={class:"title"},tn={class:"text"},nn={class:"btn"},sn={class:"content"},an={class:"title"},ln={class:"content"},on={__name:"Index",setup(r){const N=Ee(),e=De(),{t:i}=ye(),C=Me("global"),F=v(!1),g=v(!1),A=v(!1),I=v(!1),M=v(!1),z=v(!1),ue=j(()=>[{name:i("languages.zh-cn"),value:"zh-cn",color:e.language==="zh-cn"?"#9505F9":"#323233"},{name:i("languages.en"),value:"en",color:e.language==="en"?"#9505F9":"#323233"}]);function ke(t){e.setLanguage(t.value)}const R=v(!1),H=v(0),O=v(""),P=v("");async function re(){await e.connectWallet(),await ce()}function de(t){const n=C.cfg.allowChainList.find(h=>h.chainId==t);let d;return n?d=n.chain:d=null,d}function _e(){return C.cfg.allowChainList.map(n=>n.chainId).includes(e.chainId)?!0:(z.value=!0,!1)}async function be(){R.value=!1,O.value="",H.value=1,R.value=!0;try{let t=await x.wallet.approveMaxAmount(e.token.address,e.multiSenderContractAddress);console.log(t),O.value=t.hash,await t.wait(),U.value=!1,H.value=0}catch(t){console.log(t),H.value=-1,await fe(2e3)}finally{R.value=!1}}async function ce(){if(e.token==null)return;if(e.token.address==x.wallet.MAIN_COIN_ADDRESS){U.value=!1;return}const t=await x.wallet.isAllowanceEnough(e.multiSenderContractAddress,e.token.address,e.walletAddress);console.log("checkAllowance: "+t),t?U.value=!1:U.value=!0}function $e(){N.push("/selectToken")}const Y=v(!1),me=v(null);function we(){Y.value=!0,Oe(()=>{me.value.focus()})}const _=v(null);function Se(t){const n=/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/;let d=!1,h=t.replace(/\s+/ig," ").trim();if(h){let m=h.split(" ");if(m.length>500){$.fail(i("supportMax"));return}h.indexOf(",")>-1&&(d=!0);for(let y=0;y<m.length;y++){if(!n.test(m[y])){$.fail(i("pleaseEnterRightFormat"));return}d==!0&&m[y].indexOf(",")==-1&&(m[y]=m[y]+",0")}e.addressList=m,e.addressText=m.join(" ")}else e.addressList=[],e.addressText="";e.isCustomRule=d}const J=v(!1),Z=v(0),K=v("");function Te(t,n){const[d,h]=t.split(",");Z.value=n,J.value=!0,K.value=h}function Ce(){const[t,n]=e.addressList[Z.value].split(",");e.addressList[Z.value]=`${t},${K.value}`,e.addressText=e.addressList.join(" "),J.value=!1}const ee=j(()=>e.isCustomRule?i("customRule"):e.currentSentRule.value==0?i("eachAddressEqual"):e.currentSentRule.value==1?i("dividedEquallyByTotal"):""),Ae=j(()=>[{name:i("eachAddressEqual"),value:0,color:e.currentSentRule.value===0?"#3F80F7":"#323233"},{name:i("dividedEquallyByTotal"),value:1,color:e.currentSentRule.value===1?"#3F80F7":"#323233"}]);function te(t){return console.log(t),t&&t.replace("-","").replace(/^(.*\..{6}).*$/,"$1")}const ne=v(!1);function Re(){e.isCustomRule||(ne.value=!0)}function Le(t){e.currentSentRule.value=t.value,e.currentSentRule.name=t.name}function Fe(){e.addressList=[],e.addressText="",e.isCustomRule=!1}const U=v(!1),se=v(!1),B=j(()=>{let t=oe(0);for(let n of X.value)t=t.plus(n.amount);return t.toNumber()});async function Ie(){se.value=!0;try{if(!e.token){$.fail(i("pleaseSelectToken"));return}if(e.addressList.length==0){$.fail(i("pleaseEnterReceivingAddress"));return}if(!e.isCustomRule){if(e.currentSentRule.value==0){if(!e.sentSingleAmountString){$.fail(i("pleaseEnterSingleQuantity"));return}}else if(e.currentSentRule.value==1&&!e.sentTotalAmountString){$.fail(i("pleaseEnterTotalQuantity"));return}}if(await e.connectWallet(),!_e())return;let n=C.cfg.allowChainList.find(d=>d.chain==e.token.chain);if(!n){$.fail(i("tokenChainNotSupport"));return}if(e.chainId!=n.chainId){$.fail(i("switchTokenChain"));return}if(B.value>e.token.amount){$.fail(i("blanceSlow"));return}if(await ce(),U.value){$.fail(i("approveFirst"));return}await Be(),A.value=!0}catch(t){console.dir(t)}finally{se.value=!1}}async function Be(){const t=x.wallet.getEthersProvider(),n=x.wallet.contractByProvider(t,e.multiSenderContractAddress,Nt),d=X.value.map(V=>V.address),h=X.value.map(V=>le(V.amount.toString(),e.token.decimals).toString()),m=await n.baseFee();console.log("baseFee"),console.log(m),console.log(m.toString()),console.log(W(m));let y=m;e.token.address==x.wallet.MAIN_COIN_ADDRESS&&(y=m.add(le(B.value.toString(),e.token.decimals)));const Q=await t.getGasPrice();let S;try{S=(await n.estimateGas.multiSend(e.token.address,d,h,{value:y.toString()})).mul(2)}catch(V){throw V.data.code==-32e3&&$.fail(i("blanceSlow")),console.dir(V),V}console.log("gasLimit"),console.dir(S),console.log(W(S.mul(Q))),console.log(e.token.address),console.log(d),console.log(h),console.dir(n);const L=await n.callStatic.multiSend(e.token.address,d,h,{value:y.toString()});console.dir(L),console.log(W(L));const l=W(L);let q=0;l<B&&(q=Number(oe(B.value).minus(l).div(B.value).toFixed(4)));let G=0;e.isCustomRule?G=0:e.currentSentRule.value==0?G=e.sentSingleAmountString?Number(e.sentSingleAmountString):0:e.currentSentRule.value==1&&(G=e.sentTotalAmountString?Number(e.sentTotalAmountString):0),_.value={msContract:n,receiptTotalAmount:l,sentAddressList:d,sentAmountList:h,sentListQty:X.value.length,baseFee:m,transferValue:y,gasLimit:S,sentRate:q,gas:W(S.mul(Q)),serviceFee:W(m),token:{symbol:e.token.symbol,address:e.token.address,amount:e.token.amount,icon:e.token.icon,decimals:e.token.decimals},isCustomRule:e.isCustomRule,sentRuleType:e.currentSentRule.value,sentAmount:G,realSentTotalAmount:B.value,walletAddress:e.walletAddress}}async function Ne(){console.log("multiTransferConfirm"),H.value=1,R.value=!0;try{const t=await _.value.msContract.multiSend(_.value.token.address,_.value.sentAddressList,_.value.sentAmountList,{value:_.value.transferValue.toString(),gasLimit:_.value.gasLimit.toString()});console.dir(t),O.value=t.hash;const n=await t.wait();console.dir(n);const d=n.transactionHash;if(O.value=d,console.log("txHash: "+d),n.status!=1){await x.multiSend.sendMultiSendFailTx(_.value.token.chain,d),R.value=!1,P.value="",M.value=!1,I.value=!0;return}else{R.value=!1,P.value="",M.value=!0,I.value=!0;let h={receiverCount:0,sendAmount:le(B.value.toString(),e.token.decimals).toString(),sendTime:Pe().unix(),sender:_.value.walletAddress,status:-1,tokenAddress:_.value.token.address,tokenDecimal:_.value.token.decimals,tokenSymbol:_.value.token.symbol,txHash:d};console.dir(h),e.transferringList.push(h)}}catch(t){console.dir(t),t.code=="ACTION_REJECTED"&&(P.value=i("actionRejected"),H.value=-1,await fe(1e3)),R.value=!1,P.value="",M.value=!1,I.value=!0;return}finally{A.value=!1}}const X=j(()=>{if(e.addressList.length>0){if(e.isCustomRule)return e.addressList.map(t=>{const[n,d]=t.split(",");return{address:n,amount:Number(d)}});if(e.currentSentRule.value==0){const t=e.sentSingleAmountString?Number(e.sentSingleAmountString):0;return e.addressList.map(n=>({address:n,amount:t}))}else if(e.currentSentRule.value==1){const t=e.sentTotalAmountString?Number(e.sentTotalAmountString):0,n=oe(t).div(e.addressList.length).dp(2).toNumber();return e.addressList.map(d=>({address:d,amount:n}))}}return[]}),ve=C.cfg.allowChainList.map(t=>t.chainShow),ae=v(!1);function Ve(){Ue.confirm({title:i("tips"),message:i("disonnectWallet"),confirmButtonText:i("confirm"),cancelButtonText:i("cancel")}).then(()=>{e.disconnectWallet()}).catch(()=>{})}function xe(t){let n=C.cfg.allowChainList.find(d=>d.chainId==e.chainId);n?window.open(n.txNetwork+t,"_blank"):$(i("unsupportedNetwork"))}return(t,n)=>{const d=b("van-icon"),h=b("van-cell"),m=b("van-cell-group"),y=b("van-field"),Q=b("van-action-sheet"),S=b("van-button"),L=b("van-dialog");return u(),p(E,null,[s("div",Vt,[s("div",xt,[o(e).isConnectWallet?(u(),p("div",{key:0,class:"address",onClick:Ve},[de(o(e).chainId)?(u(),k(d,{key:0,class:"chain-icon",name:o(pe)(de(o(e).chainId))},null,8,["name"])):(u(),k(T,{key:1,class:"chain-icon",name:"wallet"})),s("div",Et,a(o(ge)(o(e).walletAddress)),1)])):(u(),p("div",{key:1,class:"address",onClick:re},[c(T,{name:"wallet"}),s("div",Dt,a(t.$t("pleaseConnectWallet")),1)])),s("div",Mt,[c(T,{name:"language",onClick:n[0]||(n[0]=l=>g.value=!0)}),c(T,{name:"help",onClick:n[1]||(n[1]=l=>F.value=!0)})])]),c(m,{inset:"",class:"form-item"},{default:f(()=>[s("div",Ht,a(t.$t("token")),1),c(h,{"is-link":"",onClick:$e,class:"token-cell"},Qe({value:f(()=>[s("div",Ut,a(o(e).token?`${t.$t("balance")} ${o(e).token.amount}`:""),1)]),_:2},[o(e).token?{name:"title",fn:f(()=>[s("div",Ot,[c(he,{class:"token-icon",tokenIcon:o(e).token.icon,chainIcon:o(pe)(o(e).token.chain)},null,8,["tokenIcon","chainIcon"]),w(" "+a(o(e).token.symbol),1)])]),key:"0"}:{name:"title",fn:f(()=>[s("div",{class:"token-box",style:{color:"#999999"}},a(t.$t("pleaseSelectToken")),1)]),key:"1"}]),1024)]),_:1}),s("div",Qt,[s("div",Wt,[s("div",null,[w(a(t.$t("receivingAddress"))+" ",1),c(T,{name:"info",onClick:n[2]||(n[2]=l=>ae.value=!0)})]),s("div",{onClick:Fe},[c(T,{name:"clear"}),w(" "+a(t.$t("clear")),1)])]),Y.value?(u(),k(y,{key:0,class:"ipt","model-value":o(e).addressText,onChange:n[3]||(n[3]=l=>Se(l.target.value)),type:"textarea",onBlur:n[4]||(n[4]=l=>Y.value=!1),ref_key:"ipt",ref:me},null,8,["model-value"])):(u(),p("ul",{key:1,class:"table",onClick:we},[(u(!0),p(E,null,He(o(e).addressList,(l,q)=>(u(),p("li",null,[s("div",jt,a(q+1),1),s("div",zt,a(l),1),o(e).isCustomRule?(u(),p("div",{key:0,class:"edit",onClick:We(G=>Te(l,q),["stop"])},[c(T,{name:"edit"})],8,Pt)):D("",!0)]))),256))]))]),o(e).addressList.length>0?(u(),p(E,{key:0},[c(m,{inset:"",class:"form-item"},{default:f(()=>[c(y,{modelValue:o(ee),"onUpdate:modelValue":n[5]||(n[5]=l=>je(ee)?ee.value=l:null),disabled:o(e).isCustomRule,"is-link":"",readonly:"",name:"picker",label:t.$t("distributionRules"),onClick:Re,"input-align":"right"},null,8,["modelValue","disabled","label"]),c(Q,{show:ne.value,"onUpdate:show":n[6]||(n[6]=l=>ne.value=l),title:t.$t("distributionRules"),actions:o(Ae),"close-on-click-action":"",onSelect:Le},null,8,["show","title","actions"])]),_:1}),c(m,{inset:"",class:"form-item"},{default:f(()=>[o(e).isCustomRule?(u(),k(y,{key:0,label:t.$t("totalQuantity"),"input-align":"right",readonly:"","model-value":o(B)},null,8,["label","model-value"])):o(e).currentSentRule.value==0?(u(),k(y,{key:1,label:t.$t("singleQuantity"),"input-align":"right",formatter:te,placeholder:t.$t("pleaseEnterSingleQuantity"),type:"number",maxlength:"10",modelValue:o(e).sentSingleAmountString,"onUpdate:modelValue":n[7]||(n[7]=l=>o(e).sentSingleAmountString=l)},null,8,["label","placeholder","modelValue"])):(u(),k(y,{key:2,label:t.$t("totalQuantity"),"input-align":"right",formatter:te,placeholder:t.$t("pleaseEnterTotalQuantity"),type:"number",maxlength:"10",modelValue:o(e).sentTotalAmountString,"onUpdate:modelValue":n[8]||(n[8]=l=>o(e).sentTotalAmountString=l)},null,8,["label","placeholder","modelValue"]))]),_:1})],64)):D("",!0),s("div",qt,[o(e).isConnectWallet?(u(),p(E,{key:0},[U.value?(u(),k(S,{key:0,class:"create-btn",type:"danger",onClick:be},{default:f(()=>[w(a(t.$t("approve")),1)]),_:1})):(u(),k(S,{key:1,class:"create-btn",type:"primary",onClick:Ie,loading:se.value},{default:f(()=>[w(a(t.$t("oneClickTransfer")),1)]),_:1},8,["loading"]))],64)):(u(),k(S,{key:1,class:"create-btn",type:"primary",onClick:re},{default:f(()=>[w(a(t.$t("connectWallet")),1)]),_:1}))]),s("div",{class:"form-item history",onClick:n[9]||(n[9]=l=>o(N).push("/history"))},a(t.$t("transferHistory")),1)]),c(Q,{show:g.value,"onUpdate:show":n[10]||(n[10]=l=>g.value=l),title:t.$t("switchLang"),actions:o(ue),closeable:!1,"cancel-text":t.$t("cancel"),"close-on-click-action":"",onSelect:ke},null,8,["show","title","actions","cancel-text"]),c(L,{class:"editAmountDialog",show:J.value,"onUpdate:show":n[12]||(n[12]=l=>J.value=l),title:t.$t("editQuantity"),"show-cancel-button":"",onConfirm:Ce},{default:f(()=>[s("div",Gt,[c(y,{modelValue:K.value,"onUpdate:modelValue":n[11]||(n[11]=l=>K.value=l),type:"number",formatter:te,clearable:""},null,8,["modelValue"])])]),_:1},8,["show","title"]),c(_t,{visable:A.value,"onUpdate:visable":n[13]||(n[13]=l=>A.value=l),detail:_.value,onConfirm:Ne},null,8,["visable","detail"]),c(L,{class:"help-dialog",show:F.value,"onUpdate:show":n[14]||(n[14]=l=>F.value=l),title:t.$t("ruleDescription"),"confirm-button-text":t.$t("understand"),"close-on-click-overlay":""},{default:f(()=>[s("div",Jt,[s("div",null,a(t.$t("rulesDescription1")),1),s("div",null,a(t.$t("rulesDescription2")),1),s("div",null,a(t.$t("rulesDescription3")),1),s("div",null,a(t.$t("rulesDescription4",{chains:o(ve).join("/")})),1)])]),_:1},8,["show","title","confirm-button-text"]),c(L,{class:"create-transfer-dialog",show:I.value,"onUpdate:show":n[17]||(n[17]=l=>I.value=l),onClose:n[18]||(n[18]=l=>I.value=!1),"close-on-click-overlay":""},{footer:f(()=>[s("div",nn,[c(S,{class:"copy-btn",type:"primary",onClick:n[16]||(n[16]=l=>I.value=!1)},{default:f(()=>[w(a(t.$t("understand")),1)]),_:1})])]),default:f(()=>[s("div",Kt,[M.value?(u(),p(E,{key:0},[s("div",Xt,[c(T,{name:"createSuccess"})]),s("div",Yt,a(t.$t("transferResultSuccess1")),1),s("div",{class:"text",onClick:n[15]||(n[15]=l=>xe(O.value))},a(t.$t("transferResultSuccess2")),1)],64)):(u(),p(E,{key:1},[s("div",Zt,[c(T,{name:"infoFail"})]),s("div",en,a(t.$t("transferResultFail1")),1),s("div",tn,a(t.$t("transferResultFail2")),1)],64))])]),_:1},8,["show"]),c(L,{class:"chain-err-dialog",confirmButtonText:t.$t("understand"),confirmButtonColor:"#3F80F7",show:z.value,"onUpdate:show":n[19]||(n[19]=l=>z.value=l)},{default:f(()=>[s("div",sn,[s("div",null,a(t.$t("notSupportedChain")),1),s("div",null,a(t.$t("pleaseSwitchTo",{chains:o(ve).join("\u3001")})),1)])]),_:1},8,["confirmButtonText","show"]),c(L,{class:"copy-address-dialog",confirmButtonText:t.$t("understand"),confirmButtonColor:"#3F80F7",show:ae.value,"onUpdate:show":n[20]||(n[20]=l=>ae.value=l)},{default:f(()=>[s("div",an,a(t.$t("copyAddress")),1),s("div",ln,[s("div",null,a(t.$t("copyAddressTips")),1)])]),_:1},8,["confirmButtonText","show"]),c(Bt,{tradeVisable:R.value,"onUpdate:tradeVisable":n[21]||(n[21]=l=>R.value=l),status:H.value,tradeHash:O.value,message:P.value},null,8,["tradeVisable","status","tradeHash","message"])],64)}}},cn=ie(on,[["__scopeId","data-v-0d834187"]]);export{cn as default};
