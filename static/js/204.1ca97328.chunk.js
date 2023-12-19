"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[204],{7204:function(n,e,r){r.r(e),r.d(e,{default:function(){return sn}});var t,i,o,c,a,u,s,d,l,h,p,x,m,f,g,b,Z,j=r(9434),y=r(5705),v=r(6727),w=r(5218),P=r(168),k=r(5867),_=k.ZP.div(t||(t=(0,P.Z)(["\n  max-width: 600px;\n  padding: 16px 32px;\n  margin: 0 auto;\n"]))),L=k.ZP.h2(i||(i=(0,P.Z)(["\n  display: block;\n  text-align: center;\n  font-weight: 700;\n  font-size: 40px;\n  margin: 0 auto;\n"]))),z=(0,k.ZP)(y.l0)(o||(o=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),C=(0,k.ZP)(y.gN)(c||(c=(0,P.Z)(["\n  padding: ",";\n  font: inherit;\n  border-radius: ",";\n  border: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.lightgray})),I=k.ZP.label(a||(a=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),q=(0,k.ZP)(y.Bc)(u||(u=(0,P.Z)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(n){return n.theme.colors.red})),N=k.ZP.button(s||(s=(0,P.Z)(["\n  display: block;\n  margin: 0 auto;\n  min-width: 100px;\n  color: ",";\n  background-color: ",";\n  border-radius: ",";\n  border: none;\n  padding: ",";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  font-weight: 500;\n  font-size: 16px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.radii.lg}),(function(n){return n.theme.spacing(3)}),(function(n){return n.theme.colors.active})),S=r(208),F=r(6916),R=function(n){return n.contacts.items},K=function(n){return n.contacts.isLoading},T=function(n){return n.contacts.error},A=(0,F.P1)([R,function(n){return n.filters.filters}],(function(n,e){return n.filter((function(n){return n.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))})),B=r(6355),D=r(184),E=v.Ry().shape({name:v.Z_().min(2,"Too Short!").required("Required"),number:v.Z_().matches(/^(\d{2,}-\d{2,}-\d{2,}|\d{2,}-\d{2,}|\d{5,})$/,"Phone number is not valid. Min 7 numbers (101-01-01)").required("Required")}),G=function(){var n=(0,j.I0)(),e=(0,j.v9)(R);return(0,D.jsxs)(_,{children:[(0,D.jsxs)(L,{children:["Phonebook"," ",(0,D.jsx)(B.I7T,{style:{width:"30px",height:"30px"}})]}),(0,D.jsx)(y.J9,{initialValues:{name:"",number:""},validationSchema:E,onSubmit:function(r,t){if(e.find((function(n){return n.name.toLocaleLowerCase()===r.name.toLocaleLowerCase()})))return w.ZP.error("".concat(r.name," is olready in your contacts"));n((0,S.uK)(r)),t.resetForm()},children:(0,D.jsxs)(z,{children:[(0,D.jsxs)(I,{children:["Name",(0,D.jsx)(C,{type:"text",name:"name"}),(0,D.jsx)(q,{name:"name",component:"span"})]}),(0,D.jsxs)(I,{children:["Number",(0,D.jsx)(C,{type:"tel",name:"number"}),(0,D.jsx)(q,{name:"number",component:"span"})]}),(0,D.jsx)(N,{type:"submit",children:"Add contact"})]})})]})},J=k.ZP.div(d||(d=(0,P.Z)(["\n  max-width: 600px;\n  padding: 16px 32px;\n  margin: 0 auto;\n  min-height: 100%;\n"]))),M=k.ZP.ul(l||(l=(0,P.Z)(["\n  list-style: none;\n  padding-inline-start: 0;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 12px;\n"]))),O=k.ZP.li(h||(h=(0,P.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n"]))),V=r(7425),$=k.ZP.button(p||(p=(0,P.Z)(["\n  min-width: 60px;\n  color: ",";\n  background-color: ",";\n  border-radius: ",";\n  border: none;\n  padding: ",";\n  cursor: pointer;\n  font-weight: 400;\n  font-size: 12px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.lightblue}),(function(n){return n.theme.radii.md}),(function(n){return n.theme.spacing(1)}),(function(n){return n.theme.colors.blue})),H=k.ZP.div(x||(x=(0,P.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 100px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.15);\n"]))),Q=r(6856),U=function(n){var e=n.contact,r=e.id,t=e.name,i=e.number,o=(0,j.I0)();return(0,D.jsxs)(H,{children:[(0,D.jsxs)("span",{children:[(0,D.jsx)(V.Nwp,{})," ",t,":"]}),(0,D.jsxs)("span",{children:[i," "]}),(0,D.jsxs)($,{onClick:function(){return o((0,S.GK)(r))},children:["Delete"," ",(0,D.jsx)(Q.I0,{style:{width:"40px",height:"20px"}})]})]})},W=function(){var n=(0,j.v9)(A);return(0,D.jsx)(J,{children:(0,D.jsx)(M,{children:n.map((function(n){return(0,D.jsx)(O,{children:(0,D.jsx)(U,{contact:n})},n.id)}))})})},X=k.ZP.div(m||(m=(0,P.Z)(["\n  max-width: 600px;\n  padding: 16px 32px;\n  margin: 0 auto;\n  text-align: center;\n"]))),Y=k.ZP.label(f||(f=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),nn=k.ZP.input(g||(g=(0,P.Z)(["\n  padding: ",";\n  font: inherit;\n  border-radius: ",";\n  border: 1px solid ",";\n  background-color: ",";\n"])),(function(n){return n.theme.spacing(2)}),(function(n){return n.theme.radii.sm}),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.colors.lightgray})),en=r(6895),rn=function(){var n=(0,j.I0)();return(0,D.jsx)(X,{children:(0,D.jsxs)(Y,{children:["Find contacts by name:",(0,D.jsx)(nn,{type:"text",name:"filters",onChange:function(e){return r=e.target.value,n((0,en.f)(r));var r}})]})})},tn=r(2791),on=r(3458),cn=k.ZP.b(b||(b=(0,P.Z)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: 500;\n"])),(function(n){return n.theme.colors.red})),an=k.ZP.div(Z||(Z=(0,P.Z)(["\n  max-width: 600px;\n  padding: 16px 32px;\n  margin: 0 auto;\n  text-align: center;\n"]))),un=function(n){var e=n.children;return(0,D.jsx)(an,{children:(0,D.jsx)(cn,{children:e})})};function sn(){var n=(0,j.I0)(),e=(0,j.v9)(K),r=(0,j.v9)(T),t=(0,j.v9)(R);return(0,tn.useEffect)((function(){n((0,S.yF)())}),[n]),(0,D.jsxs)("div",{children:[(0,D.jsx)(G,{}),(0,D.jsx)(rn,{}),e&&!r&&(0,D.jsx)(on.a,{}),r&&(0,D.jsx)(un,{children:"Oops! Something went wrong! Please try reloading this page!"}),t.length>0&&(0,D.jsx)(W,{})]})}}}]);
//# sourceMappingURL=204.1ca97328.chunk.js.map