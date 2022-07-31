
import {images} from './images';

const header = (()=> {

    const navbar = document.createElement("div");
    navbar.className = "nav";
    return {navbar};

})();

const menuItems = (() => {


    
    const imgArray = images.arr;

    const foods = 
    ["Homemade Chicken Enchiladas",
    "Wagyu Beef Burger", 
    "Coconut Chicken Curry"];


    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container"

    let menu = document.createElement("div");
    menu.className ="menu";

    
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
    return {menuContainer};
})();

export {header, menuItems};