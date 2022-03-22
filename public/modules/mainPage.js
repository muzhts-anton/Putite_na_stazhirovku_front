import { root } from '../main.js';

/**
 * @description Создаёт и отрисовывает страницу главную страницу.
 * Создаёт навигационную панель, footer. Поддерживает SPA.
 */
export function mainPage() {
    root.innerHTML = '';

      Ajax.postFetch({
        url: `https://putitenastazhirovkuback.herokuapp.com/api/v1/mainpage`,
        body: {sum: "7600"},
      }).then((response) => {
        if (response && response.status === OK) {
          console.log("ok");
          return;
        } else {
          console.log("nah");
        }
      });

    displayInput();

    //

    //

    displayOutput();
}

function displayInput() {
    const navbar = document.createElement("div");
	navbar.id = "input";
	root.appendChild(navbar);

	// const logo = document.createElement("a");
	// logo.classList.add("navbar_logo");
	// logo.innerHTML = `<img src="logo.svg"/>`;
	// logo.href = "/";
	// navbar.appendChild(logo);
}

function displayOutput() {

}
