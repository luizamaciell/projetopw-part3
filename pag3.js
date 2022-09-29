const s = document.querySelector('#datahorario');
const msg = document.querySelector('#mensagem');
const button = document.querySelector('button');

button.addEventListener("click", (e) => {
    e.preventDefault();

msg.innerHTML = `Você escolheu o hórario ${ s.value }! Bom treino!`;
})
