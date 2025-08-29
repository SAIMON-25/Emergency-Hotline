
// heart functionality
const cardHeart = document.querySelectorAll('.card-heart');

for(const heart of cardHeart){
    
    heart.addEventListener('click',function(){
        const navHeart = document.getElementById('heart-count');
        
        let count = parseInt(navHeart.innerText)
        
        count++;

        navHeart.innerText = count;
        // console.log(count);
                
    })
    
}


// call button functionality

const callBtns = document.querySelectorAll('.call-btn');

for(const callBtn of callBtns){

    callBtn.addEventListener('click',function(e){
       
        // const parent = e.target.parentNode.parentNode;
        const parent = e.target.closest('.card')
        const title = parent.querySelector('h1').innerText;
        const number = parent.querySelector('h2').innerText;
        // console.log(title,number);
  
        alert(`📞 Calling ${title} at ${number}`);

        // coin functionality
        
    })
}

