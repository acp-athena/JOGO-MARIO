const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');
const goomba = document.querySelector('.goomba');


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {

    const nuvemPosition = nuvem.offsetLeft;
    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const goombaPosition = goomba.offsetLeft;

    

    if (canoPosition < 115 && canoPosition > 0 && marioPosition < 105){

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;
        
        goomba.style.animation = 'none';
        goomba.style.left = `${goombaPosition}px`;

        clearInterval(loop);
    }

    if (goombaPosition < 110 && goombaPosition > 0 && marioPosition < 65){

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;
        
        goomba.style.animation = 'none';
        goomba.style.left = `${goombaPosition}px`;

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);
