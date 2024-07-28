import{d as s,j as r}from"./styled-components.browser.esm-BmQQ1SYj.js";import"./index-DJO9vBfz.js";const g=s.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
`,h=s.img`
  width: 100%;
  height: auto;
`,C=s.div`
  padding: 16px;
`,b=s.h3`
  margin: 0 0 8px;
  font-size: 1.25em;
`,w=s.p`
  margin: 0;
  font-size: 1em;
  color: #666;
`,x=({image:a,title:i,description:u})=>r.jsxs(g,{children:[r.jsx(h,{src:a,alt:i}),r.jsxs(C,{children:[r.jsx(b,{children:i}),r.jsx(w,{children:u})]})]}),f=x;x.__docgenInfo={description:"",methods:[],displayName:"Card",props:{image:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""}}};const T={title:"Example/Card",component:f},l=a=>r.jsx(f,{...a}),e=l.bind({});e.args={image:"https://images.unsplash.com/photo-1700280761419-f37c16ab86fb?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Sample Card",description:"This is a description of the card. It provides additional details."};const t=l.bind({});t.args={image:"https://images.unsplash.com/photo-1718520704252-fdbe24a4e6da?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",title:"Custom Card Title",description:"Custom description for the card with different content."};var o,d,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"args => <Card {...args} />",...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Card {...args} />",...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const y=["Default","CustomCard"];export{t as CustomCard,e as Default,y as __namedExportsOrder,T as default};
