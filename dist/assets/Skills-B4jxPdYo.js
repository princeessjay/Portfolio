import{r as a,a as t,j as e,b as i}from"./index-DyPimCT9.js";const m=[{id:1,skillName:"HTML",value:95},{id:2,skillName:"CSS",value:80},{id:3,skillName:"JavaScript",value:80},{id:4,skillName:"React JS",value:85},{id:5,skillName:"Tailwind CSS",value:85},{id:6,skillName:"Artificial Intelligence",value:90},{id:7,skillName:"React Router",value:80},{id:8,skillName:"Github",value:95}],c=()=>{const s=a.useRef();return a.useEffect(()=>{t(s)},[]),e.jsx(e.Fragment,{children:e.jsxs("section",{ref:s,id:"skills",className:"mt-10 md:mt-20 w-full",children:[e.jsx("h1",{className:"text-xl md:text-2xl lg:text-3xl font-bold pl-2",children:"SKILLS"}),e.jsx("h2",{className:"text-sm md:text-lg lg:text-xl mt-5 text-center text-blue-500",children:"I Work Hard to Improve My Skills Regularly"}),e.jsx("div",{className:"w-full md:w-4/5 columns-1 md:gap-12 md:columns-2 mx-auto md:mt-5 lg:mt-10  p-5",children:m.map(l=>e.jsxs("div",{className:"mb-10 hover:scale-105 transition-transform",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h1",{children:l.skillName}),e.jsxs("h1",{children:[l.value,"%"]})]}),e.jsx(i.Progress,{value:l.value,color:"blue"})]},l.id))})]})})};export{c as default};