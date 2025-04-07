const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
const elemC = document.querySelector(".elem-container")
const fixed = document.querySelector("#fixed")
elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})
const elems = document.querySelectorAll(".elem")

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var data = e.getAttribute("data")
        console.log(data);

        fixed.style.backgroundImage = `url(${data})`

    })

})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// var loader = document.querySelector("#loader"); // Selects the element with id "loader"

// setTimeout(function() {
//     loader.style.top = "-100%"; // Moves the loader up by 100% (presumably out of view)
// }, 4000); // Executes after 2000 milliseconds (2 seconds)
var slid=document.querySelector("#slid")
var menu=document.querySelector("nav h3")
var navimg=document.querySelector("nav img")
var flag=0
menu.addEventListener("click",()=>{
    if (flag==0) {
        slid.style.top=0
    navimg.style.opacity=0
    flag=1
    } else {
        slid.style.top="-100%"
        navimg.style.opacity=1
        flag=0
    }
    
})
