function getId(idName) {
    return document.getElementById(idName);
}

//emargency hot line section click functionalities
getId('card-parent').addEventListener('click', function (e) {

    // heart icon click functionalities
    // get heart count 
    const heartTotal = parseInt(getId('heart-total').innerText);

    // get heart icon
    const btnClick = e.target.className;
    if (btnClick.includes('heart-icon-click')) {
        // set heart count increase
        const currentHeartTotal = heartTotal + 1;
        getId('heart-total').innerText = currentHeartTotal;
    }


    // call button functionalites
if(btnClick.includes('call-btn-click')){
//   get card data
   const serviceName= e.target.parentNode.parentNode.children[1].children[0].innerText;
   const serviceNumber=e.target.parentNode.parentNode.children[2].children[0].innerText;

//    get total coin 
const totalCoin=parseInt(getId('total-coin').innerText);

  

//    set total coin
const currentCoin=totalCoin-20;


if(totalCoin>=20){
     alert(`📞 ${serviceName} - ${serviceNumber} এ কল করা হচ্ছে...`); 
    getId('total-coin').innerText=currentCoin;

    // call history

    //get history container
    const historyContainer=getId('history-container');
    const newDiv=document.createElement('div');



    newDiv.innerHTML=`
       <div class="flex justify-between items-center gap-2 bg-secondary-bg p-3 mb-2 rounded-lg ">
                        <!-- left title -->
                        <div class="">
                            <h3>${serviceName}</h3>
                            <p class="text-secondary">${serviceNumber}</p>
                        </div>

                        <!-- right time -->
                        <div class="">
                            <p>${new Date().toLocaleTimeString()}</p>
                        </div>
                    </div>
    `

    // set history card
    historyContainer.appendChild(newDiv);


}
else{
      alert(`❌ আপনার পর্যাপ্ত কয়েন নাই।কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
      return;
}









}

if( btnClick.includes('call-icon')){
    const serviceName= e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText;
    const serviceNumber=e.target.parentNode.parentNode.parentNode.children[2].children[0].innerText;
 alert(`📞 ${serviceName} - ${serviceNumber} এ কল করা হচ্ছে...`);
}


})

// clear all button functionality
getId('clear-history-btn').addEventListener('click',function(){
    console.log('clear btn')
})