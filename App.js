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
const head1=React.createElement("div",{id:"heading"},[h1,p]);

// jsx elment
const head= <h1>hi i am jsx</h1>;

// functional component

const Component= ()=> (
    <div>
        {head}
        <h1>hello</h1>
        <h1>Hi i am component</h1>
    </div>
);
const Component2= ()=> (
    <div>
        <h1>hello</h1>
        <h1>Hi i am component</h1>
        <Component />
    </div>
);

// const tags=React.createElement("div",{},[h,head]);
root.render(<Component2 />);
// root.render(head);