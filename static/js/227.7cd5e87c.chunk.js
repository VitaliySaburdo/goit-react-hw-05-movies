(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[227],{7238:function(e,n,t){"use strict";t.d(n,{AR:function(){return u},E$:function(){return p},cI:function(){return f},kh:function(){return l},n4:function(){return h}});var r=t(5861),a=t(7757),c=t.n(a),i=t(3263),s="https://api.themoviedb.org/3/",o="ab57a8d74b0df3fdba80a78e42f32d17",u=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"trending/movie/week?api_key=").concat(o,"&page=").concat(n),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(n,"&page=").concat(t,"&language=en-US"),e.next=3,i.Z.get(r);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},227:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r,a,c,i=t(5861),s=t(9439),o=t(7757),u=t.n(o),p=t(7689),f=t(7238),l=t(2791),h=t(1087),d=t(168),v=t(6444),x=v.ZP.div(r||(r=(0,d.Z)(["\n  margin-top: 10px;\n  display: flex;\n"]))),g=v.ZP.img(a||(a=(0,d.Z)(["\n  margin-right: 20px;\n"]))),m=v.ZP.ul(c||(c=(0,d.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  gap: 10px;\n  display: flex;\n"]))),y=t(7911),w=t(2007),k=t.n(w),b=t(184),j=function(e){var n,t,r=e.movieDetails,a=r.poster_path,c=r.overview,i=r.title,s=r.release_date,o=r.vote_average,u=r.genres,f=s.slice(0,4),d=10*o.toFixed(1),v=u.map((function(e){return e.name+", "})),w=null!==(n=null===(t=(0,p.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";return(0,b.jsxs)("main",{children:[(0,b.jsx)(h.rU,{to:w,children:"Go Back"}),(0,b.jsxs)(x,{children:[(0,b.jsx)(g,{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:"",width:300}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("h2",{children:[i," (",f,")"]}),(0,b.jsxs)("p",{children:["User Score: ","".concat(d,"%")]}),(0,b.jsx)("h3",{children:"Overwiew"}),(0,b.jsx)("p",{children:c}),(0,b.jsx)("h3",{children:"Genres"}),(0,b.jsx)("p",{children:v})]})]}),(0,b.jsxs)(m,{children:[(0,b.jsx)("li",{children:(0,b.jsx)(h.rU,{to:"cast",children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(h.rU,{to:"reviews",children:"Reviews"})})]}),(0,b.jsx)(l.Suspense,{fallback:(0,b.jsx)(y.a,{}),children:(0,b.jsx)(p.j3,{})})]})};j.prototype={movieDetails:k().objectOf(k().shape({poster_path:k().string,overview:k().string,title:k().string,release_date:k().string,vote_average:k().string,genres:k().object}))};var _=function(){var e=(0,p.UO)().id,n=(0,l.useState)(null),t=(0,s.Z)(n,2),r=t[0],a=t[1];if((0,l.useEffect)((function(){function n(){return(n=(0,i.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.E$)(e);case 3:t=n.sent,a(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}e&&function(){n.apply(this,arguments)}()}),[e]),r)return(0,b.jsx)(j,{movieDetails:r})}},888:function(e,n,t){"use strict";var r=t(9047);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,c,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:c,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=227.7cd5e87c.chunk.js.map