;(async () => {
    let res = window.location.href
    res = res.split('#')
    let answer = res[0].replace('4000/reklama', '5000/ads') + res[1]
    let response = await fetch(answer)
    response = await response.json()

    for(let val of response){
        user_name.textContent = val.name
        tel_number.textContent = val.tel_number
        date.textContent = 'joylashtirildi: ' + val.date
        title.textContent = val.title
        reklama_img.src = val.image
        price.textContent = val.price
        reference.textContent = val.reference
    }
})()