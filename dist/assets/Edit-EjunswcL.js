import{u,b as f,r as d,j as e,L as j,B as t,I as _}from"./index-DSiRzrbg.js";import{I as y,H as v,L as N,C as b,a as w,_ as m}from"./MainProd-DW19dvKP.js";import{r as p}from"./index-C0teDyxI.js";import{s as a}from"./CategoriesAdd.module-B0JfrsHW.js";const D=()=>{const g=u(),{categoryId:o}=f(),[n,c]=d.useState({id:o,name:"",photo:null,imagePreview:null});d.useEffect(()=>{(async()=>{try{const r=(await p.get(`https://food-delivery-api-n6as.onrender.com/v1/category/${o}`)).data.Data;c({id:o,name:r.name,photo:null,imagePreview:r.photo})}catch(s){console.log("Failed to fetch category",s)}})()},[o]);const h=i=>{const s=i.target.files[0];c(l=>({...l,photo:s}));const r=new FileReader;r.onload=()=>{c(l=>({...l,imagePreview:r.result}))},r.readAsDataURL(s)},x=async i=>{i.preventDefault();const s=new FormData;s.append("id",o),s.append("name",n.name),n.photo&&s.append("photo",n.photo);try{await p.put(`https://food-delivery-api-n6as.onrender.com/v1/category/${o}`,s,{headers:{"Content-Type":"multipart/form-data"}}),m.success("Категория успешно обновлена!"),setTimeout(()=>{g("/admin/categories/")},1e3)}catch{m.error("Что-то пошло не так, попробуйте еще раз!")}};return e.jsxs(e.Fragment,{children:[e.jsx(y,{}),e.jsx(v,{title:"Редактировать ",headerBtn1:e.jsx(j,{to:"/admin/categories",style:{display:"flex",alignItems:"center",color:"red",gap:"10px",padding:"5px",borderRadius:"5px",fontSize:"16px",border:"1px solid red"},children:"Отменить"})}),e.jsx("form",{onSubmit:x,children:e.jsx(t,{className:a.categoriesAdd,children:e.jsxs(t,{className:a.categoriesAdd__main_cont,children:[e.jsxs(t,{className:a.categoriesAdd__cont,children:[e.jsx(t,{className:a.categoriesAdd__top,children:e.jsx("h1",{children:"Общие настройки"})}),e.jsxs(t,{className:a.categoriesAdd__bottom,children:[e.jsx(t,{className:a.categoriesAdd__bottom_lang,children:e.jsx(N,{})}),e.jsx(t,{className:a.categoriesAdd__upload_left,children:e.jsx(t,{className:a.input_box,children:e.jsx(t,{className:a["drag-file-area"],children:e.jsxs("label",{className:a.label,children:[e.jsx("input",{type:"file",className:a["default-file-input"],onChange:h}),e.jsxs("span",{className:a["browse-files-text"],children:[e.jsx(_,{}),"макс размер 4 мб"]})]})})})}),e.jsxs(t,{className:a.categoriesAdd__right,children:[e.jsx(b,{type:"text",value:n.name,InputPlaceHolder:"Название...",onChange:i=>c(s=>({...s,name:i.target.value})),placeholder:"Name"}),e.jsx(w,{BgColor:"blue",type:"submit",BtnContent:"Сохранить"})]})]})]}),e.jsx(t,{className:a.preview,children:n.imagePreview&&e.jsx("img",{src:`${n.imagePreview}`,alt:"Preview"})})]})})})]})};export{D as default};
