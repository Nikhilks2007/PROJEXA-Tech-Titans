document.addEventListener("DOMContentLoaded", function () {

    const sliders = document.querySelectorAll(".slider-wrapper");

    sliders.forEach(wrapper => {

        const container = wrapper.querySelector(".book-container");
        const leftBtn = wrapper.querySelector(".arrow.left");
        const rightBtn = wrapper.querySelector(".arrow.right");

        const scrollAmount = 300;

        leftBtn.addEventListener("click", function () {
            container.scrollLeft -= scrollAmount;
        });

        rightBtn.addEventListener("click", function () {
            container.scrollLeft += scrollAmount;
        });

    });

});
