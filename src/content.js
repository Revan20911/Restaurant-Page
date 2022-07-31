
import {images, reImages} from './images';


const landing = (() =>{

    let splash = document.createElement("div");
    splash.className = "splash";
    splash.innerHTML = "<h1>Reviews</h1>";

    let reviews = [];

    let images = reImages.imgs;


    for(let i = 0; i < 3; i++){

        reviews.push('');
    }

    reviews.forEach((item, index) =>{

        

        let review = document.createElement("div");
        review.className = "review";

        let reviewer = document.createElement("div");
        reviewer.className = "review-img";
        reviewer.setAttribute('data', index);

        let reviewimg = document.createElement("img");
        reviewimg.className = "rimg";

        let text = document.createElement('div');
        text.className = "text";
        text.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        

        splash.appendChild(review);
        review.appendChild(reviewer);
        review.appendChild(text);
        reviewer.appendChild(reviewimg);
        reviewer.appendChild(reviewimg).src = images[index];

        
        
    })

    

    return {splash};

})();

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

export {header, menuItems, landing};