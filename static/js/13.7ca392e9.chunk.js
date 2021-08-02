(this["webpackJsonpclone-airbnb"]=this["webpackJsonpclone-airbnb"]||[]).push([[13],{137:function(e,t,n){"use strict";n.r(t);var a=n(55),s=n.n(a),c=n(56),r=n(62),i=n(0),o=(n(89),n(27)),l=n(4),d=n(57),u=n.n(d),j=n(71),b=n.n(j),h=n(61),p=n.n(h),x=n(3);var O=function(e){var t=function(){var t=Object(c.a)(s.a.mark((function t(n,a){var c,r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n,a),t.next=3,p()({text:"Are you sure you want to cancel your trip to ".concat(a),icon:"warning",buttons:!0});case 3:if(!t.sent){t.next=12;break}return c="".concat(window.apiHost,"/reservation/cancel"),r={token:e.token,bid:n},t.next=9,u.a.post(c,r);case 9:i=t.sent,console.log(i.data),"cancelled"===i.data.msg?p()({title:"canceled",icon:"success"}):p()({title:"there was an error cancelling",icon:"error"});case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),n=e.booking.map((function(n,a){var s="".concat(b()(n.checkIn).format("MMM Do"),"-").concat(b()(n.checkOut).format("MMM Do YYYY"));return Object(x.jsxs)("tr",{className:"booking-row",children:[Object(x.jsx)("td",{children:"past"===e.type&&"confirmed"===n.status?"Completed":n.status}),Object(x.jsxs)("td",{children:[Object(x.jsx)("div",{className:"booking-detail",children:s}),Object(x.jsx)("div",{className:"booking-detail",children:n.venueData.title}),Object(x.jsx)("div",{className:"booking-detail",children:n.venueData.location})]}),Object(x.jsxs)("td",{children:[Object(x.jsxs)("div",{className:"booking-detail",children:["Confirmation #: ",n.conf]}),Object(x.jsxs)("div",{className:"booking-detail",children:[n.numberOfGuests," Guests, ",n.totalNights," Nights"]}),Object(x.jsxs)("div",{className:"booking-detail",children:["$",n.pricePerNight," per night"]}),Object(x.jsxs)("div",{className:"booking-detail",children:["$",n.totalPrice," Total"]})]}),Object(x.jsxs)("td",{children:[Object(x.jsx)("div",{className:"booking-detail pointer",children:"Print Reservation"}),"upcoming"===e.type&&"cancelled"!==n.status?Object(x.jsx)("div",{onClick:function(){t(n.id,n.venueData.location)},className:"booking-detail pointer",children:"Cancel Confirmation"}):Object(x.jsx)(x.Fragment,{})]})]},a)}));return Object(x.jsxs)("table",{className:"booking",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Status"}),Object(x.jsx)("th",{children:"Dates and location"}),Object(x.jsx)("th",{children:"Details"}),Object(x.jsx)("th",{children:"Actions"})]})}),Object(x.jsx)("tbody",{children:n})]})},f=n(26);var v=function(e){return Object(x.jsxs)("ul",{className:"sidenav sidenav-fixed",children:[Object(x.jsx)("li",{children:Object(x.jsx)("div",{className:"user-view valign-wrapper center-align",children:Object(x.jsx)("img",{className:"",src:"https://airbnb-clone-prexel-images.s3.amazonaws.com/genericAvatar.png",alt:"..."})})}),Object(x.jsx)("li",{children:Object(x.jsx)(f.b,{to:"/account/reservations/confirmed",children:"Confirmed Reservations"})}),Object(x.jsx)("li",{children:Object(x.jsx)(f.b,{to:"/account/reservations/past",children:"Past Reservations"})}),Object(x.jsx)("li",{children:Object(x.jsx)(f.b,{to:"/account/change-pass",children:"Change Password"})})]})},m=n(13),w=n(14),g=n(16),k=n(15),N=function(e){Object(g.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={oldPassword:"",newPassword:""},e.checkOldPW=function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e.setState({oldPassword:n.target.value});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.checkNewPW=function(t){t.preventDefault(),e.setState({newPassword:t.target.value})},e.submitPW=function(){var t=Object(c.a)(s.a.mark((function t(n){var a,c,r,i,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a="".concat(window.apiHost,"/users/login"),c={email:e.props.auth.email,password:e.state.oldPassword},t.next=5,u.a.post(a,c);case 5:if("badPass"!==(r=t.sent).data.msg){t.next=10;break}p()({title:"Invaid Password",text:"The Password you provided is wrong",icon:"error"}),t.next=17;break;case 10:if("loggedIn"!==r.data.msg){t.next=17;break}return i="".concat(window.apiHost,"/users/change-password"),o={token:e.props.auth.token,newPassword:e.state.newPassword},t.next=15,u.a.post(i,o);case 15:"passUpdated"===t.sent.data.msg&&p()({title:"Password updated",icon:"success"});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(w.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("form",{onSubmit:this.submitPW,children:[Object(x.jsx)("input",{className:"oldPw ",id:"oldpass",placeholder:"enter old password",onChange:this.checkOldPW}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{className:"newPw ",id:"newpass",placeholder:"enter new password",onChange:this.checkNewPW})}),Object(x.jsx)("div",{className:"button ",children:Object(x.jsxs)("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",children:["Submit",Object(x.jsx)("i",{className:"material-icons right",children:"send"})]})})]})})}}]),n}(i.Component);t.default=function(e){var t=Object(o.e)((function(e){return e.auth}),o.c),n=Object(i.useState)([]),a=Object(r.a)(n,2),d=a[0],j=a[1],h=Object(i.useState)([]),p=Object(r.a)(h,2),f=p[0],m=p[1];return Object(i.useEffect)((function(){var e="".concat(window.apiHost,"/users/getBookings"),n={token:t.token};(function(){var t=Object(c.a)(s.a.mark((function t(){var a,c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.post(e,n);case 2:a=t.sent,c=[],r=[],a.data.forEach((function(e){var t=b()();b()(e.checkOut).diff(t,"days")<0?c.push(e):r.push(e)})),j(c),m(r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(x.jsxs)("div",{className:"account container-fluid",children:[Object(x.jsx)(v,{}),Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"col s8 offset-s3",children:[Object(x.jsx)(l.a,{exact:!0,path:"/account",render:function(){return Object(x.jsx)("h1",{children:"choose an option on the left"})}}),Object(x.jsx)(l.a,{exact:!0,path:"/account/reservations/confirmed",render:function(){return Object(x.jsx)(O,{type:"upcoming",booking:f,token:t.token})}}),Object(x.jsx)(l.a,{exact:!0,path:"/account/reservations/past",render:function(){return Object(x.jsx)(O,{type:"past",booking:d})}}),Object(x.jsx)(l.a,{exact:!0,path:"/account/change-pass",render:function(){return Object(x.jsx)(N,{auth:t})}})]})})]})}},89:function(e,t,n){}}]);
//# sourceMappingURL=13.7ca392e9.chunk.js.map