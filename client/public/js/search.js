
searchInput.onkeyup = async (event) => {
    if (event.keyCode == 13) {
        elon.innerHTML = null
        event.preventDefault();
        let response = await fetch("http://localhost:5000/search", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({search: event.target.value}),
        })
        let data = await response.json()
        for(let ads of data){

            let a = document.createElement('a')   
            let li = document.createElement('li')   
            let img = document.createElement('img')
            let h3 = document.createElement('h3')
            let p = document.createElement('p')   
            let span = document.createElement('span')   
        
            let elon = document.getElementById('elon')

            li.classList.add('products-list__item')
            img.classList.add('product-list__img')
        
            h3.textContent = ads.title
            img.src = ads.image
            span.textContent = ads.price
            p.textContent = ads.date
            
            li.append(img,h3,p,span)
            a.append(li)

            elon.append(a)

            a.onclick = async () => { 
                a.href = `reklama/#${ads.ads_id}`       
            }

        }
        event.target.value = ""
  }
};
