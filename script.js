'use strict'

let currentSlide = 0
const slides = document.querySelectorAll('.slide')
const totalSlides = slides.length
let userName
let smeshnyedlynnietochnonormalnyestrokasymbolovkotoryasostoitizmnozhestvosymbolovyadymaynadoprekratytetopisattakkaketoyzheochendlynnoenazvanyenyvsempoka = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]/

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'))
    slides[n].classList.add('active')
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides
    showSlide(currentSlide)
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides
    showSlide(currentSlide)
}

function changeName(name) {
    userName = name
}

setInterval(nextSlide, 5000)

document.querySelector('.prev').addEventListener('click', prevSlide)
document.querySelector('.next').addEventListener('click', nextSlide)

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

document.getElementById('formButton').addEventListener('click', function() {
    const name = document.getElementById('formName').value
    const game = document.getElementById('formGame').value
    const agree = document.getElementById('formAgreement').checked

    if (name.length < 2) return alert('Имя должно быть больше 2 символов')
    if (smeshnyedlynnietochnonormalnyestrokasymbolovkotoryasostoitizmnozhestvosymbolovyadymaynadoprekratytetopisattakkaketoyzheochendlynnoenazvanyenyvsempoka.test(name)) return alert('Нет цифр и спец-символов')
    if (game.length < 2) return alert('Введите игру')
    if (!agree) return alert('Согласитесь с условиями')

    alert('Спасибо, ' + name + '! Гайд для ' + game + ' готов!')
    document.querySelector('form').reset()
})
