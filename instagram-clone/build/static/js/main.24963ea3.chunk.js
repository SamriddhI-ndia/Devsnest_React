(this["webpackJsonpinstagram-clone"]=this["webpackJsonpinstagram-clone"]||[]).push([[0],{63:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),a=s(13),r=s.n(a),n=(s(31),s(32),s(3)),l=s(8),o=s(0),j=function(){Object(n.c)((function(e){return e.user}));return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:Object(o.jsx)("img",{src:"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"search",children:Object(o.jsx)("input",{placeholder:"\uf002 Search"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)(l.b,{to:"/landing",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:Object(o.jsx)("i",{className:"bi bi-house-door-fill"})})})}),Object(o.jsx)(l.b,{to:"/message",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:Object(o.jsx)("i",{className:"bi bi-chat"})})})}),Object(o.jsx)(l.b,{to:"/image",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:Object(o.jsx)("i",{className:"bi bi-compass"})})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:Object(o.jsx)("i",{className:"bi bi-heart",onClick:function(){return alert("Not functioning yet!")}})})}),Object(o.jsx)(l.b,{to:"/profile",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("img",{className:"profile_picture",src:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",alt:"load nahi ho paai"})})})]})})]})})})},b=s(7),d=s(26),p=function(){var e=Object(n.c)((function(e){return e.url})),t=(Object(n.c)((function(e){return e.user})),Object(n.b)()),s=Object(c.useState)(!0),i=Object(d.a)(s,2),a=i[0],r=i[1];return Object(c.useEffect)((function(){t((function(e){fetch("https://api.unsplash.com/photos/random?client_id=WJKJlZ9MpEZ2NXMt63XubC4H6hztoZzGBdYx9Bzme9Q&count=30").then((function(e){return e.json()})).then((function(t){console.log(t[0].urls.regular),e({type:"UPDATE_POST",payload:t})})).catch((function(){alert("Loading")}))}))}),[]),Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h1",{}),null==e?console.log("loading"):Object(b.a)(Array(30)).map((function(t,s){return Object(o.jsxs)("div",{className:"col-md-10 p-0 post",children:[Object(o.jsxs)("div",{style:{margin:"10px"},children:[Object(o.jsx)("img",{className:"profile_picture",src:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",alt:"load nahi ho paai",onDoubleClick:function(){console.log("hua"),r(!a)}}),Object(o.jsxs)("h6",{children:["@username",s+1]}),Object(o.jsx)("i",{className:"bi bi-three-dots dot"})]}),Object(o.jsx)("img",{className:"post-img",src:void 0==e[s]?"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg":e[s].urls.regular,alt:"load nh ho pai"}),Object(o.jsxs)("div",{className:"post-icon",children:[Object(o.jsx)("span",{onClick:function(){r(!a)},children:a?Object(o.jsx)("i",{style:{color:"#ff3333"},className:"bi bi-heart-fill"}):Object(o.jsx)("i",{className:"bi bi-heart"})}),Object(o.jsx)("i",{className:"bi bi-chat"}),Object(o.jsx)("i",{className:"bi bi-share"}),Object(o.jsx)("i",{style:{float:"right"},className:"bi bi-file-arrow-down"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"profile_picture",src:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",alt:"load nahi ho paai"}),Object(o.jsxs)("p",{className:"liked",children:["Liked by ",Object(o.jsxs)("b",{children:["username",s+2]})," and ",s+40," others."]})]}),Object(o.jsxs)("div",{className:"add_comment",children:[Object(o.jsx)("i",{className:"bi bi-emoji-laughing"}),Object(o.jsx)("input",{placeholder:"Add a comment...",style:{display:"inline-block",margin:"15px"}}),Object(o.jsx)("span",{style:{float:"right",margin:"5px"},children:"Post"})]})]})}))]})})},h=function(){var e=Object(n.c)((function(e){return e.user})),t=Object(n.c)((function(e){return e.url}));return Object(o.jsxs)("div",{className:"col",children:[Object(o.jsxs)("div",{style:{marginTop:"20px"},children:[Object(o.jsx)("img",{className:"suggestion-img",style:{width:"60px",height:"60px",border:"0px   solid white",display:"inline-block",marginTop:"20px"},src:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"}),Object(o.jsx)("h6",{style:{display:"inline-block",marginLeft:"10px"},children:"Professor"}),Object(o.jsx)("span",{style:{marginTop:"40px",marginLeft:"120px",color:"blue"},children:"Switch"}),Object(o.jsx)("p",{style:{marginLeft:"70px",marginTop:"-30px",color:"grey"},children:"Profile name"})]}),Object(o.jsxs)("p",{style:{fontSize:"0.8rem",marginTop:"30px"},children:[Object(o.jsx)("b",{children:"Suggestions   for you! "}),Object(o.jsx)("span",{style:{marginLeft:"130px"},children:"View All"})]}),Object(b.a)(Array(5)).map((function(s,c){return Object(o.jsxs)("div",{style:{fontSize:"0.8rem"},children:[Object(o.jsx)("img",{className:"suggestion-img",style:{width:"30px",height:"30px",border:"0px solid white",display:"inline-block"},src:void 0==t[c]?e.profilepicture:t[c].urls.regular}),Object(o.jsxs)("p",{style:{display:"inline-block",marginLeft:"10px"},children:["@username",c+10," ",Object(o.jsx)("span",{style:{float:"right",color:"blue",marginLeft:"140px"},children:"Follow"})]}),Object(o.jsx)("p",{style:{color:"grey",marginLeft:"40px",marginTop:"-20px"},children:"Profile name"})]})})),Object(o.jsxs)("p",{style:{fontSize:"0.6rem",color:"grey",margin:"10px"},children:["About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top accounts . Hashtags . Language English (UK)",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})," 2021 INSTAGRAM FROM SAMRIDDHI"]})]})},m=function(){var e=Object(n.c)((function(e){return e.url}));return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-8",children:[Object(o.jsx)("div",{className:"card story",children:Object(b.a)(Array(15)).map((function(t,s){return Object(o.jsxs)("div",{className:"story_img",children:[Object(o.jsx)("img",{src:void 0==e[s+14]?"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg":e[s+14].urls.regular,alt:"load nh ho pai"}),Object(o.jsxs)("p",{style:{margin:"4px 14px",fontSize:"0.8rem",color:"grey"},children:["user",s+2]})]})}))}),Object(o.jsx)(p,{})]}),Object(o.jsx)("div",{className:"col-md-4",children:Object(o.jsx)(h,{})})]})})},u=function(){var e=Object(n.c)((function(e){return e.url}));return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(b.a)(Array(30)).map((function(t,s){return Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("img",{style:{width:"290px",height:"280px",margin:"15px 5px"},src:void 0==e[s]?"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg":e[s].urls.regular})})}))})})},x=(s(63),s(2)),O=function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col flex",style:{color:"grey"},children:[Object(o.jsx)("i",{className:"bi bi-chat-dots",style:{color:"black",fontSize:"5rem"}}),Object(o.jsx)("h1",{children:"Your Message"}),Object(o.jsx)("h4",{children:"Send private chats and messages to a friend or group."}),Object(o.jsx)("button",{className:"msg-btn",onClick:function(){return alert("Not functional yet!")},children:"Send message"})]})})})},g=function(){var e=Object(n.c)((function(e){return e.user})),t=Object(n.c)((function(e){return e.url}));return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-3",children:Object(o.jsx)("img",{className:"profile",src:"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"})}),Object(o.jsxs)("div",{className:"col-8 profile-details",children:[Object(o.jsx)("h3",{children:"Professor"}),Object(o.jsx)("button",{children:"Edit Profile"}),Object(o.jsx)("i",{className:"bi bi-gear-wide"}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("span",{className:"posts",children:[Object(o.jsx)("b",{children:"9"})," posts"]}),Object(o.jsxs)("span",{className:"followers",children:[Object(o.jsx)("b",{children:"200"})," followers"]}),Object(o.jsxs)("span",{className:"following",children:[Object(o.jsx)("b",{children:"200"})," following"]})]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{style:{fontSize:"1.2rem",marginLeft:"-1px"},children:Object(o.jsx)("b",{children:"Anonymous"})}),Object(o.jsx)("br",{}),"An Instagram bio is the small area under your username represent your brand."]})]})]}),Object(o.jsx)("div",{className:" high",children:Object(b.a)(Array(5)).map((function(e,s){return Object(o.jsxs)("div",{className:"highlights",children:[Object(o.jsx)("img",{src:void 0==t[s+4]?"https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg":t[s+4].urls.regular,alt:"load nh ho pai"}),Object(o.jsxs)("p",{style:{margin:"9px 8px",fontSize:"0.8rem",color:"grey"},children:["hightlight",s+2]})]})}))}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"row",style:{marginTop:"50px"},children:Object(b.a)(Array(9)).map((function(s,c){return Object(o.jsx)("div",{className:"col",children:Object(o.jsx)("img",{style:{width:"290px",height:"280px",margin:"15px 5px"},src:void 0==t[c+20]?e.profilepicture:t[c+20].urls.regular})})}))})]})};var f=function(){var e=Object(n.b)();return Object(c.useEffect)((function(){e((function(e){fetch("/data/user.json").then((function(e){return e.json()})).then((function(t){console.log(t),e({type:"UPDATE_USER",payload:t})}))}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{exact:!0,path:"/image",children:Object(o.jsx)(u,{})}),Object(o.jsx)(x.a,{exact:!0,path:"/landing",children:Object(o.jsx)(m,{})}),Object(o.jsx)(x.a,{exact:!0,path:"/message",children:Object(o.jsx)(O,{})}),Object(o.jsx)(x.a,{exact:!0,path:"/profile",children:Object(o.jsx)(g,{})})]})]})})})},v=s(12),N=s(25),y={username:"",profilepicture:""},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_USER":return t.payload;default:return e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_POST":return t.payload;default:return e}},_=Object(v.b)({user:w,url:S}),A=Object(v.c)(_,Object(v.a)(N.a));r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(n.a,{store:A,children:Object(o.jsx)(f,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.24963ea3.chunk.js.map