let menuBTN = document.getElementById("menuBTN");

let barOne = document.getElementById("barOne"),
barTwo = document.getElementById("barTwo"),
barThree = document.getElementById("barThree");

menuBTN.addEventListener("click", ()=>{
    menuBTN.classList.toggle("active");

    let nav = document.getElementById("nav");
    nav.classList.toggle("active");

    if(menuBTN.classList.contains("active")){
        barOne.classList.add("active");
        barTwo.classList.add("active");
        barThree.classList.add("active");
    }else{
        barOne.classList.remove("active");
        barTwo.classList.remove("active");
        barThree.classList.remove("active");
    }
})