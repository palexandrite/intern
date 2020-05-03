import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import BlobObject from "./BlobObject.js";

function component() {
    const element = document.createElement("div");
    
    element.innerHTML = _.join(["Hello", "webpack"], "");
    element.setAttribute("class", "hello");
    
    const myIcon = new Image();
    myIcon.src = "dist/" + Icon;
    
    element.prepend(myIcon);
    
    const outputBlob = new BlobObject("MyNewBlob").getBlob();
    let link = document.createElement("a");
    link.innerText = "Download";
    link.download = "file.txt";
    link.href = URL.createObjectURL(outputBlob);
    link.style.margin = "0 5px 0 5px";
    
    element.append(link);
    
    return element;
}

document.body.prepend(component());

/***
 * Download an image on the fly
 */
let img = document.querySelector("#download-image");
let canvas = document.createElement("canvas");
canvas.width = img.clientWidth;
canvas.height = img.clientHeight;

let context = canvas.getContext("2d");

context.drawImage(img, 0, 0);

canvas.toBlob(function(blob) {
    // после того, как Blob создан, загружаем его
    let link = document.createElement('a');
    link.download = 'example.png';

    link.href = URL.createObjectURL(blob);
    
    console.log(`How we can import a variable in the string? Like this ${link.href}`);
    
    link.click();

    // удаляем внутреннюю ссылку на Blob, что позволит браузеру очистить память
    URL.revokeObjectURL(link.href);
}, "image/png");