import{d as $,j as w}from"./styled-components.browser.esm-BmQQ1SYj.js";import"./index-DJO9vBfz.js";const k=$.button`
  font-family: Arial, sans-serif;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  margin: 5px;
  color: white;
  border-radius: .5rem;
  background-color: ${({primary:e})=>e?"#007bff":"#6c757d"};
  font-size: ${({size:e})=>{switch(e){case"small":return"12px";case"large":return"20px";default:return"16px"}}};
  padding: ${({size:e})=>{switch(e){case"small":return"5px 10px";case"large":return"15px 30px";default:return"10px 20px"}}};
  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`,T=({label:e,onClick:q,primary:_=!1,size:j="medium",disabled:z=!1})=>w.jsx(k,{onClick:q,primary:_,size:j,disabled:z,children:e}),h=T;T.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const L={title:"Example/Button",component:h},n=e=>w.jsx(h,{...e}),r=n.bind({});r.args={primary:!0,label:"Primary Button"};const a=n.bind({});a.args={primary:!1,label:"Secondary Button"};const s=n.bind({});s.args={size:"large",label:"Large Button"};const t=n.bind({});t.args={size:"small",label:"Small Button"};const o=n.bind({});o.args={label:"Disabled Button",disabled:!0};var l,i,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"args => <Button {...args} />",...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Button {...args} />",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Button {...args} />",...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var b,x,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:"args => <Button {...args} />",...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,S,v;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Button {...args} />",...(v=(S=o.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const P=["Primary","Secondary","Large","Small","Disabled"];export{o as Disabled,s as Large,r as Primary,a as Secondary,t as Small,P as __namedExportsOrder,L as default};
