(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{28:function(e,c,t){},29:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){},45:function(e,c,t){"use strict";t.r(c);var n=t(0),i=t.n(n),a=t(14),r=t.n(a),s=(t(28),t(13)),l=t(3),o=(t(29),t(8)),d=t(9),j=(t(35),t(23)),m=(t(36),t(1));var b=function(){var e=Object(o.c)((function(e){return e.addtocart})),c=Object(n.useState)(0),t=Object(j.a)(c,2),i=t[0],a=t[1];return Object(n.useEffect)((function(){!function(){var c=0;e.forEach((function(e){c+=e.price*e.qty})),a(c)}()}),[e]),Object(m.jsxs)("div",{className:"subtotal__container",children:[Object(m.jsx)("h1",{children:"Total Price"}),Object(m.jsxs)("h5",{children:["Total: $",i]})]})};var h=function(){var e=Object(o.c)((function(e){return e.addtocart})),c=Object(o.b)();return Object(m.jsxs)("div",{className:"checkout__content",children:[Object(m.jsx)("div",{className:"subtotal",children:Object(m.jsx)(b,{})}),Object(m.jsxs)("div",{className:"checkout__container",children:[Object(m.jsx)("div",{className:"item__content",children:e.map((function(e,t){return Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"image__container",children:Object(m.jsx)("img",{src:e.image,className:"item__image"})}),Object(m.jsxs)("div",{className:"item__details",children:[Object(m.jsx)("h1",{children:e.title}),Object(m.jsx)("p",{children:e.description}),Object(m.jsx)("p",{children:Array(parseInt(e.rating)).fill(null).map((function(e){return Object(m.jsx)("span",{className:"rating",children:Object(m.jsx)(d.c,{})})}))}),Object(m.jsxs)("p",{children:["$",e.price,Object(m.jsxs)("p",{children:[Object(m.jsx)("span",{children:"SubTotal :"}),Object(m.jsxs)("span",{children:["$",e.price*e.qty]})]})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("button",{className:"increment",onClick:function(t){return c(function(e){return{type:"increment",payload:e}}(e))},children:"+"}),Object(m.jsx)("span",{children:e.qty}),Object(m.jsx)("button",{className:"decrement",onClick:function(t){return c(function(e){return{type:"decrement",payload:e}}(e))},children:"-"})]}),Object(m.jsx)("button",{className:"remove",onClick:function(t){return c(function(e){return{type:"remove_from_cart",payload:e}}(e))},children:"Remove From Cart"})]})]},t)}))}),Object(m.jsx)("div",{className:"subtotal__res",children:Object(m.jsx)(b,{})})]})]})};t(38);var u=function(e){var c=e.id,t=e.title,n=e.image,i=e.rating,a=e.description,r=e.price,s=Object(o.b)();return Object(m.jsx)("div",{className:"product__container",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card__image",children:Object(m.jsx)("img",{src:n})}),Object(m.jsxs)("div",{className:"card__content",children:[Object(m.jsx)("h3",{children:t}),Object(m.jsx)("p",{children:a}),Object(m.jsx)("p",{children:Array(parseInt(i)).fill(null).map((function(e,c){return Object(m.jsx)("span",{className:"rating",children:Object(m.jsx)(d.c,{})})}))}),Object(m.jsxs)("p",{children:["$",r]}),Object(m.jsx)("button",{onClick:function(e){return s(function(e){return{type:"add_to_cart",payload:e}}({id:c,title:t,image:n,rating:i,description:a,price:r,qty:1}))},children:"Add to cart"})]})]})})},p=(t(39),[{id:1,title:"EYEBOGLER Regular Fit Men's Hoodie",image:"https://images-na.ssl-images-amazon.com/images/I/51ZGLmTrmCL._UL1313_.jpg",ratings:"5",description:"Care Instructions: Machine Wash",price:"200"},{id:2,title:"T-Rock Men's Sneaker",image:"https://images-na.ssl-images-amazon.com/images/I/61t6Mk3v48L._UL1500_.jpg",ratings:"4",description:"Closure: lace-up",price:"500"},{id:3,title:"All-new Echo Dot (4th Gen) | #1 smart speaker brand in India with Alexa (Black)",image:"https://images-na.ssl-images-amazon.com/images/I/61Z5bOhKKAL._SL1000_.jpg",ratings:"5",description:"Our most popular smart speaker now comes in a refreshed design and delivers loud, crisp sound with improved bass.",price:"800"},{id:4,title:"OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)",image:"https://images-na.ssl-images-amazon.com/images/I/71vZypjNkPS._SL1500_.jpg",ratings:"5",description:"Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz",price:"800"},{id:5,title:"Amazon Brand - Solimo 60 Litres Rucksack Bag for Trekking and Camping, Orange and Grey",image:"https://m.media-amazon.com/images/I/9138iL3vloL._AC_UY218_.jpg",ratings:"5",description:"Rucksack bag made from water-resistant polyester material making it ideal for treks and camping trips",price:"800"},{title:"Lenovo IdeaPad Slim 5 11th Gen Intel Core i5 15.6 FHD IPS Thin & Light Laptop (16GB/512GB SSD/Win 10/Office/Integrated Iris Xe...",image:"https://images-na.ssl-images-amazon.com/images/I/61WNxdAeAoL._SL1000_.jpg",ratings:"5",description:"Processor: 11th Gen Intel Tiger Lake Core i5-1135G7 | Speed: 2.4 GHz (Base) - 4.2 GHz (Max) | 4 Cores | 8MB Cache",price:"800"}]);var O=function(){return Object(m.jsx)("div",{className:"home__container",children:Object(m.jsx)("div",{className:"grid__content",children:p.map((function(e,c){return Object(m.jsx)("div",{className:"grid__item1",children:Object(m.jsx)(u,{id:e.id,title:e.title,image:e.image,rating:e.ratings,description:e.description,price:e.price})})}))})})};t(40);var x=function(){var e=Object(o.c)((function(e){return e.addtocart})),c=function(){document.querySelectorAll("li").forEach((function(e){e.addEventListener("click",(function(){document.getElementById("check").checked=!0}))}))};return Object(m.jsx)("div",{className:"navbar",children:Object(m.jsxs)("div",{className:"nav__container",children:[Object(m.jsx)("label",{className:"navbar__menu",for:"check",children:Object(m.jsx)(d.a,{})}),Object(m.jsx)("input",{id:"check",type:"checkbox"}),Object(m.jsx)("div",{className:"image__container",children:Object(m.jsx)(s.b,{to:"/",children:Object(m.jsx)("h3",{onClick:c(),children:"Ecommerce"})})}),Object(m.jsxs)("div",{className:"nav__content",children:[Object(m.jsx)("input",{type:"text",className:"text__search"}),Object(m.jsx)("div",{className:"nav__links",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:c(),children:Object(m.jsx)("span",{children:"Sign In"})}),Object(m.jsx)("li",{onClick:c(),children:Object(m.jsx)("span",{children:"Account"})}),Object(m.jsx)("li",{onClick:c(),children:"Return & Cancel"}),Object(m.jsx)("li",{onClick:c(),children:Object(m.jsx)(s.b,{to:"/checkout",children:Object(m.jsxs)("span",{children:[Object(m.jsx)(d.b,{})," Cart",Object(m.jsx)("span",{className:"count",children:e.length})]})})}),Object(m.jsx)("li",{onClick:c(),children:"Sign Out"})]})})]})]})})};var g=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Home Page"}),Object(m.jsx)(s.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsxs)(l.a,{exact:!0,path:"/",children:[Object(m.jsx)(x,{}),Object(m.jsx)(O,{})]}),Object(m.jsxs)(l.a,{path:"/checkout",children:[Object(m.jsx)(x,{}),Object(m.jsx)(h,{})]})]})})]})},f=t(16),_=t(17),v=[],k=function(e,c){var t=Object(_.a)(e);return t.splice(c,1),t},y=function(e,c){var t=Object(_.a)(e);return t[c].qty+=1,t},N=function(e,c){var t=Object(_.a)(e);return t[c].qty>1&&(t[c].qty-=1),t},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"add_to_cart":var t=!1;return e.forEach((function(e){e.id===c.payload.id&&(t=!0)})),!1===t?e.concat(c.payload):e;case"remove_from_cart":var n=e.indexOf(c.payload);return k(e,n);case"increment":var i=e.indexOf(c.payload);return e=y(e,i);case"decrement":var a=e.indexOf(c.payload);return e=N(e,a);default:return e}},L=Object(f.a)({addtocart:C}),I=Object(f.b)(L);r.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(o.a,{store:I,children:Object(m.jsx)(g,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.411b236e.chunk.js.map