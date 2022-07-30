
import {images} from './images';


function header(content){

    const navbar = document.createElement("div");
    navbar.className = "nav";

    let navbox = document.createElement("div");
    navbox.className = "nav-box";


    let navbutton1 = document.createElement("div");
    navbutton1.className="navbutton1";
    navbutton1.innerHTML = "Home";


    content.appendChild(navbar);
    navbar.appendChild(navbox);
    navbox.appendChild(navbutton1);

}



const menuItems = ((mainPage) => {

    const imgArray = images.arr;

    const foods = ["Homemade Chicken Enchiladas","Wagyu Beef Burger", "Coconut Chicken Curry"];


    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container"

    let menu = document.createElement("div");
    menu.className ="menu";

    mainPage.appendChild(menuContainer);
    menuContainer.appendChild(menu);

    let arr = [];

    for(let i = 0; i < 3; i++){

        arr.push('');
    }

    arr.forEach((item, index) => {

        let menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        

        menu.appendChild(menuItem);

        

        
       
    })

    Array.from(menu.children).forEach((menuItem, index) => {

        menuItem.setAttribute('data', index);
        menuItem.innerHTML = foods[index];



        let menuImage = document.createElement("img");
        
        menuImage.src = imgArray[index];
        

        menuItem.appendChild(menuImage);

        

    });
    return {arr};
});

export {header, menuItems};