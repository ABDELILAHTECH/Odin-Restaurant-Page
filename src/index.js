import "./style.css";
import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const btns = document.querySelectorAll('.btn');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
const content = document.querySelector('#content'); // Sélection de l'élément parent

const resetBtnColors = () => {
    btns.forEach(btn => {
        btn.style.background = "";
        btn.style.color = "";
    });
};

const btnColorChange = (btn) => {
    resetBtnColors();
    btn.style.background = "orange";
    btn.style.color = "black";
};

const loadPage = (pageFunction, btn) => {
    content.innerHTML = ""; // Efface le contenu précédent
    pageFunction(); // Charge la nouvelle page
    btnColorChange(btn); // Change la couleur du bouton actif
};

document.addEventListener("DOMContentLoaded", () => {
    loadPage(createHomePage, homeBtn);
});

homeBtn.addEventListener('click', () => loadPage(createHomePage, homeBtn));
menuBtn.addEventListener('click', () => loadPage(createMenuPage, menuBtn));
contactBtn.addEventListener('click', () => loadPage(createContactPage, contactBtn));
