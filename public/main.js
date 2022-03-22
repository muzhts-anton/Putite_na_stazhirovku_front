import {mainPage} from './modules/mainPage.js';

export const root = document.getElementById('root');

const configApp = {
  main: {
    href: '/mainpage',
    openMethod: mainPage,
  },
};

mainPage();

root.addEventListener('click', (e) => {
  const {target} = e;
  console.log(target.attributes.parameters);

  if (target instanceof HTMLElement) {
    e.preventDefault();

    const {section} = target.dataset;
    if (section) {
      if (target.attributes.parameters) {
        configApp[section].openMethod(target.attributes.parameters.nodeValue);
      } else {
        configApp[section].openMethod();
      }
    }
  }
});