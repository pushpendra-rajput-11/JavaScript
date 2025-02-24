const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

   // Parse => Jo bhi value string me mili he vo parse ho jaygi string me. 
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results');
   

   if(height === '' || height < 0 || isNaN(height)){
    height.innerHTML = `Please Give a Valid Height ${height}` ;
   }
   else if(weight === '' || weight < 0 || isNaN(weight)){
    weight.innerHTML = `Please Give a Valid weight ${weight}` ;
   }
   else{
    const BMI = (weight / ((height*height)/10000).toFixed(2));
    //show the result
   
    results.innerHTML = `<span>${BMI}</span>`;
   }

//    if(results <= 18.6){
//     results.innerHTML = `<span>${BMI}</span>`
//    }
//    else if(results >= 18.6 && results <= 24.9 ){
//     results.innerHTML = `<span>${BMI}</span>`
//    }
//    else(results >= 24.9){
//     results.innerHTML = `<span>${BMI}</span>`
//    }
})