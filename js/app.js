/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const headerData = {
    class: 'main__hero',
    title: 'Landing Page'
};

const sectionOne = {
    id: 'section-1',
    title: 'Love my girl',
    content: 'She is so good',
};
const sectionTwo = {
    id: 'section-1',
    title: 'Muah',
    content: 'She is so good',
};
const sectionThree = {
    id: 'section-1',
    title: 'Heyyyyy',
    content: 'She is so good',
};

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addHeader(header) {
    const mainHeading = document.querySelector('main');
    const newHeader = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = header.title;
    newHeader.appendChild(h1);
    newHeader.classList.add(header.class);
    mainHeading.appendChild(newHeader);
    document.body.append(mainHeading);
}

addHeader(headerData);

function addSection(section) {
    var newSection = document.createElement('section');
    var h1 = document.createElement('h1');
    h1.classList.add('blue-header');
    h1.innerText = section.title;
    newSection.appendChild(h1);
    document.body.append(newSection);
}

addSection(sectionOne);
addSection(sectionTwo);
addSection(sectionThree);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


