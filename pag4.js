const s = document.querySelector('select');
const j = document.querySelector('#datahorario');
const msg = document.querySelector('#mensagem');
const button = document.querySelector('button');

button.addEventListener("click", (e) => {
    e.preventDefault();

msg.innerHTML = `Voce escolheu o horario ${ j.value } e o procedimento ${ s.value }!`;
})

