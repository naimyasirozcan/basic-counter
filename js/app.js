let incrBtn = document.querySelector('#incrBtn')
let decrBtn = document.querySelector('#decrBtn')
let result = document.querySelector('#result')

incrBtn.addEventListener('click', function(){
    let sayi = parseInt(result.innerHTML)

    sayi += 1

    result.innerHTML = `${sayi}`
})

decrBtn.addEventListener('click',function(){
    let sayi = parseInt(result.innerHTML)

    sayi -= 1

    result.innerHTML = `${sayi}`
}
)

resBtn.addEventListener('click',function(){
    let sayi = parseInt(result.innerHTML)

    sayi = 0

    result.innerHTML = `${sayi}`
}
)