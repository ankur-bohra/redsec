(this.webpackJsonpredsec=this.webpackJsonpredsec||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(7),s=n.n(r),a=(n(12),n(3)),o=n(4),u=n(6),l=n(5),j=(n(13),n(0)),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("button",{"data-active":this.props.active,onClick:function(){return t.props.onClick()},children:this.props.name})}}]),n}(c.Component),h=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(a.a)(this,n),(c=e.call(this,t)).state={activeButton:"Home"},c}return Object(o.a)(n,[{key:"handleClick",value:function(t){this.state.activeButton!==t&&this.setState({activeButton:t})}},{key:"renderButton",value:function(t){var e=this;return Object(j.jsx)(d,{name:t.toUpperCase(),active:this.state.activeButton===t,onClick:function(){return e.handleClick(t)}})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"Navbar",children:[Object(j.jsx)("div",{class:"logo",children:Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{class:"logo--red",children:"Red"}),Object(j.jsx)("span",{class:"logo--sec",children:"Sec"})]})}),Object(j.jsx)("div",{class:"navbar-buttons",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:this.renderButton("Home")}),Object(j.jsx)("li",{children:this.renderButton("Services")}),Object(j.jsx)("li",{children:this.renderButton("Pricing")}),Object(j.jsx)("li",{children:this.renderButton("Contact")})]})})]})}}]),n}(c.Component);var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(h,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.dbb05bdd.chunk.js.map