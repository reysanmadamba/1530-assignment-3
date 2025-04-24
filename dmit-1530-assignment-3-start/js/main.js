document.addEventListener("DOMContentLoaded", function () {

    const toggleBtns = document.querySelectorAll(".toggle-btn");
    toggleBtns.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.stopPropagation();
            this.nextElementSibling.classList.toggle("expanded");
        });
    });


    const toggleBtnsAlt = document.querySelectorAll(".toggle-btns");
    toggleBtnsAlt.forEach(btn => {
        btn.addEventListener("click", function (event) {
            event.stopPropagation();
            this.nextElementSibling.classList.toggle("expandeds");
        });
    });


    const modal = document.getElementById("myModal");
    const span = document.querySelector(".close");


    modal.style.display = "block";


    span.onclick = function () {
        modal.style.display = "none";
    };


    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});
