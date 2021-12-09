
$(function () {
    $("#accordion").accordion();
});

let tl = gsap.timeline({repeatDelay: 0.1})

tl.from('.hero__logo', {duration: 0.5, y:100, opacity: 0})
tl.from('.hero__title', {duration: 0.5, y:100, opacity: 0})
tl.from('.hero__heading', {duration: 0.5, y:100, opacity: 0})
tl.from('.hero__link', {duration: 0.5, y:100, opacity: 0})

tl.from('.info__container', {duration: 1, x:100, opacity: 0})
tl.from('.new__container', {duration: 1, x:-200, opacity: 0})