"use strict";(self.webpackChunkapi_rest=self.webpackChunkapi_rest||[]).push([[6025],{76368:(v,D,t)=>{t.d(D,{D:()=>O});var s=t(74081),e=t(93415),_=t(67621);function M(g,d,E){if(!g||!d||!E)return{display:"none"};const{x:f,y:n}=E;return{transform:`translate(${f}px, ${n}px)`}}const O=({renderItem:g})=>{const{itemType:d,isDragging:E,item:f,initialOffset:n,currentOffset:c,mouseOffset:l}=(0,_.useDragLayer)(i=>({item:i.getItem(),itemType:i.getItemType(),initialOffset:i.getInitialSourceClientOffset(),currentOffset:i.getSourceClientOffset(),isDragging:i.isDragging(),mouseOffset:i.getClientOffset()}));return E?(0,s.jsx)(e.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,s.jsx)(e.x,{style:M(n,c,l),children:g({type:d,item:f})})}):null}},55535:(v,D,t)=>{t.d(D,{B:()=>j,D:()=>B,H:()=>w,R:()=>W});var s=t(74081),e=t(10701),_=t(32370),M=t(27997),O=t(73354),g=t(74758),d=t(27875),E=t(87006),f=t(10411),n=t(76827),c=t(61020),l=t(76368),i=t(47706),m=t(70627),a=t(72450);const y=(0,a.ZP)(e.k)`
  svg path {
    fill: ${({theme:P})=>P.colors.neutral600};
  }
`;function h({name:P}){return(0,s.jsxs)(e.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,E.Q1)(300),children:[(0,s.jsx)(y,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,s.jsx)(f.Z,{width:`${8/16}rem`})}),(0,s.jsx)(_.Z,{fontWeight:"bold",children:P})]})}h.propTypes={name:m.string.isRequired};function R({type:P,item:u}){switch(P){case i.D.STAGE:return(0,s.jsx)(h,{...u});default:return null}}function B(){return(0,s.jsx)(l.D,{renderItem:R})}function W({children:P}){return(0,s.jsx)(M.A,{children:(0,s.jsx)(O.o,{tabIndex:-1,children:(0,s.jsx)(g.D,{children:P})})})}function j({href:P}){const{formatMessage:u}=(0,c.Z)();return(0,s.jsx)(E.rU,{startIcon:(0,s.jsx)(n.Z,{}),to:P,children:u({id:"global.back",defaultMessage:"Back"})})}function w({title:P,subtitle:u,navigationAction:p,primaryAction:x}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(E.SL,{name:P}),(0,s.jsx)(d.T,{navigationAction:p,primaryAction:x,title:P,subtitle:u})]})}},86025:(v,D,t)=>{t.r(D),t.d(D,{default:()=>J});var s=t(74081),e=t(87006),_=t(59461),M=t(44328),O=t(27279),g=t(10701),d=t(77970),E=t(70774),f=t(38566),n=t(38101),c=t(93153),l=t(50086),i=t(32370),m=t(10989),a=t(86967),y=t(4987),h=t(36938),R=t(26784),B=t(78665),W=t(61020),j=t(40464),w=t(51447),P=t(72450),u=t(59491),p=t(66360),x=t(55535),U=t(78099),T=t(47706),z=t(88181),Dt=t(64797),gt=t(85811),Mt=t(47599),Ot=t(15816),ft=t(97442),Pt=t(13576),mt=t(87830),vt=t(47184),ut=t(364),Ct=t(71563),ht=t(49204),Tt=t(47853),Lt=t(75719),yt=t(74919),xt=t(29206),It=t(98934),At=t(43433),Rt=t(8175),Bt=t(76368);const V=(0,P.ZP)(e.rU)`
  align-items: center;
  height: ${(0,e.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:o})=>`${o.spaces[2]}}`};
  width: ${(0,e.Q1)(32)};

  svg {
    height: ${(0,e.Q1)(12)};
    width: ${(0,e.Q1)(12)};

    path {
      fill: ${({theme:o})=>o.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:o})=>o.colors.neutral800};
      }
    }
  }
`;function G(){const{formatMessage:o}=(0,W.Z)(),{push:Z}=(0,w.k6)(),{collectionTypes:X,singleTypes:b,isLoading:q}=(0,u.u)(),{meta:L,workflows:k,isLoading:K,refetch:tt}=(0,z.u)(),[Q,S]=O.useState(null),[st,I]=O.useState(!1),{del:et}=(0,e.kY)(),{formatAPIError:nt}=(0,e.So)(),F=(0,e.lm)(),{getFeature:at,isLoading:N}=(0,p.u)(),{trackUsage:H}=(0,e.rS)(),ot=(0,_.v9)(M.s),{allowedActions:{canCreate:Y,canDelete:it}}=(0,e.ss)(ot.settings["review-workflows"]),C=at("review-workflows"),{mutateAsync:rt,isLoading:_t}=(0,j.useMutation)(async({workflowId:r,stages:A})=>{const{data:{data:$}}=await et(`/admin/review-workflows/workflows/${r}`,{data:A});return $},{onSuccess(){F({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),lt=r=>[...X,...b].find($=>$.uid===r).info.displayName,dt=r=>{S(r)},Et=()=>{S(null)},ct=async()=>{try{const r=await rt({workflowId:Q});return await tt(),S(null),r}catch(r){return F({type:"warning",message:nt(r)}),null}};return O.useEffect(()=>{!K&&!N&&C?.[T.C]&&L?.workflowCount>parseInt(C[T.C],10)&&I(!0)},[N,K,C,L?.workflowCount,L.workflowsTotal]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.H,{primaryAction:Y&&(0,s.jsx)(e.Qj,{startIcon:(0,s.jsx)(h.Z,{}),size:"S",to:"/settings/review-workflows/create",onClick:r=>{C?.[T.C]&&L?.workflowCount>=parseInt(C[T.C],10)?(r.preventDefault(),I(!0)):H("willCreateWorkflow")},children:o({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:o({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:o({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,s.jsxs)(x.R,{children:[K||q?(0,s.jsx)(g.k,{justifyContent:"center",children:(0,s.jsx)(d.a,{children:o({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,s.jsxs)(E.i,{colCount:3,footer:Y&&(0,s.jsx)(f.c,{icon:(0,s.jsx)(h.Z,{}),onClick:()=>{C?.[T.C]&&L?.workflowCount>=parseInt(C[T.C],10)?I(!0):(Z("/settings/review-workflows/create"),H("willCreateWorkflow"))},children:o({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,s.jsx)(n.h,{children:(0,s.jsxs)(c.Tr,{children:[(0,s.jsx)(l.Th,{children:(0,s.jsx)(i.Z,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(i.Z,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(i.Z,{variant:"sigma",children:o({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,s.jsx)(l.Th,{children:(0,s.jsx)(m.T,{children:o({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,s.jsx)(a.p,{children:k.map(r=>(0,O.createElement)(c.Tr,{...(0,e.X7)({fn(A){A.target.nodeName!=="BUTTON"&&Z(`/settings/review-workflows/${r.id}`)}}),key:`workflow-${r.id}`},(0,s.jsx)(l.Td,{width:(0,e.Q1)(250),children:(0,s.jsx)(i.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:r.name})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(i.Z,{textColor:"neutral800",children:r.stages.length})}),(0,s.jsx)(l.Td,{children:(0,s.jsx)(i.Z,{textColor:"neutral800",children:(r?.contentTypes??[]).map(lt).join(", ")})}),(0,s.jsx)(l.Td,{children:(0,s.jsxs)(g.k,{alignItems:"center",justifyContent:"end",children:[(0,s.jsx)(V,{to:`/settings/review-workflows/${r.id}`,"aria-label":o({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:r.name}),children:(0,s.jsx)(R.Z,{})}),k.length>1&&it&&(0,s.jsx)(y.h,{"aria-label":o({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,s.jsx)(B.Z,{}),noBorder:!0,onClick:()=>{dt(r.id)}})]})})))})]}),(0,s.jsx)(e.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:_t,isOpen:!!Q,onToggleDialog:Et,onConfirm:ct}),(0,s.jsxs)(U.L,{isOpen:st,onClose:()=>I(!1),children:[(0,s.jsx)(U.T,{children:o({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,s.jsx)(U.B,{children:o({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})}function J(){const o=(0,_.v9)(M.s);return(0,s.jsx)(e.O4,{permissions:o.settings["review-workflows"].main,children:(0,s.jsx)(G,{})})}},59491:(v,D,t)=>{t.d(D,{u:()=>O});var s=t(27279),e=t(87006),_=t(53532),M=t(40464);function O(){const{get:g}=(0,e.kY)(),{formatAPIError:d}=(0,e.So)(),E=(0,e.lm)(),f=(0,M.useQueries)([{queryKey:["content-manager","components"],async queryFn(){const{data:{data:a}}=await g("/content-manager/components");return a},onError(a){a instanceof _.d7&&E({type:"warning",message:d(a)})}},{queryKey:["content-manager","content-types"],async queryFn(){const{data:{data:a}}=await g("/content-manager/content-types");return a},onError(a){a instanceof _.d7&&E({type:"warning",message:d(a)})}}]),[n,c]=f,l=n.isLoading||c.isLoading,i=s.useMemo(()=>(c?.data??[]).filter(a=>a.kind==="collectionType"&&a.isDisplayed),[c?.data]),m=s.useMemo(()=>(c?.data??[]).filter(a=>a.kind!=="collectionType"&&a.isDisplayed),[c?.data]);return{isLoading:l,components:s.useMemo(()=>n?.data??[],[n?.data]),collectionTypes:i,singleTypes:m}}},88181:(v,D,t)=>{t.d(D,{u:()=>M});var s=t(27279),e=t(87006),_=t(40464);function M(O={}){const{get:g}=(0,e.kY)(),{id:d="",...E}=O,f={populate:"stages"},{data:n,isLoading:c,status:l,refetch:i}=(0,_.useQuery)(["review-workflows","workflows",d],async()=>(await g(`/admin/review-workflows/workflows/${d}`,{params:{...f,...E}})).data),m=s.useMemo(()=>d&&n?.data?[n.data]:Array.isArray(n?.data)?n.data:[],[n?.data,d]);return{meta:s.useMemo(()=>n?.meta??{},[n?.meta]),workflows:m,isLoading:c,status:l,refetch:i}}},38566:(v,D,t)=>{t.d(D,{c:()=>f});var s=t(74081),e=t(72450),_=t(93415),M=t(84366),O=t(10701),g=t(32370);const d=(0,e.ZP)(_.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:n})=>n.colors.primary600};
  }
`,E=(0,e.ZP)(_.x)`
  border-radius: 0 0 ${({theme:n})=>n.borderRadius} ${({theme:n})=>n.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,f=({children:n,icon:c,...l})=>(0,s.jsxs)("div",{children:[(0,s.jsx)(M.i,{}),(0,s.jsx)(E,{as:"button",background:"primary100",padding:5,...l,children:(0,s.jsxs)(O.k,{children:[(0,s.jsx)(d,{"aria-hidden":!0,background:"primary200",children:c}),(0,s.jsx)(_.x,{paddingLeft:3,children:(0,s.jsx)(g.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:n})})]})})]})},76827:(v,D,t)=>{t.d(D,{Z:()=>_});var s=t(74081);const e=M=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...M,children:(0,s.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),_=e},53532:(v,D,t)=>{t.d(D,{d7:()=>_});var s=t(5466);const{Axios:e,AxiosError:_,CanceledError:M,isCancel:O,CancelToken:g,VERSION:d,all:E,Cancel:f,isAxiosError:n,spread:c,toFormData:l,AxiosHeaders:i,HttpStatusCode:m,formToJSON:a,getAdapter:y,mergeConfig:h}=s.default}}]);
