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
    id: 'section1',
    dataNav: 'section 1',
    h2Content: 'Section 1',
    p1Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
    p2Content: 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
};
const sectionTwo = {
    id: 'section2',
    dataNav: 'section 2',
    h2Content: 'Section 2',
    p1Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
    p2Content: 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
};
const sectionThree = {
    id: 'section3',
    dataNav: 'section 3',
    h2Content: 'Section 3',
    p1Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
    p2Content: 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
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
    const newSection = document.createElement('section');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const paraOne = document.createElement('p');
    const paraTwo = document.createElement('p');
    paraTwo.textContent = section.p2Content;
    paraOne.textContent = section.p1Content;
    h2.textContent = section.h2Content;
    div.className = 'landing__container';
    newSection.setAttribute('id', section.id);
    newSection.setAttribute('data-nav', section.dataNav);
    div.appendChild(h2);
    div.appendChild(paraOne);
    div.appendChild(paraTwo);
    newSection.appendChild(div);
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
const navBarItems = [
    {href: '#', class: 'menu__link', content: 'Home'},
    {href: '#', class: 'menu__link', content: 'Section 1'},
    {href: '#', class: 'menu__link', content: 'Section 2'},
    {href: '#', class: 'menu__link', content: 'Section 3'},
    ];

function addNavBar(navBar) {
    const navBarUl = document.getElementById("navbar__list");
    for (let i = 0; i <= navBarItems.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', navBarItems[i].href);
        a.className = 'menu__link';
        a.textContent = navBarItems[i].content;
        li.appendChild(a);
        navBarUl.appendChild(li);
    }
};
addNavBar(navBarItems);

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


