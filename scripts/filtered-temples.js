function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Meridian Idaho Temple",
        location: "Meridian, Idaho",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/31/Meridian_Idaho_Temple.jpg"
    },
    {
        templeName: "Boise Idaho Temple",
        location: "Boise, Idaho",
        dedicated: "1984, May, 25",
        area: 35868,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-27308-thumb.jpg"
    },
    {
        templeName: "Idaho Twin Falls Temple",
        location: "Twin Falls, Idaho",
        dedicated: "1945, September, 15",
        area: 31245,
        imageUrl: "https://deseret.brightspotcdn.com/b9/91/dda23ecc47539aa55f065940c253/twinfalls1.jpeg"
    }
];

function displayTemples(temples) {
    const container = document.getElementById('showTemples');
    container.innerHTML = ''; // Clear the container before adding new temples
    temples.forEach(temple => {
        const templeDiv = document.createElement('div');
        templeDiv.className = 'temple';

        const templeImg = document.createElement('img');
        templeImg.src = temple.imageUrl;
        templeImg.alt = `${temple.templeName} Image`;

        const templeName = document.createElement('h2');
        templeName.textContent = temple.templeName;

        const templeLocation = document.createElement('p');
        templeLocation.textContent = `Location: ${temple.location}`;

        const templeDedicated = document.createElement('p');
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;

        const templeArea = document.createElement('p');
        templeArea.textContent = `Area: ${temple.area} sq ft`;

        templeDiv.appendChild(templeImg);
        templeDiv.appendChild(templeName);
        templeDiv.appendChild(templeLocation);
        templeDiv.appendChild(templeDedicated);
        templeDiv.appendChild(templeArea);

        container.appendChild(templeDiv);
    });
}

function filterTemples(classify) {
    let filteredTemples = [];
    if (classify === 'home') {
        displayTemples(temples); // Display all temples
        return; // Exit the function early
    }
    if (classify === 'old') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1900-01-01'));
    } else if (classify === 'new') {
        filteredTemples = temples.filter(temple => new Date(temple.dedicated) > new Date('2000-01-01'));
    } else if (classify === 'large') {
        filteredTemples = temples.filter(temple => temple.area > 90000);
    } else if (classify === 'small') {
        filteredTemples = temples.filter(temple => temple.area < 10000);
    }
    displayTemples(filteredTemples);
}

document.getElementById('home').addEventListener('click', () => filterTemples('home'));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));

filterTemples('home'); // Initially display all temples
