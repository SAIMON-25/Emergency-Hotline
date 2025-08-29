// heart functionality
const cardHeart = document.querySelectorAll(".card-heart");

for (const heart of cardHeart) {
  heart.addEventListener("click", function () {
    const navHeart = document.getElementById("heart-count");

    let count = parseInt(navHeart.innerText);

    count++;

    navHeart.innerText = count;
    // console.log(count);
  });
}

// call button functionality

const callBtns = document.querySelectorAll(".call-btn");

for (const callBtn of callBtns) {
  callBtn.addEventListener("click", function (e) {
    // coin functionality
    const coin = document.getElementById("coin");

    let amount = parseInt(coin.innerText);

    if (amount < 20) {
      alert("🪙 Insufficient coin!!!");
      return;
    } else {
      amount -= 20;
      coin.innerText = amount;
    }

    // const parent = e.target.parentNode.parentNode;
    const parent = e.target.closest(".card");
    const title = parent.querySelector("h1").innerText;
    const number = parent.querySelector("h2").innerText;
    console.log(title, number);
    alert(`📞 Calling ${title} at ${number}`);

    // time function
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second : "2-digit",
    });

    // call history functionality
    const callHistoryParent = document.getElementById("call-history");
    const child = document.createElement("div");
    child.innerHTML = `
     
           <div
          class="flex justify-between items-center mx-4 my-2 p-2 bg-gray-100 rounded-md"
        >
          <div>
            <h1 class="text-xl font-medium">${title}</h1>
            <h2 class="text-[18px] text-gray-500">${number}</h2>
          </div>
          <p class="text-[18px]">${timeString}</p>
        </div>
       
    `;
    // console.log(child);
    callHistoryParent.prepend(child);
  });
}


// clear button
const clearBtn = document.getElementById('clear-btn');

clearBtn.addEventListener('click',function(){

    const parent = document.getElementById('call-history');
    parent.innerText = '';
})



// Copy functionality

const copyBtns = document.getElementsByClassName('copy-btn');


for(const copyBtn of copyBtns){

  copyBtn.addEventListener('click',function(e){

    const copyCount = document.getElementById('copy-count');

    let count = parseInt(copyCount.innerText);
    count++;
    copyCount.innerText = count;
    console.log(count);


    const parent = e.target.parentNode.parentNode;
    // console.log(parent);

    const number = parent.querySelector('h2').innerText;
    // console.log(number);
    
    navigator.clipboard.writeText(number).then(function(){
      alert(`${number} is copied to the clipboard`)
    });
    
})
}