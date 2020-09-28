function createDrop() {

    const droplet = "&#128167"
    const drop = document.createElement('div');
    drop.classList.add('drop');

    drop.innerText = '💧'

    document.body.appendChild(drop);
};
setInterval(createDrop, 300);