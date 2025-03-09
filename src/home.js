
const content = document.querySelector('#content');


const createHomePage = ()=>{
    if (!content) {
        console.error("Element #content not found");
        return;
    }

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = "Best Pizza";
    content.appendChild(restaurantName);
    
    const introHeading = document.createElement("h1");
    introHeading.textContent = "Welcome to Best Pizza  – The Home of the Best Pizza! 🍕";
    const introText = document.createElement("p");
    introText.textContent = 
    `At Best Pizza, we believe that every great pizza starts with the finest ingredients,
     passion for flavor, and a commitment to perfection. 
     Come and experience a symphony of flavors, where every bite transports you to pizza heaven!
    `;
    const restauranteIntro = document.createElement('div');
    restauranteIntro.append(introHeading);
    restauranteIntro.append(introText);
    content.append(restauranteIntro);
    
    const workHours = ['Sunday: 8am - 8pm','Monday: 6am - 6pm',
                       'Tuesday: 6am - 6pm','Wednesday: 6am - 6pm',
                       'Thursday: 6am - 10pm','Friday: 6am - 10pm',
                       'Saturday: 8am - 10pm']
    const restaurantHours = document.createElement('div');
    const hoursHeading = document.createElement('h3');
    const hoursContent = document.createElement('ul');
    
    hoursHeading.textContent = 'Hours';

    workHours.forEach(item => {
       const li = document.createElement('li');
       li.textContent = item;
       hoursContent.appendChild(li);

    })
    restaurantHours.append(hoursHeading);
    restaurantHours.append(hoursContent);
    content.append(restaurantHours);
    

    const restaurantLocation = document.createElement('div');
    const locationHeading = document.createElement('h3');
    const locationContent = document.createElement('p');

    locationHeading.textContent = "Location";
    locationContent.textContent = "hay lalla mariem, casablanca, morocco.";
    restaurantLocation.append(locationHeading);
    restaurantLocation.append(locationContent);
    content.append(restaurantLocation);
}
export default createHomePage;