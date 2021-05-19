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
let navUnorderedList = document.getElementById("nav-unordered-list");
let sectionsCount = document.getElementsByClassName("landing__container").length;
//Get the back to top button
const backToTopBtn = document.getElementById("back-to-top-btn");

/**
 * End Global Variables
 * 
 */

//Build the to nav menu dynamically
for (let i = 1; i < sectionsCount + 1; i++) {
    //get section title dynamicly 
    let sectionTitle = document.querySelector("#section" + i + "-title").textContent;

    //create li element with the dynamic title
    let navItem = document.createElement("li");
    let navItemTitle = document.createTextNode(sectionTitle);

    //assign id attribute to the new li element
    let navItemSelector = "nav-item" + i;
    navItem.setAttribute("id", navItemSelector);

    //append the new li element to the nav unordered list
    navItem.appendChild(navItemTitle);
    navUnorderedList.appendChild(navItem);
    //console.log(navItem);


    // Scroll to target section on list item click
    let targetSection = document.getElementById("section" + i);
    let navAnchorId = document.getElementById(navItemSelector);

    // Add Listener to scroll to target section on click
    navAnchorId.addEventListener("click", function() {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });
}
/**
 * Back to top button using this example  
 * https: //www.w3schools.com/howto/howto_js_scroll_to_top.asp
 */


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
//Checks if section is in view and adds active class 
/* https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/#:~:text=Use%20the%20getBoundingClientRect()%20method%20to%20get%20the%20size%20of,in%20the%20viewport%20or%20not. */

let isInViewport = function(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
document.addEventListener('scroll', function() {
    for (let i = 1; i < sectionsCount + 1; i++) {
        let currentSection = document.getElementById("section" + i);
        // Add class 'active' to section when near top of viewport
        if (isInViewport(currentSection)) {
            currentSection.classList.add("active");
        } else {
            currentSection.classList.remove("active");
        }
    }

}, {
    passive: true
});