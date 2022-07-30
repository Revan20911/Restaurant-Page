import _ from 'lodash';

import  {header,  menuItems} from './content';

const loadPage = (() => {

  const content = document.querySelector("#content");
  const mainPage = document.querySelector("#main");
  
  return {content, mainPage};



})();


const init = ((content, mainPage) => {

  menuItems(mainPage);

  header(content);

})(loadPage.content, loadPage.mainPage);