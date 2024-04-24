const button=document.querySelector('.button')
button.addEventListener('click',(e)=>{
    e.preventDefault()
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('.result')

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML=`please enter a valid height`
    }else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`please enter a valid weight`
    }else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            result.innerHTML=`<span>${bmi} under weight</span>`
        }else if(bmi>18.6 && bmi<24.9){
            result.innerHTML=`<span>${bmi} normal range</span>`
        }else{
            result.innerHTML=`<span>${bmi} over weight</span>`
        }
    }
    
    
})