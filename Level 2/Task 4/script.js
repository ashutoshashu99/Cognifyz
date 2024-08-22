let button = document.querySelectorAll('.button')
let body = document.querySelector('body')

console.log(button)
console.log(body)

button.forEach(function(e) {
    e.addEventListener('click', function(event){
        switch(event.target.id){
            case 'grey':
                body.style.backgroundColor = event.target.id
                break;
            case 'red':
                body.style.backgroundColor = event.target.id
                break;
            case 'orange':
                body.style.backgroundColor = event.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id
                break;
               
        }



    })
})