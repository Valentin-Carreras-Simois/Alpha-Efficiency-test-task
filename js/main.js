const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const countdown = () =>{
    const countDate = new Date('November 28, 2023 00:00:00').getTime();
    const now = new Date(). getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".days").innerHTML = textDay;
    document.querySelector(".hours").innerHTML = textHour;
    document.querySelector(".minutes").innerHTML = textMinute;
    document.querySelector(".seconds").innerHTML = textSecond;
};

setInterval(countdown, 1000);

const dropdownContent = document.querySelectorAll(".dropdown-content");

dropdownContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener(("click"), () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if (item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
        }else{
            description.style.height = "0px";
        }
    })
})