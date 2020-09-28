function createDrop() {

    const droplet = "&#128167"
    const drop = document.createElement('div');
    drop.classList.add('drop');

    drop.innerText = '💧'

    document.body.appendChild(drop);

    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = Math.random() * 2 + 3 + 's';

    setTimeout(() => {
        drop.remove();
    }, 5000)

};
setInterval(createDrop, 300);