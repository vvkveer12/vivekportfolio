const hello = document.querySelectorAll(".animate");
window.addEventListener("scroll", checkboxs)
checkboxs();
function checkboxs() {
    const bottom = window.innerHeight/5*4
    hello.forEach(element => {
        const boxtop = element.getBoundingClientRect().top
        if(boxtop < bottom){
            element.classList.add("show")
        }
        else{
            element.classList.remove("show")
        }
    });
}