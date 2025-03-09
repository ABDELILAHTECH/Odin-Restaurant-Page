const content = document.querySelector('#content');

import facebookLogo from "./assets/facebook-logo.png";
import instagramLogo from "./assets/instagram-logo.png";
import twitterLogo from "./assets/twitter-logo.png";
import youtubeLogo from "./assets/youtube-logo.png";

const mediaLogos = [facebookLogo,instagramLogo,twitterLogo,youtubeLogo];

const createContactPage = () =>{
    if (!content) {
        console.error("Element #content not found");
        return;
    }

    const contactHeading = document.createElement('h1');
    contactHeading.textContent = "Contact Us";
    content.append(contactHeading);

    const gmail = document.createElement("p")
    gmail.textContent = "bestpizza@gmail.com";
    content.append(gmail);

    const numero = document.createElement("p")
    numero.textContent = "0789385025";
    content.append(numero);

    const socialMedia = document.createElement("div");

    for (let i = 0; i < 4; i++) {
        const mediaLogo = document.createElement('img');
        mediaLogo.src = mediaLogos[i];
        mediaLogo.alt = mediaLogos[i];
        mediaLogo.classList.add("media-logo");
        
        socialMedia.append(mediaLogo);
    }
    content.append(socialMedia);
}
export default createContactPage;