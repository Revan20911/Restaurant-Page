import _ from 'lodash';
import { about } from './About';
import  {header,  menuItems} from './content';

const loadPage = (() => {

  let content = document.createElement("div");
  content.id = "content";

  let mainPage = document.createElement("div");
  mainPage.id = "main";

  let nav = header.navbar;

  document.body.appendChild(content);
  document.body.appendChild(mainPage);
  content.appendChild(nav);
  
  return {content, mainPage};

})();


const buttons = ((navbar, mainPage) =>{

  let menu = menuItems.menuContainer;

  let aboutPage = about.page;

  let navbox = document.createElement("div");
  navbox.className = "nav-box";

  let navbutton1 = document.createElement("div");
  navbutton1.className="navbutton1";
  navbutton1.innerHTML = "Millenial Eats";

  let navbutton2 = document.createElement("div");
  navbutton2.className="navbutton1";
  navbutton2.innerHTML = "About";

  let navbutton3 = document.createElement("div");
  navbutton3.className="navbutton1";
  navbutton3.innerHTML = "Menu";

  
  navbar.appendChild(navbox);
  navbox.appendChild(navbutton1);
  navbox.appendChild(navbutton2);
  navbox.appendChild(navbutton3);

  Array.from(navbox.children).forEach((button) => {

      button.addEventListener('click', function tab(){

          if(button.innerHTML == "About"){
              
              mainPage.innerHTML = aboutPage.outerHTML;
              button.removeEventListener('click', tab);
              navbutton2.addEventListener('click', tab);
          }
          
          if(button.innerHTML == "Menu"){

              mainPage.innerHTML = menu.innerHTML;
              button.removeEventListener('click', tab);
              navbutton3.addEventListener('click', tab);
          }

          if(button.innerHTML == "Millenial Eats"){

            mainPage.innerHTML = menu.innerHTML;
            button.removeEventListener('click', tab);
            navbutton1.addEventListener('click', tab);

          }
      })
  })

});

const init = (() => {

  buttons(header.navbar, loadPage.mainPage);
  loadPage;
  
})();

