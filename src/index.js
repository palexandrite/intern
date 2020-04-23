import _ from "lodash";
import "./style.css";

function component() {
    const element = document.createElement("div");
    
    element.innerHTML = _.join(["Hello", "webpack"], "");
    element.setAttribute("class", "hello");
    
    return element;
}

document.body.prepend(component());