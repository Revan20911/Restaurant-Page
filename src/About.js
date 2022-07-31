
import {info} from './info';


const about = (() =>{


    let page = document.createElement("div");
    page.className = "about";
    

    let title = document.createElement("h1");
    title.innerHTML = "About Us";

    let pageContent = document.createElement("div");
    pageContent.className = "page-content";
    pageContent.innerHTML = info.text;


    page.appendChild(title);
    page.appendChild(pageContent);
    


    return {page};


})();

export {about};