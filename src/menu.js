const content = document.querySelector('#content');

import classicPizza from "./assets/classic_pizza.jpeg";
import margheritaPizza from "./assets/pizza_margherita.jpeg";
import napolitainePizza from "./assets/pizza_napolitaine.jpeg";
import pepperoniPizza from "./assets/pizza_pepperoni.jpg";
import ricottaPizza from "./assets/pizza_ricotta.jpeg";
import sausagePizza from "./assets/sausage_pizza.png";

const pizzaImgs = [classicPizza,margheritaPizza,napolitainePizza,
                   pepperoniPizza,ricottaPizza,sausagePizza
                  ];

const pizzaNames = ['Classic Pizza','Margherita Pizza','Napolitaine Pizza',
                    'Pepperoni Pizza','Ricotta Pizza','Sausage Pizza'
                   ];

const createMenuPage = () => {
    if (!content) {
        console.error("Element #content not found");
        return;
    }

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = "Menu";
    content.append(menuHeading);

    const pizzaMenu = document.createElement('div');
    pizzaMenu.classList.add("menu-pizza");
    
    for (let i = 0; i < 6; i++) {
        const pizza = document.createElement('div');
        pizza.classList.add("menu-item");

        const pizzaImg = document.createElement('img');
        pizzaImg.src = pizzaImgs[i];
        pizzaImg.alt = pizzaNames[i];
        pizzaImg.classList.add("menu-img");

        const pizzaName = document.createElement('p');
        pizzaName.textContent = pizzaNames[i];
        pizzaName.classList.add("menu-name");

        pizza.append(pizzaImg, pizzaName);
        pizzaMenu.append(pizza)
    }
    content.append(pizzaMenu);
}

export default createMenuPage;
