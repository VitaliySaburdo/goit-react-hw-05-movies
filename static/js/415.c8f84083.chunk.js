"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{7238:function(n,t,e){e.d(t,{AR:function(){return s},E$:function(){return p},cI:function(){return l},kh:function(){return d},n4:function(){return f}});var r=e(5861),a=e(7757),o=e.n(a),i=e(3263),c="https://api.themoviedb.org/3/",u="ab57a8d74b0df3fdba80a78e42f32d17",s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"trending/movie/week?api_key=").concat(u,"&page=").concat(t),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US"),n.next=3,i.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(c,"search/movie?api_key=").concat(u,"&query=").concat(t,"&page=").concat(e,"&language=en-US"),n.next=3,i.Z.get(r);case 3:return a=n.sent,n.abrupt("return",a.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},5990:function(n,t,e){e.d(t,{E:function(){return p}});var r,a,o=e(168),i=e(6444),c=i.ZP.button(r||(r=(0,o.Z)(["\n  display: inline-block;\n  width: 120px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 16px;\n  color: white;\n  background-color: blue;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  margin-bottom: 50px;\n  margin-top: 30px;\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n  }\n"]))),u=i.ZP.button(a||(a=(0,o.Z)(["\n  display: inline-block;\n  width: 120px;\n  height: 40px;\n  cursor: pointer;\n  font-size: 16px;\n  color: white;\n  background-color: blue;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  margin-bottom: 50px;\n  margin-top: 30px;\n  margin-right: 20px;\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n  }\n"]))),s=e(184),p=function(n){var t=n.nextPage,e=n.previousPage,r=n.page,a=n.totalPages;return(0,s.jsxs)("div",{children:[(0,s.jsx)(u,{disabled:1===r,onClick:function(){return e()},type:"button",children:"Previous page"}),(0,s.jsx)(c,{disabled:r===a,onClick:function(){return t()},type:"button",children:"Next page"})]})}},7047:function(n,t,e){e.d(t,{e:function(){return h}});var r,a,o,i,c=e(1087),u=e(7689),s=e(857),p=e(168),l=e(6444),d=l.ZP.ul(r||(r=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 228px);\n  gap: 16px;\n  list-style-type: none;\n"]))),f=(l.ZP.li(a||(a=(0,p.Z)(["\n  position: relative;\n  transition: 0.5s linear;\n  border-radius: 8px;\n  cursor: pointer;\n"]))),l.ZP.img(o||(o=(0,p.Z)(["\n  display: block;\n  width: 280px;\n  height: 360px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n"])))),x=l.ZP.p(i||(i=(0,p.Z)(["\n  text-transform: uppercase;\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),g=e(184),h=function(n){var t=n.movies,e=(0,u.TH)();return(0,g.jsx)(d,{children:t.map((function(n){return(0,g.jsx)("li",{children:(0,g.jsxs)(c.rU,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,g.jsx)(f,{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):s,alt:n.title,width:"395",height:"574"}),(0,g.jsx)(x,{children:n.title})]})},n.id)}))})}},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),o=e(7757),i=e.n(o),c=e(5990),u=e(2791),s=e(7238),p=e(7047),l=e(7911),d=e(184);t.default=function(){var n=(0,u.useState)([]),t=(0,a.Z)(n,2),e=t[0],o=t[1],f=(0,u.useState)(1),x=(0,a.Z)(f,2),g=x[0],h=x[1],b=(0,u.useState)(1),m=(0,a.Z)(b,2),v=m[0],w=m[1],k=(0,u.useState)(!1),Z=(0,a.Z)(k,2),y=Z[0],_=Z[1];(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(i().mark((function n(){var t,e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(!0),n.prev=1,n.next=4,(0,s.AR)(g);case 4:t=n.sent,e=t.results,r=t.total_pages,w(r),0!==e&&o(e),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:return n.prev=14,_(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[g,v]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Trending today"}),y&&(0,d.jsx)(l.a,{}),e.length>0&&(0,d.jsx)(p.e,{movies:e}),!v&&(0,d.jsx)(c.E,{previousPage:function(){h((function(n){return n-1}))},nextPage:function(){h((function(n){return n+1}))},page:g,totalPages:v})]})}},857:function(n,t,e){n.exports=e.p+"static/media/No_image_poster.68ae350692995e841a18.png"}}]);
//# sourceMappingURL=415.c8f84083.chunk.js.map