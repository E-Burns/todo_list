(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=(n(14),n(2)),c=n(1);n(16);var u=function(){var e=Object(a.useState)([{name:"Eat Jaffa cakes",priority:"high",isDone:!1},{name:"Watch Empire Strikes Back",priority:"medium",isDone:!1},{name:"Watch Last Jedi",priority:"low",isDone:!1}]),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),u=Object(c.a)(o,2),m=u[0],p=u[1],s=Object(a.useState)(""),f=Object(c.a)(s,2),d=f[0],h=f[1],v=n.map(function(e,t){return i.a.createElement("li",{key:t,id:"taskItem",className:!0===e.isDone?"done":"high"===e.priority?"high":"medium"===e.priority?"medium":"low"},i.a.createElement("span",null,e.name),e.isDone?i.a.createElement("span",{className:"done"},"Task completed!"):i.a.createElement("button",{onClick:function(){return E(t)}},"Done?"))}),y=function(e){h(e.target.value)},E=function(e){var t=Object(l.a)(n);t[e].isDone=!0,t[e].priority="none",r(t)};return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"To-Do List"),i.a.createElement("hr",null),i.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),m.length>0&&("high"===d||"medium"===d||"low"===d)){var t=Object(l.a)(n);t.push({name:m,priority:d,isDone:!1}),r(t),p("")}}},i.a.createElement("input",{id:"new-task",type:"text",value:m,onChange:function(e){p(e.target.value)}}),i.a.createElement("input",{type:"radio",id:"priorityHigh",name:"priority",value:"high",onChange:y}),i.a.createElement("label",{htmlFor:"priorityHigh"},"High"),i.a.createElement("input",{type:"radio",id:"priorityMed",name:"priority",value:"medium",onChange:y}),i.a.createElement("label",{htmlFor:"priorityMed"},"Medium"),i.a.createElement("input",{type:"radio",id:"priorityLow",name:"priority",value:"low",onChange:y}),i.a.createElement("label",{htmlFor:"priorityLow"},"Low"),i.a.createElement("input",{id:"save-task",type:"submit",value:"Save Task"})),i.a.createElement("form",{id:"removeForm"},i.a.createElement("button",{onClick:function(e){e.preventDefault();var t=n.filter(function(e){return!0===e.isDone}),a=n.filter(function(e){return"high"===e.priority}),i=n.filter(function(e){return"medium"===e.priority}),o=n.filter(function(e){return"low"===e.priority}),l=t.concat(a,i,o);r(l)},className:"reorder"},"Order tasks"),i.a.createElement("button",{onClick:function(e){e.preventDefault();var t=n.filter(function(e){return!1===e.isDone});r(t)},className:"remove"},"Remove done"),i.a.createElement("button",{onClick:function(e){e.preventDefault(),r([])},className:"remove"},"Remove all")),i.a.createElement("ul",null,v))},m=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,19)).then(function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null))),m()},5:function(e,t,n){e.exports=n(18)}},[[5,3,2]]]);
//# sourceMappingURL=main.62058892.chunk.js.map