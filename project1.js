const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click' , function(e){
        console.log(e.target);
        if(e.target.id === "black"){
            body.style.background = e.target.id
        }
        if(e.target.id === "Grey"){
            body.style.background = e.target.id
        }
        if(e.target.id === "navy"){
            body.style.background = e.target.id
        }
        if(e.target.id === "pink"){
            body.style.background = e.target.id
        }

    })
});


