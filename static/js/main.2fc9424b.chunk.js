(this["webpackJsonpreact-firebase-boilerplate"]=this["webpackJsonpreact-firebase-boilerplate"]||[]).push([[0],{109:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(30),c=a.n(i),s=a(27),o=a(43),u=a(54),l=a(25),d=(a(70),a(31)),p=a(41),f=Object(l.a)({reducer:{app:d.b,bills:p.b},middleware:Object(u.a)(Object(l.c)())}),b=a(39),v=a(11),j=a(33),m=a(36),h=a.n(m),O=(a(75),function(){return Object(n.useEffect)((function(){return h.a.start(),function(){h.a.done()}})),""}),x=a(45),D=a(7),g=r.a.lazy((function(){return Promise.all([a.e(6),a.e(4)]).then(a.bind(null,198))})),w=r.a.lazy((function(){return Promise.all([a.e(3),a.e(5)]).then(a.bind(null,197))}));var y=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.app})),a=t.checked,r=t.loggedIn;return Object(n.useEffect)((function(){e(d.a.authenticate())}),[]),a?Object(D.jsx)(b.a,{children:Object(D.jsx)(n.Suspense,{fallback:Object(D.jsx)(O,{}),children:r?Object(D.jsxs)(v.d,{children:[Object(D.jsx)(v.b,{path:j.b.dashboard,children:Object(D.jsx)(w,{})}),Object(D.jsx)(v.a,{to:j.b.dashboard})]}):Object(D.jsxs)(v.d,{children:[Object(D.jsx)(v.b,{path:"/",children:Object(D.jsx)(g,{})}),Object(D.jsx)(v.a,{to:"/"})]})})}):Object(D.jsx)("div",{className:"app-loader-container",children:Object(D.jsx)(x.a,{size:"4rem",color:"white",isLoading:!0})})};var k=function(){return Object(n.useEffect)((function(){Object(o.b)()}),[]),Object(D.jsx)(s.a,{store:f,children:Object(D.jsx)("div",{"data-testid":"app",className:"app",children:Object(D.jsx)(y,{})})})},Y=(a(105),a(106),a(107),a(108),a(109),a(110),a(111),function(e){e&&e instanceof Function&&a.e(7).then(a.bind(null,196)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))});c.a.render(Object(D.jsx)(r.a.StrictMode,{children:Object(D.jsx)(k,{})}),document.getElementById("root")),Y()},14:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=a(24);a(72),a(113),a(114),a(115),a(116);n.a.initializeApp({apiKey:"AIzaSyDvQC-Rxi32r18vMsv26NgGmVcNtzD_M_E",authDomain:"dzaja-projekat-4b9c1.firebaseapp.com",databaseURL:"https://dzaja-projekat-4b9c1.firebaseio.com",projectId:"dzaja-projekat-4b9c1",storageBucket:"dzaja-projekat-4b9c1.appspot.com",messagingSenderId:"304218335336",appId:"1:304218335336:web:f28042d42fe87a4aeb33dd"}),n.a.analytics();var r=n.a.auth(),i=(n.a.storage().ref(),n.a.performance(),n.a.firestore());n.a},31:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(21),r=a(5),i=a(10),c=a.n(i),s=a(25),o=a(14),u=a(38),l=Object(s.b)({name:"app",initialState:{checked:!1,loggedIn:!1,me:{}},reducers:{setMe:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{me:t.payload.me,loggedIn:t.payload.loggedIn,checked:!0})},setLoggedIn:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{loggedIn:t.payload})}}}),d=function(){return function(e){o.a.onAuthStateChanged(function(){var t=Object(n.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return",e(l.actions.setMe({loggedIn:!1,checked:!0,me:{}})));case 2:return t.next=4,o.b.collection("users").doc(null===a||void 0===a?void 0:a.uid).get();case 4:return n=t.sent,t.abrupt("return",e(l.actions.setMe({loggedIn:(null===a||void 0===a?void 0:a.emailVerified)&&n.exists,me:n.exists?Object(r.a)({id:null===a||void 0===a?void 0:a.uid,emailVerified:null===a||void 0===a?void 0:a.emailVerified},n.data()):{},checked:!0})));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},p=Object(r.a)(Object(r.a)({},l.actions),{},{authenticate:d,signup:function(e){var t=e.fullName,a=e.email,r=e.password;return function(){return new Promise(function(){var e=Object(n.a)(c.a.mark((function e(n,i){var s,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.createUserWithEmailAndPassword(a,r);case 3:return s=e.sent,l=s.user,e.next=7,l.sendEmailVerification();case 7:return e.next=9,o.b.collection("users").doc(l.uid).set({id:Object(u.a)(),fullName:t,email:a});case 9:n(l),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),i(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}())}},login:function(e){var t=e.email,a=e.password;return function(e){return new Promise(function(){var r=Object(n.a)(c.a.mark((function n(r,i){var s,u;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.a.signInWithEmailAndPassword(t,a);case 3:if(s=n.sent,(u=s.user)||i(new Error("Failed to login. please try it again later")),u.emailVerified){n.next=9;break}return n.next=9,u.sendEmailVerification();case 9:e(d()),r(u),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(0),i(n.t0);case 16:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e,t){return r.apply(this,arguments)}}())}},logout:function(){return function(e){return new Promise(function(){var t=Object(n.a)(c.a.mark((function t(a,n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.signOut();case 3:e(l.actions.setMe({checked:!0,loggedIn:!1,me:{}})),a(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}())}},resetPassword:function(e){return function(){return o.a.sendPasswordResetEmail(e)}}});t.b=l.reducer},33:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n={login:"/login",signup:"/signup",profile:"/profile",resetPassword:"/reset-password",confirmEmail:"/confirm-email",dashboard:"/dashboard"},r={greeting:"/dashboard/greeting",suppliers:"/dashboard/suppliers",addSupplier:"/dashboard/suppliers/add",editSupplier:"/dashboard/suppliers/:id/edit",customers:"/dashboard/customers"}},41:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(21),r=a(5),i=a(10),c=a.n(i),s=a(25),o=a(22),u=a.n(o),l=a(14),d=a(38),p=function(e){var t={paid:0,leftToPay:0,sumOfValues:0};return e.forEach((function(e){t.paid+=e.paid,t.leftToPay+=e.leftToPay,t.sumOfValues+=e.value})),t},f=Object(s.b)({name:"bills",initialState:{supplierBills:[],statistics:{paid:0,leftToPay:0,sumOfValues:0}},reducers:{setSupplierBills:function(e,t){return Object(r.a)(Object(r.a)({},e),{},{statistics:t.payload.statistics,supplierBills:t.payload.supplierBills})},updateSupplierBills:function(e,t){var a=[t.payload.bill].concat(e.supplierBills),n=p(a);return Object(r.a)(Object(r.a)({},e),{},{statistics:n,supplierBills:a})},removeSupplierBill:function(e,t){var a=e.supplierBills.filter((function(e){return e.id!==t.payload.id})),n=p(a);return Object(r.a)(Object(r.a)({},e),{},{statistics:n,supplierBills:a})},updateTransaction:function(e,t){var a=t.payload.transaction,n=e.supplierBills.map((function(e){if(e.id===a.billID){var t=a.value+e.paid,n=e.leftToPay-a.value;return Object(r.a)(Object(r.a)({},e),{},{paid:t,leftToPay:n,transactions:[a].concat(e.transactions)})}return e})),i=p(n);return Object(r.a)(Object(r.a)({},e),{},{statistics:i,supplierBills:n})},removeTransaction:function(e,t){var a=t.payload.transaction,n=e.supplierBills.map((function(e){if(e.id===a.billID){var t=e.paid-a.value,n=e.leftToPay+a.value;return Object(r.a)(Object(r.a)({},e),{},{paid:t,leftToPay:n,transactions:e.transactions.filter((function(e){return e.id!==a.id}))})}return e})),i=p(n);return Object(r.a)(Object(r.a)({},e),{},{statistics:i,supplierBills:n})}}}),b=Object(r.a)(Object(r.a)({},f.actions),{},{fetchSupplierBills:function(e){var t=e.userId;return function(e){return new Promise(function(){var a=Object(n.a)(c.a.mark((function a(r,i){var s,o,d;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=[],a.next=4,l.b.collection("supplierBill").where("userId","==",t).orderBy("creationDate","desc").get();case 4:return o=a.sent,a.next=7,o.docs.reduce(function(){var e=Object(n.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return n=a.data(),e.next=5,l.b.collection("transactions").where("billID","==",n.id).orderBy("creationDate","desc").get();case 5:r=e.sent,n.transactions=[],n.paid=0,n.leftToPay=n.value,n.creationDate=u()(n.creationDate.toDate()).format("DD/MM/YYYY"),n.billDate=u()(n.billDate.toDate()).format("DD/MM/YYYY"),r.docs.forEach((function(e){var t=e.data();t.creationDate=u()(t.creationDate.toDate()).format("DD/MM/YYYY"),t.transactionDate=u()(t.transactionDate.toDate()).format("DD/MM/YYYY"),n.paid+=Number(t.value),n.leftToPay-=Number(t.value),n.transactions.push(t)})),s.push(n);case 13:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),Promise.resolve());case 7:d=p(s),e(f.actions.setSupplierBills({supplierBills:s,statistics:d})),r(),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),i(a.t0);case 15:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,t){return a.apply(this,arguments)}}())}},addTransaction:function(e){var t=e.billID,a=e.transactionDate,r=e.value;return function(e){return new Promise(function(){var i=Object(n.a)(c.a.mark((function n(i,s){var o,p,b;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o=Object(d.a)(),n.next=4,l.b.collection("transactions").doc(o).set({id:o,billID:t,transactionDate:a,creationDate:new Date,value:Number(r)});case 4:return n.next=6,l.b.collection("transactions").doc(o).get();case 6:p=n.sent,(b=p.data()).creationDate=u()(b.creationDate.toDate()).format("DD/MM/YYYY"),b.transactionDate=u()(b.transactionDate.toDate()).format("DD/MM/YYYY"),e(f.actions.updateTransaction({transaction:b})),i(b),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),s(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e,t){return i.apply(this,arguments)}}())}},addBill:function(e){var t=e.billNumber,a=e.billDate,r=e.supplierName,i=e.value,s=e.userId;return function(e){return new Promise(function(){var o=Object(n.a)(c.a.mark((function n(o,p){var b,v,j;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b=Object(d.a)(),n.next=4,l.b.collection("supplierBill").doc(b).set({id:b,billNumber:t,billDate:a,supplierName:r,creationDate:new Date,value:Number(i),userId:s});case 4:return n.next=6,l.b.collection("supplierBill").doc(b).get();case 6:v=n.sent,(j=v.data()).creationDate=u()(j.creationDate.toDate()).format("DD/MM/YYYY"),j.billDate=u()(j.billDate.toDate()).format("DD/MM/YYYY"),j.paid=0,j.leftToPay=Number(i),j.transactions=[],e(f.actions.updateSupplierBills({bill:j})),o(j),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(0),p(n.t0);case 20:case"end":return n.stop()}}),n,null,[[0,17]])})));return function(e,t){return o.apply(this,arguments)}}())}},deleteBill:function(e){var t=e.id;return function(e){return new Promise(function(){var a=Object(n.a)(c.a.mark((function a(n,r){var i;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.b.collection("supplierBill").where("id","==",t).get();case 3:return i=a.sent,a.next=6,l.b.collection("transactions").where("billID","==",t).get();case 6:a.sent.docs.forEach((function(e){e.ref.delete()})),i.docs[0].ref.delete(),e(f.actions.removeSupplierBill({id:t})),n(),a.next=16;break;case 13:a.prev=13,a.t0=a.catch(0),r(a.t0);case 16:case"end":return a.stop()}}),a,null,[[0,13]])})));return function(e,t){return a.apply(this,arguments)}}())}},deleteTransaction:function(e){var t=e.transaction;return function(e){return new Promise(function(){var a=Object(n.a)(c.a.mark((function a(n,r){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,l.b.collection("transactions").where("id","==",t.id).get();case 3:a.sent.docs[0].ref.delete(),e(f.actions.removeTransaction({transaction:t})),n(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),r(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e,t){return a.apply(this,arguments)}}())}}});t.b=f.reducer},43:function(e,t,a){"use strict";a.d(t,"b",(function(){return u}));a(1);var n=a(50),r=a(26),i=a(32),c=a(7),s=function(e){var t=e.name,a=e.className,r=e.style;return Object(c.jsx)(n.a,{icon:t,className:a,style:r})};s.defaultProps={name:"",className:"",style:{}};var o=s,u=function(){return r.b.add(i.b,i.a,i.c)};t.a=o},45:function(e,t,a){"use strict";var n=a(5),r=a(42),i=a(52),c=a(7),s=["color","size","isLoading"],o=function(e){var t=e.color,a=e.size,o=e.isLoading,u=Object(r.a)(e,s);return Object(c.jsx)(i.ClipLoader,Object(n.a)({color:t,size:a,loading:o},u))};o.defaultProps={color:"black",size:"1.5rem",isLoading:!1};var u=o;t.a=u}},[[112,1,2]]]);
//# sourceMappingURL=main.2fc9424b.chunk.js.map