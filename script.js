

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
