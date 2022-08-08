

let incrBtn = document.querySelector('#incrBtn')
let decrBtn = document.querySelector('#decrBtn')
let resBtn = document.querySelector('#resBtn')
let resultDOM = document.querySelector('#result')


let result = localStorage.getItem('result') ? localStorage.getItem('result') : 0

resultDOM.innerHTML = result


incrBtn.addEventListener('click', function(){
    let sayi = parseInt(resultDOM.innerHTML)

    sayi += 1

    localStorage.setItem('result', sayi)

    resultDOM.innerHTML = `${sayi}`
})

decrBtn.addEventListener('click',function(){
    let sayi = parseInt(resultDOM.innerHTML)

    sayi -= 1

    localStorage.setItem('result', sayi)

    resultDOM.innerHTML = `${sayi}`
}
)

resBtn.addEventListener('click',function(){
    let sayi = parseInt(resultDOM.innerHTML)

    sayi = 0

    localStorage.setItem('result', sayi)

    resultDOM.innerHTML = `${sayi}`
}
)

