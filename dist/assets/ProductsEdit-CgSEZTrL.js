import{r as p,b as I,u as k,j as e,L as B,B as _,M as D}from"./index-DSiRzrbg.js";import{H as S,I as H,L as $,C as l,d as L,S as v,a as R,_ as w}from"./MainProd-DW19dvKP.js";import{r as x}from"./index-C0teDyxI.js";const A="_edit_aa4lu_1",E="_edit__wrapper_aa4lu_8",F="_edit__left_aa4lu_11",T="_edit__top_aa4lu_15",M="_edit__title_aa4lu_22",U="_edit__lang_aa4lu_27",q="_edit__bottom_aa4lu_30",z="_edit__bottom_title_aa4lu_36",O="_edit__name_aa4lu_42",G="_edit__price_aa4lu_46",J="_edit__price_input_aa4lu_52",K="_edit_btn_text_aa4lu_59",Q="_edit__choice_aa4lu_62",V="_edit__item_aa4lu_69",W="_edit__dd_aa4lu_74",X="_edit__main_inputs_aa4lu_77",Y="_edit__right_aa4lu_84",Z="_edit__inputs_aa4lu_89",ee="_edit__test_aa4lu_95",te="_edit__photo_aa4lu_100",ae="_edit__preview_aa4lu_111",_e="_edit__tws_aa4lu_116",se="_edit__info_items_aa4lu_132",ie="_edit__new_image_aa4lu_137",ne="_edit__current_image_aa4lu_143",ce="_none_aa4lu_146",oe="_edit__images_container_aa4lu_149",de="_edit__input_aa4lu_89",le="_edit__gen_input_aa4lu_171",re="_checkbox_aa4lu_197",t={edit:A,edit__wrapper:E,edit__left:F,edit__top:T,edit__title:M,edit__lang:U,edit__bottom:q,edit__bottom_title:z,edit__name:O,edit__price:G,edit__price_input:J,edit_btn_text:K,edit__choice:Q,edit__item:V,edit__dd:W,edit__main_inputs:X,edit__right:Y,edit__inputs:Z,edit__test:ee,edit__photo:te,edit__preview:ae,edit__tws:_e,edit__info_items:se,edit__new_image:ie,edit__current_image:ne,none:ce,edit__images_container:oe,edit__input:de,edit__gen_input:le,switch:"_switch_aa4lu_175",checkbox:re},me=()=>{const[r,g]=p.useState([]),[h,j]=p.useState([]),[a,o]=p.useState(null),[m,b]=p.useState({name:"",description:"",category_id:"",branch_id:"",income_price:"",sale_price:"",articul:"",storage_code:"",tax_code:"",packaging_code:"",status:!1,photo:null,image_url:""});return{branches:r,setBranches:g,categories:h,setCategories:j,productData:m,setProductData:b,newPhoto:a,setNewPhoto:o}},xe=()=>{var N;const{branches:r,setBranches:g,categories:h,setCategories:j,productData:a,setProductData:o,newPhoto:m,setNewPhoto:b}=me(),{productId:u}=I(),y=k();console.log("sdjvns",a),p.useEffect(()=>{const s=async()=>{try{const d=(await x.get(`https://food-delivery-api-n6as.onrender.com/v1/product/${u}`)).data.Data;o({...d,image_url:d.image_url||""})}catch(i){console.error("Ошибка при получении данных продукта:",i)}},c=async()=>{try{const i=await x.get("https://food-delivery-api-n6as.onrender.com/v1/categories"),d=await x.get("https://food-delivery-api-n6as.onrender.com/v1/branches");j(i.data.Data.categories),g(d.data.Data.branches)}catch(i){console.error("Ошибка при получении категорий или филиалов:",i)}};u&&s(),c()},[u]);const n=s=>{const{name:c,value:i,type:d,checked:P,files:f}=s.target;d==="file"?(o({...a,[c]:f[0]}),b(URL.createObjectURL(f[0]))):o({...a,[c]:d==="checkbox"?P:i})},C=async s=>{s.preventDefault();const c=new FormData;for(const i in a)i==="photo"?typeof a.photo=="object"?c.append("photo",a.photo):typeof a.photo=="string"&&a.photo.trim()!==""&&c.append("image_url",a.photo):c.append(i,a[i]);try{await x.put(`https://food-delivery-api-n6as.onrender.com/v1/product/${u}`,c,{headers:{"Content-Type":"multipart/form-data"}}),w.success("Продукт успешно обновлен!"),setTimeout(()=>{y("/admin/categories/products/")},1e3),o({...a,photo:null})}catch{w.error("Что-то пошло не так. Попробуйте еще раз!")}};return e.jsxs(e.Fragment,{children:[e.jsx(S,{title:"Редактировать",headerBtn1:e.jsx(B,{to:"/admin/categories/products?page=1",style:{display:"flex",alignItems:"center",color:"red",gap:"10px",padding:"5px",borderRadius:"5px",fontSize:"16px",border:"1px solid red"},children:"Отменить"})}),e.jsx(H,{}),e.jsx(_,{className:t.edit__wrapper,children:e.jsxs("form",{className:t.edit,onSubmit:C,children:[e.jsxs(_,{className:t.edit__left,children:[e.jsxs(_,{className:t.edit__top,children:[e.jsx("h2",{className:t.edit__title,children:"Товар"}),e.jsxs(_,{display:"flex",alignItems:"center",gap:"10px",children:["Статус:",e.jsx("input",{type:"checkbox",id:"status",name:"status",checked:a.status,onChange:n,className:t.checkbox}),e.jsx("label",{htmlFor:"status",className:t.switch})]})]}),e.jsx(_,{className:t.edit__lang,children:e.jsx($,{})}),e.jsxs(_,{className:t.edit__bottom,children:[e.jsxs(_,{className:t.edit__name,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Название"}),e.jsx(l,{InputPlaceHolder:"Введите название",name:"name",value:a.name,onChange:n,className:t.edit__we})]}),e.jsxs(_,{className:t.edit__name,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Описание"}),e.jsx(L,{placeholder:"Введите описание",name:"description",value:a.description,onChange:n})]}),e.jsx(_,{className:t.edit__info,children:e.jsxs(_,{className:t.edit__info_items,children:[e.jsxs(_,{className:t.edit__cat,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Категории"}),e.jsx(v,{placeholder:a.name,options:Array.isArray(h)?h.map(s=>({value:s.id,label:`${s.name}`})):[],name:"category_id",onChange:s=>o({...a,category_id:s.value})})]}),e.jsxs(_,{className:t.edit__price,children:[e.jsxs(_,{className:t.edit__input,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Цена прихода"}),e.jsx(l,{InputPlaceHolder:"income_price",name:"income_price",value:a.income_price,onChange:n})]}),e.jsxs(_,{className:t.edit__input,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Цена продаж"}),e.jsx(l,{InputPlaceHolder:"sale_price",name:"sale_price",value:a.sale_price,onChange:n})]})]}),e.jsxs(_,{className:t.edit__art,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Артикул"}),e.jsx(_,{className:t.edit__gen,children:e.jsx(l,{disabled:!0,className:t.edit__gen_input,InputPlaceHolder:"Артикул",name:"articul",value:a.articul,onChange:n})})]}),e.jsxs(_,{className:t.edit__cat,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Филлиал"}),e.jsx(v,{placeholder:a.branch_id?(N=r.find(s=>s.id===a.branch_id))==null?void 0:N.name:"Выберите Филлиал",options:Array.isArray(r)?r.map(s=>({value:s.id,label:`${s.name}`})):[],name:"branch_id",onChange:s=>o({...a,branch_id:s.value})})]}),e.jsxs(_,{className:t.edit__inputs,children:[e.jsxs(_,{className:t.edit__input,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"*Код единицы измерения"}),e.jsx(l,{InputPlaceHolder:"Введите код",name:"storage_code",value:a.storage_code,onChange:n})]}),e.jsxs(_,{className:t.edit__input,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Код ИКПУ"}),e.jsx(l,{InputPlaceHolder:"Введите код",name:"tax_code",value:a.tax_code,onChange:n})]}),e.jsxs(_,{className:t.edit__input,children:[e.jsx("h2",{className:t.edit__bottom_title,children:"Код упаковки"}),e.jsx(l,{InputPlaceHolder:"Введите код",name:"packaging_code",value:a.packaging_code,onChange:n})]})]})]})})]})]}),e.jsx(_,{className:t.edit__right,children:e.jsxs(_,{className:t.edit__image,children:[e.jsx(_,{className:t.edit__top,children:e.jsx("h2",{className:t.edit__title,children:"Фото"})}),e.jsxs(_,{className:t.edit__images_container,children:[e.jsx(_,{className:t.edit__new_image,children:e.jsxs("label",{className:t.edit__photo,children:[e.jsx("input",{type:"file",name:"photo",accept:"image/*",onChange:n}),e.jsx("span",{children:e.jsx(D,{})})]})}),e.jsx(_,{className:`${t.edit__current_image} ${m?t.none:""}`,children:a.photo&&e.jsx("img",{src:`${a.photo}`,alt:"Текущий продукт",className:t.edit__image_preview})}),m&&e.jsx("img",{src:m,alt:"Новое фото",className:t.edit__image_preview})]}),e.jsx(R,{BtnContent:e.jsx(e.Fragment,{children:e.jsx("p",{style:{color:"#fff"},children:"Сохранить"})}),BgColor:"blue",type:"submit",BtnBorder:"1px solid #e7e7e7"})]})})]})})]})};export{xe as ProductsEdit,xe as default};