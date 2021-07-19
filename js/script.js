// change mood
function changeMood(event){
    event.preventDefault();
    document.body.classList.toggle('dark');

    const icon = document.querySelector('#mood>i');

    if(icon.classList.contains('fa-moon')){
        icon.classList.add('fa-lightbulb');
        icon.classList.remove('fa-moon');
        console.log('icon');
    }else{
        icon.classList.remove('fa-lightbulb');
        icon.classList.add('fa-moon');
    }
}

// create qr-code
function scanContact(event){
    event.preventDefault();
    const cardWrapper = document.createElement("div");
    cardWrapper.id = "cardWrapper";
    const card =   `
        <span class="close-qr" onclick="closeQR(event)"><i class="fas fa-times"> </i></span>
        <div class="card">
            <img src="/img/card.png" alt="" class="card-img">
            <p>Scan Me</p>
        </div>
    `;
    cardWrapper.innerHTML = card;
    document.body.appendChild(cardWrapper);
}

function closeQR(event){
    event.preventDefault();
    const cardWrapper = document.querySelector("#cardWrapper");
    document.body.removeChild(cardWrapper);
}
