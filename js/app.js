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
for (i = 1; i < sectionsCount + 1; i++) {
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


// Add class 'active' to section when near top of viewport



// Set sections as active


// Set sections as active