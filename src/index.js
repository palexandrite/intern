import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";

function component() {
    const element = document.createElement("div");
    
    element.innerHTML = _.join(["Hello", "webpack"], "");
    element.setAttribute("class", "hello");
    
    const myIcon = new Image();
    myIcon.src = "dist/" + Icon;
    
    element.prepend(myIcon);
    
    return element;
}

document.body.prepend(component());