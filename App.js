import React from "react";
import ReactDOM from "react-dom/client";

const root=ReactDOM.createRoot(document.getElementById("root"));
const h=React.createElement("h1",{id:"h"},"I'm React");


/* 
<div id="heading">
<h1></h1>
<p></p>
</div> 
*/
const h1=React.createElement("h1",{id:"h1"},"heading1");
const p=React.createElement("p",{id:"p"},"paragraph");
const head=React.createElement("div",{id:"heading"},[h1,p]);

// const tags=React.createElement("div",{},[h,head]);
root.render(head);
// root.render(head);