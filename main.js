




const ratings = document.querySelectorAll('.rating')
const submitBtn = document.querySelector('.submit')
const contenar = document.querySelector('.contenar')


function setActiveElement(e){
    ratings.forEach((el)=>{
        el.classList.remove('active')
    })
    e.target.classList.add('active')
}
ratings.forEach((el)=>{
    el.addEventListener('click' , setActiveElement )
})
function build(val){
    contenar.innerHTML = ''
    let card = document.createElement('div')
    card.classList.add('card' ,'thank-you-card')
    let img = document.createElement('img')
    img.src = './images/illustration-thank-you.svg'
    img.alt = 'illustration-thank-you'
    card.append(img)
    let span = document.createElement('span')
    span.textContent = `You Selected ${val} of 5`
    card.append(span)
    let text = document.createElement('div')
    text.classList.add('text')
    let h1 = document.createElement('h1')
    h1.textContent = 'Thank you!'
    let p = document.createElement('p')
    p.textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'
    text.append(h1)
    text.append(p)
    card.append(text)
    contenar.append(card)
}
submitBtn.onclick = function(){
    let activeRatigValue = document.querySelector('.active')
    if(activeRatigValue != undefined){
        activeRatigValue = activeRatigValue.textContent
        build(activeRatigValue)
    }
    
}
