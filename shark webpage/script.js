//NavBar sidebar
function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}


//Leopard shark pop up

const leopardShark = document.getElementById("hpLeopard");

leopardShark.addEventListener("mouseover", () => {
    console.log("mouseover leopard");
    leopardShark.style.height = "1000px";
    leopardShark.style.width = "1000px";
});

leopardShark.addEventListener("mouseleave", () => {
    console.log("mouseleave");
    leopardShark.style.height = "70%";
    leopardShark.style.width = "70%";
});

