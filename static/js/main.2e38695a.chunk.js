(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(4),s=n.n(i),o=(n(15),n(5)),r=n(6),l=n(7),b=n(10),d=n(9),j=n(2),u=n.n(j),h=n(0),p=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:u.a.section,children:[Object(h.jsx)("h2",{className:u.a.title,children:e}),Object(h.jsx)("div",{className:u.a.content,children:n})]})},O=n(8),x=n.n(O),v=function(t){var e=t.options,n=t.onLeaveFeedback;return e.map((function(t){return Object(h.jsx)("button",{type:"button",onClick:n,className:x.a.button,children:t},t)}))},f=function(t){var e=t.message;return Object(h.jsx)("h2",{children:e})},g=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return c?Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["\ud83d\ude00 Good ",e]}),Object(h.jsxs)("p",{children:["\ud83d\ude10 Neutral ",n]}),Object(h.jsxs)("p",{children:["\ud83d\ude41 Bad ",a]}),c>0&&Object(h.jsxs)("p",{children:["\ud83d\udc65 Total: ",c]}),i>0&&Object(h.jsxs)("div",{children:["\ud83d\udc4d Positive feedback: ",i,"%"]})]}):Object(h.jsx)(f,{message:"No feedback given"})},k=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:t.props.initialValue,neutral:t.props.initialValue,bad:t.props.initialValue},t.leaveFeedback=function(e){t.setState((function(t){return Object(o.a)({},e.target.textContent,t[e.target.textContent]+1)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.bad+this.state.neutral+this.state.good,e=(this.state.good/t*100).toFixed(0),n=Object.keys(this.state);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p,{title:"Please leave your feedback",children:Object(h.jsx)(v,{options:n,onLeaveFeedback:this.leaveFeedback})}),Object(h.jsx)(p,{title:"Statistics",children:Object(h.jsx)(g,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,positivePercentage:e})})]})}}]),n}(a.Component);k.defaultProps={initialValue:0};var m=k;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},2:function(t,e,n){t.exports={section:"Section_section__2OfMk",title:"Section_title__39Mbi",content:"Section_content__3UwuB"}},8:function(t,e,n){t.exports={button:"FeedbackOptions_button__bjw7n"}}},[[17,1,2]]]);
//# sourceMappingURL=main.2e38695a.chunk.js.map