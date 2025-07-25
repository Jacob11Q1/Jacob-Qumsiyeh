// ----- Toggle Style Switcher ----- //
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// ----- Hide Switcher On Scroll ----- //
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// ----- Theme Colors ----- //
const alternativeStyles = document.querySelectorAll(".alternative-style");
function setActiveStyle(color){
    alternativeStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        } else{
            style.setAttribute("disabled" , "true");
        }
    })
}

// ----- Theme Light And Dark Mode ----- //
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    } else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});