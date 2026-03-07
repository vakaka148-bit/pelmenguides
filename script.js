'use strict'

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000);

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

const minuteMilliseconds = 1000 * 60
const hourMilliseconds = minuteMilliseconds * 60
const dayMilliseconds = hourMilliseconds * 24

const startSaleTime = 1771755323765
const endSaleTime = startSaleTime + dayMilliseconds * 67

const saleDaysSpan = document.getElementById('saleDays')
const saleHoursSpan = document.getElementById('saleHours')
const saleMinutesSpan = document.getElementById('saleMinutes')
const saleSecondsSpan = document.getElementById('saleSeconds')

function updateSaleDate() {
    let rest = endSaleTime - Date.now()
    let days = Math.floor(rest / dayMilliseconds)
    rest -= days * dayMilliseconds
    let hours = Math.floor(rest / hourMilliseconds)
    rest -= hours * hourMilliseconds
    let minutes = Math.floor(rest / minuteMilliseconds)
    rest -= minutes * minuteMilliseconds
    let seconds = Math.floor(rest / 1000)

    saleDaysSpan.innerText = days
    saleHoursSpan.innerText = hours
    saleMinutesSpan.innerText = formatTo00(minutes)
    saleSecondsSpan.innerText = formatTo00(seconds)
}

function formatTo00(number) {
    if (number < 10 ) return '0' + number
    return number
}

updateSaleDate()
setInterval(updateSaleDate, 1000)
