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

const contentData = [
    {
        id: 'main__hero', title: 'Landing Page',
        class: 'menu__link ', navBarName: 'Home'
    },
    {
        id: 'section1', dataNav: 'section 1', title: 'Section 1',
        p1Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        p2Content: 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
        class: 'menu__link', navBarName: 'Section 1'
    },
    {
        id: 'section2', dataNav: 'section 2', title: 'Section 2',
        p1Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        p2Content: 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
        class: 'menu__link', navBarName: 'Section 2'
    },
    {
        id: 'section3', dataNav: 'section 3', title: 'Section 3',
        p1Content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.',
        p2Content: 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
        class: 'menu__link', navBarName: 'Section 3'
    }];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function addHeader(header) {
    const mainHeading = document.querySelector('main');
    const newHeader = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = header[0].title;
    newHeader.appendChild(h1);
    newHeader.setAttribute('id', header[0].id);
    mainHeading.appendChild(newHeader);
    document.body.append(mainHeading);
}

addHeader(contentData);

function addSection(section) {
    const newSection = document.createElement('section');
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const paraOne = document.createElement('p');
    const paraTwo = document.createElement('p');
    paraTwo.textContent = section.p2Content;
    paraOne.textContent = section.p1Content;
    h2.textContent = section.title;
    div.className = 'landing__container';
    newSection.setAttribute('id', section.id);
    newSection.setAttribute('data-nav', section.dataNav);
    div.appendChild(h2);
    div.appendChild(paraOne);
    div.appendChild(paraTwo);
    newSection.appendChild(div);
    document.body.append(newSection);
}

function addSections(sections) {
    for (let i = 1; i < sections.length; i++) {
        addSection(sections[i]);
    };
}
addSections(contentData);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function addNavBar(navBar) {
    const navBarUl = document.getElementById("navbar__list");
    for (let i = 0; i < contentData.length; i++) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'menu__link';
        a.textContent = contentData[i].navBarName;
        li.appendChild(a);
        navBarUl.appendChild(li);
    };
}
addNavBar(contentData);

// Add class 'active' to section when near top of viewport

const allLi = document.querySelectorAll('li');
const allTitle = [document.querySelector('h1'), ...document.querySelectorAll('h2')];
const allSection = [document.querySelector('header'), ...document.querySelectorAll('section')];

function eventListeningScroll(e) {
    let topPos = document.scrollingElement.scrollTop;
    topPos += 300;

    for (i = 0; i < contentData.length; i++) {
        let contentId = document.getElementById(contentData[i].id);
        if (topPos >= contentId.offsetTop && topPos < contentId.offsetTop + contentId.offsetHeight) {
            allLi[i].classList.add("active");

            allSection[i].classList.add('your-active-class');

            //const contentTitle = document.querySelectorAll('.section-heading');
            //allTitle[i].style.cssText = 'color: red; font-size: 4em';

        } else {
            allLi[i].classList.remove("active");
            allSection[i].classList.remove("your-active-class");


        };
    };
}

document.addEventListener('scroll', eventListeningScroll);

// Scroll to anchor ID using scrollTO event

const navBar = document.getElementById('navbar__list');

for (let i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener('click', function () {
        window.scrollTo(0, allSection[i].offsetTop - navBar.offsetHeight);
    });
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


