window.addEventListener('scroll',function(){
    const header = document.getElementById("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
  const headerNav = document.getElementById("nav");
  headerNav.classList.toggle("moveMenu", window.scrollY > 0);
});