const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;


function handleKeyUp(event){
    if ( event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

function jump(){
    isJumping = true;

    let upInterval = setInterval(()=>{

        if(position >= 150){
            clearInterval(upInterval);

            //Desce
            let downInterval = setInterval(()=>{
                if(position <= 0){
                    clearInterval(downInterval)
                    isJumping = false;
                }else {
                    position -= 30;
                    dino.style.bottom = position + "px";
                }
            },50)
        }else {
            //Sobe
            position += 30;
            dino.style.bottom = position + "px";
        }

    }, 50)
     
}
function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition = 1800;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1800 + "px"
    background.appendChild(cactus); 

    let leftInterval = setInterval(()=>{
        
        if(cactusPosition < -60){
            clearInterval(leftInterval)
            background.removeChild(cactus);
        }else if (cactusPosition > 230 && cactusPosition < 250 && position < 60){
            //Game over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game_over">Fim de jogo</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + "px";
        }
    },20)
    setTimeout(createCactus, randomTime)
}

createCactus();

document.addEventListener('keydown', handleKeyUp);