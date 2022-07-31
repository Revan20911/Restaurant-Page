const about = (() =>{


    let page = document.createElement("div");
    page.className = "about";

    let pageContent = document.createElement("div");
    pageContent.className = "page-content";
    pageContent.innerHTML = "HEllo WOrld"

    page.appendChild(pageContent);


    return {page};


})();

export {about};