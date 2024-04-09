
let estrela = document.querySelector('.estrela');
let coral = document.querySelector('.coral');

const jump = () => {
    estrela.classList.add('jump');
    setTimeout(() => {
        estrela.classList.remove('jump');
        const audio = new Audio('som/Jump.wav');//ainda precisa add o audio
        audio.play();
    }, 270); //deixa o valor no máximo 300, se for mais a estrela vai virar o superman
};

/*const jump = () => {
if (estrela.classList.contains('jump')) return;
  estrela.classList.add('jump');
  setTimeout(() => {
    estrela.classList.remove('jump');
    const audio = new Audio('som/Jump.wav');//ainda precisa add o audio
        audio.play();
  }, 200);
};*/

const loop = setInterval(() => {

    const coralPosition = coral.offsetLeft;
    const estrelaPosition = +window.getComputedStyle(estrela).bottom.replace('px','');

    if (coralPosition < 115 && coralPosition > 0 && estrelaPosition <= 80) {
        coral.style.animation = 'none';
        coral.style.left = `${coralPosition}px`;
        const audio = new Audio('som/Explosion.wav') //Outro audio necessario
        audio.play();
 
        coral.style.animation = 'none';
        coral.style.bottom = `${estrelaPosition}px`;

        estrela.src = './img/morte01.png';
        estrela.style.width = '150px';
        estrela.style.marginLeft = '50px';
        clearInterval(loop);
    }

},10);

function reload(){
    window.location.reload(true);
}

/*não sei por qual motivo mas isso não está funcionando
o pulo não vai mas o som funciona.. */
/*tudo funciona agora*/

document.addEventListener('keydown', jump);

//alternativa
//anotação dos testes: o som não funciona mas o pulo tecnicamente vai
/*document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      jump();
    }
  });*/