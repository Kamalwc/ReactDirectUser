(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{12:function(e,t,n){},20:function(e,t,n){e.exports=n(47)},25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),l=n.n(o),i=(n(25),n(2)),c=n.n(i),s=n(14),d=n(15),p=n(16),m=n(19),u=n(18),f=n(17),h=n.n(f);n(44);function g(e){var t=e.users;return r.a.createElement("div",null,void 0!==t[0]&&void 0!==t[0].name?t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{style:{paddingTop:"10px",paddingBottom:"10px"}},r.a.createElement("img",{src:e.picture.large,style:{width:"80%",height:"80%"}})),r.a.createElement("td",{style:{paddingTop:"10px",paddingBottom:"10px",fontSize:"1.3em"}},e.name.first," ",e.name.last),r.a.createElement("td",{style:{paddingTop:"10px",paddingBottom:"10px",fontSize:"1.3em"}},e.phone),r.a.createElement("td",{style:{paddingTop:"10px",paddingBottom:"10px",fontSize:"1.3em"}},e.email),r.a.createElement("td",{style:{paddingTop:"10px",paddingBottom:"10px",fontSize:"1.3em"}},e.dob.date))})):r.a.createElement(r.a.Fragment,null))}n(45);function E(e){var t=e.handleSearch;e.searchWord;return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"search",type:"search",onChange:function(e){return t(e)},style:{marginLeft:"700px",height:"35px"}}))}n(12);var x=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={users:[{}],filter:[]},e.handleSearch=function(){var t=Object(s.a)(c.a.mark((function t(n){var a,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target.value,console.log(a),r=e.state.users.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(a.toLowerCase())})),t.next=5,e.setState({filter:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://randomuser.me/api/?results=20&nat=us").then((function(t){e.setState({users:t.data.results})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{handleSearch:this.handleSearch}),r.a.createElement("div",null,r.a.createElement("p",{className:"headerNames",style:{backgroundColor:"#fffbd5",paddingTop:"30px",paddingBottom:"30px",fontSize:"1.3em"}},"DOB"),r.a.createElement("p",{className:"headerNames",style:{backgroundColor:"#fffbd5",paddingTop:"30px",paddingBottom:"30px",fontSize:"1.3em"}},"Email"),r.a.createElement("p",{className:"headerNames",style:{backgroundColor:"#fffbd5",paddingTop:"30px",paddingBottom:"30px",fontSize:"1.3em"}},"Phone"),r.a.createElement("p",{className:"headerNames",style:{backgroundColor:"#fffbd5",paddingTop:"30px",paddingBottom:"30px",fontSize:"1.3em"}},"Name"),r.a.createElement("p",{className:"headerNames",style:{backgroundColor:"#fffbd5",paddingTop:"30px",paddingBottom:"30px",fontSize:"1.3em"}},"Image")),console.log(this.state.filter),r.a.createElement(g,{users:0==this.state.filter.length?this.state.users:this.state.filter}))}}]),n}(r.a.Component);function v(){return r.a.createElement("div",{style:{backgroundColor:"#181839",color:"white",padding:"30px",textAlign:"center"}},r.a.createElement("h1",null,"Employee Directory"))}n(46);var y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.6c6b3188.chunk.js.map