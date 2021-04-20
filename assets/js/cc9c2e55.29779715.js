(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=(r(0),r(109));const o={sidebar_position:1},i={unversionedId:"contributing/tutorial-basics/create-a-page",id:"contributing/tutorial-basics/create-a-page",isDocsHomePage:!1,title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/contributing/tutorial-basics/create-a-page.md",sourceDirName:"contributing/tutorial-basics",slug:"/contributing/tutorial-basics/create-a-page",permalink:"/slash-nlp/docs/contributing/tutorial-basics/create-a-page",editUrl:"https://github.com/slash-nlp/slash-nlp/docs/contributing/tutorial-basics/create-a-page.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contributionSidebar",previous:{title:"Project Structure",permalink:"/slash-nlp/docs/contributing/getting-started/project-structure"},next:{title:"Create a Document",permalink:"/slash-nlp/docs/contributing/tutorial-basics/create-a-document"}},c=[{value:"Create your first React Page",id:"create-your-first-react-page",children:[]},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",children:[]}],p={toc:c};function l({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Add ",Object(n.b)("strong",{parentName:"p"},"Markdown or React")," files to ",Object(n.b)("inlineCode",{parentName:"p"},"src/pages")," to create a ",Object(n.b)("strong",{parentName:"p"},"standalone page"),":"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"src/pages/index.js")," -> ",Object(n.b)("inlineCode",{parentName:"li"},"localhost:3000/")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"src/pages/foo.md")," -> ",Object(n.b)("inlineCode",{parentName:"li"},"localhost:3000/foo")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"src/pages/foo/bar.js")," -> ",Object(n.b)("inlineCode",{parentName:"li"},"localhost:3000/foo/bar"))),Object(n.b)("h2",{id:"create-your-first-react-page"},"Create your first React Page"),Object(n.b)("p",null,"Create a file at ",Object(n.b)("inlineCode",{parentName:"p"},"src/pages/my-react-page.js"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',title:'"src/pages/my-react-page.js"'},'import React from "react";\nimport Layout from "@theme/Layout";\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n')),Object(n.b)("p",null,"A new page is now available at ",Object(n.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-react-page"),"."),Object(n.b)("h2",{id:"create-your-first-markdown-page"},"Create your first Markdown Page"),Object(n.b)("p",null,"Create a file at ",Object(n.b)("inlineCode",{parentName:"p"},"src/pages/my-markdown-page.md"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',title:'"src/pages/my-markdown-page.md"'},"# My Markdown page\n\nThis is a Markdown page\n")),Object(n.b)("p",null,"A new page is now available at ",Object(n.b)("inlineCode",{parentName:"p"},"http://localhost:3000/my-markdown-page"),"."))}l.isMDXComponent=!0},109:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?n.a.createElement(m,c(c({ref:t},l),{},{components:r})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);