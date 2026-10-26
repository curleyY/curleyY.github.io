(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,639801,e=>{var s=e.i(18585),t=e.i(315480),r=e.i(412043),a=e.i(57290),n=e.i(604111),i=e.i(141886),o=e.i(624098),l=e.i(409383);let c=`${(0,i.l)()}/stripe/check`,d=`${(0,i.b)()}/apple/iap-verify`,u=`${(0,i.b)()}/google/iap-verify`,m=()=>{let e=(0,n.f)(),[i,l]=(0,t.useState)({status:"loading",planType:"subscription",customerEmail:""}),[m,p]=(0,t.useState)(0),f=(0,r.useSearchParams)(),x=(0,r.useRouter)(),{refresh:h}=(0,a.F)(),y=f?.get("payment"),b=f?.get("platform"),g=f?.get("session_id"),j=f?.get("transaction_id"),N=f?.get("original_transaction_id"),v=f?.get("package_name"),w=f?.get("product_id"),k=f?.get("purchase_token"),T=f?.get("order_id"),[P,A]=(0,t.useState)(!1);(0,t.useEffect)(()=>A(!0),[]);let S=async()=>{try{let e=await (0,o.getAccessToken)(),s=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({sessionId:g})});if(!s.ok)throw Error(`HTTP error! status: ${s.status}`);let{session:t,error:r}=await s.json();if(r){l(e=>({...e,status:"failed"})),console.error("Session check error:",r);return}l({status:"paid"===t.payment_status?"completed":"failed",customerEmail:t.customer_email||t.customer_details?.email||"",orderId:t.subscription||t.payment_intent||"",planName:t.line_items?.data?.[0]?.description||"",planType:"payment"===t.mode?"purchase":"subscription",amount:t.amount_total||void 0,currency:t.currency||void 0}),h()}catch(e){console.error("Failed to fetch session status:",e),l(e=>({...e,status:"failed"}))}},I=async(e,s)=>{if(!e||!s)return void l(e=>({...e,status:"failed"}));try{let t=await (0,o.getAccessToken)(),r=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({transactionId:e,originalTransactionId:s})});if(!r.ok)throw Error(`HTTP error! status: ${r.status}`);let{purchase:a,error:n}=await r.json();if(n){l(e=>({...e,status:"failed"})),console.error("IAP verification error:",n);return}l({status:"active"===a.status?"completed":"failed",customerEmail:a.customerEmail||"",orderId:a.orderId,planName:a.planName,planType:a.planType}),h()}catch(e){console.error("Failed to verify IAP transaction:",e),l(e=>({...e,status:"failed"}))}},E=async(e,s,t,r)=>{if(!r||!s||!e){console.error("Missing required Android IAP parameters"),l(e=>({...e,status:"failed"}));return}try{let a=await (0,o.getAccessToken)(),n=await fetch(u,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({purchaseToken:r,orderId:t,productId:s,packageName:e})});if(!n.ok)throw Error(`HTTP error! status: ${n.status}`);let{purchase:i,error:c}=await n.json();if(c){l(e=>({...e,status:"failed"})),console.error("Android IAP verification error:",c);return}l({status:"active"===i.status?"completed":"failed",customerEmail:i.customerEmail||"",orderId:i.orderId,planName:i.planName,planType:i.planType,amount:i.amount,currency:i.currency}),h()}catch(e){console.error("Failed to verify Android IAP transaction:",e),l(e=>({...e,status:"failed"}))}},C=async()=>{"ios"===b&&j&&N?await I(j,N):"android"===b&&T&&k&&w&&v?await E(v,w,T,k):(console.error("Invalid IAP platform or missing parameters"),l(e=>({...e,status:"failed"})))},_=async()=>{"stripe"===y&&g?await S():"iap"===y?await C():l(e=>({...e,status:"failed"}))},$=()=>{x.push("/user")};return((0,t.useEffect)(()=>{_()},[g,N,x]),(0,t.useEffect)(()=>{if("processing"===i.status&&m<3){let e=setTimeout(()=>{p(e=>e+1),_()},2e3);return()=>clearTimeout(e)}},[i.status,m]),P)?"loading"===i.status?(0,s.jsx)("div",{className:"flex min-h-screen items-center justify-center bg-gray-50",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-blue-600"}),(0,s.jsx)("h2",{className:"mb-2 text-xl font-semibold text-gray-800",children:e("Processing your payment...")}),(0,s.jsx)("p",{className:"text-gray-600",children:e("Please wait while we confirm your subscription.")})]})}):"processing"===i.status?(0,s.jsx)("div",{className:"flex min-h-screen items-center justify-center bg-gray-50",children:(0,s.jsxs)("div",{className:"max-w-md text-center",children:[(0,s.jsx)("div",{className:"mx-auto mb-4 flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-yellow-400",children:(0,s.jsx)("svg",{className:"h-6 w-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})})}),(0,s.jsx)("h2",{className:"mb-2 text-xl font-semibold text-gray-800",children:e("Payment Processing")}),(0,s.jsx)("p",{className:"mb-4 text-gray-600",children:e("Your payment is being processed. This usually takes a few moments.")})]})}):"failed"===i.status?(0,s.jsx)("div",{className:"flex min-h-screen items-center justify-center bg-gray-50",children:(0,s.jsxs)("div",{className:"mx-auto max-w-2xl px-4 text-center",children:[(0,s.jsx)("div",{className:"mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100",children:(0,s.jsx)("svg",{className:"h-6 w-6 text-red-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),(0,s.jsx)("h2",{className:"mb-2 text-xl font-semibold text-gray-800",children:e("Payment Failed")}),(0,s.jsx)("p",{className:"mb-6 text-gray-600",children:e("We couldn't process your subscription. Please try again or contact support if the issue persists.")}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsx)("button",{onClick:()=>{p(0),l(e=>({...e,status:"loading"})),_()},className:"w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-700",children:e("Try Again")}),(0,s.jsx)("button",{onClick:$,className:"w-full rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-300",children:e("Back to Profile")})]})]})}):(0,s.jsx)("div",{className:"flex min-h-screen items-center justify-center bg-gray-50",children:(0,s.jsxs)("div",{className:"mx-auto max-w-2xl px-4 text-center",children:[(0,s.jsx)("div",{className:"mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100",children:(0,s.jsx)("svg",{className:"h-8 w-8 text-green-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),(0,s.jsxs)("h1",{className:"mb-4 text-3xl font-bold text-gray-800",children:["🎉"," ",e("purchase"===i.planType?"Purchase Successful!":"Subscription Successful!")]}),(0,s.jsxs)("div",{className:"mb-6 rounded-lg bg-white p-6 shadow-md",children:[(0,s.jsx)("p",{className:"mb-4 text-lg text-gray-700",children:e("purchase"===i.planType?"Thank you for your purchase! Your payment has been processed successfully.":"Thank you for your subscription! Your payment has been processed successfully.")}),(0,s.jsxs)("div",{className:"space-y-2 text-left text-sm text-gray-600",children:[i.customerEmail&&(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"font-medium",children:e("Email:")}),(0,s.jsx)("span",{children:i.customerEmail})]}),i.planName&&(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"font-medium",children:e("Plan:")}),(0,s.jsx)("span",{children:e(i.planName)})]}),i.amount&&i.currency&&(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"font-medium",children:e("Amount:")}),(0,s.jsx)("span",{children:new Intl.NumberFormat("en-US",{style:"currency",currency:i.currency.toUpperCase()}).format(i.amount/100)})]}),i.orderId&&(0,s.jsxs)("div",{className:"flex justify-between",children:[(0,s.jsx)("span",{className:"font-medium",children:e("Order ID:")}),(0,s.jsx)("span",{className:"font-mono text-xs",children:i.orderId})]})]})]}),(0,s.jsxs)("div",{className:"space-y-3 sm:flex sm:justify-center sm:space-x-4 sm:space-y-0",children:[(0,s.jsx)("button",{onClick:()=>{x.push("/library")},className:"w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700 sm:w-auto",children:e("Go to Library")}),(0,s.jsx)("button",{onClick:$,className:"w-full rounded-lg bg-gray-200 px-6 py-3 font-medium text-gray-800 transition-colors duration-200 hover:bg-gray-300 sm:w-auto",children:e("Back to Profile")})]}),(0,s.jsx)("div",{className:"mt-8 text-xs text-gray-500",children:(0,s.jsx)("p",{children:e("Need help? Contact our support team at support@readest.com")})})]})}):null};e.s(["default",0,function(){return(0,s.jsx)(t.Suspense,{fallback:(0,s.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:(0,s.jsx)(l.f,{loading:!0})}),children:(0,s.jsx)(m,{})})}])},409383,e=>{var s=e.i(18585),t=e.i(7284),r=e.i(604111);let a=`
/* Uiverse csemszepp/ugly-crab-22 融合球（等比缩小版） */
.spinner-goo-stage {
  position: relative;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: var(--color-base-200, #f4f4f5);
  filter: blur(7px) contrast(16);
}
.spinner-goo-blob {
  position: absolute;
  top: 50%;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.spinner-goo-blob--l {
  left: 20%;
  background: #1f2937;
  animation: spinner-osc-l 2.5s ease infinite;
}
.spinner-goo-blob--r {
  left: 80%;
  background: #3b82f6;
  animation: spinner-osc-r 2.5s ease infinite;
}
/* 暗色主题：反色（白 + 青），与原版一致 */
[data-theme$='-dark'] .spinner-goo-stage {
  background: var(--color-base-200, #18181b);
}
[data-theme$='-dark'] .spinner-goo-blob--l {
  background: #ffffff;
}
[data-theme$='-dark'] .spinner-goo-blob--r {
  background: #22d3ee;
}
@keyframes spinner-osc-l {
  0% { left: 20%; }
  50% { left: 50%; }
  100% { left: 20%; }
}
@keyframes spinner-osc-r {
  0% { left: 80%; }
  50% { left: 50%; }
  100% { left: 80%; }
}
@media (prefers-reduced-motion: reduce) {
  .spinner-goo-blob--l,
  .spinner-goo-blob--r {
    animation: none;
  }
}
`;e.s(["f",0,e=>{let{loading:n,className:i}=e,o=(0,r.f)();return n?(0,s.jsxs)("div",{className:(0,t.U)("absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center",i),role:"status",children:[(0,s.jsxs)("div",{className:"spinner-goo-stage",children:[(0,s.jsx)("span",{className:"spinner-goo-blob spinner-goo-blob--l"}),(0,s.jsx)("span",{className:"spinner-goo-blob spinner-goo-blob--r"})]}),(0,s.jsx)("span",{className:"sr-only",children:o("Loading...")}),(0,s.jsx)("style",{children:a})]}):null}])}])})();

//# sourceMappingURL=2tivpdspgvxfa.js.map