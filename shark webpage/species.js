//NavBar sidebar
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}

// Photo slider with text

// set slide index to default 0
let currentIndex = 0;
// get html elements with class = slide
const slides = document.querySelectorAll(".slide");

// showing current slide

function showSlide(index){
    if(index < 0){
        index = slides.length - 1; // goes back to the last slide
    }else if (index >= slides.length){
        index = 0;
    }
    // Hide all slides and only show current slide
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if(i === index){
            slide.classList.add("active");
        }
    });

    currentIndex = index;
}

function nextSlide(){
    showSlide(currentIndex + 1);
}

function prevSlide(){
    showSlide(currentIndex - 1);
}

// Initialise the first slide = active

showSlide(currentIndex);

