window.onload = () => {
    let container = document.getElementById("container")
    for (let i = 0; i < 1200; i++) {
        let elem = document.createElement("div");
        elem.className = "plock";
        elem.innerText = "PLOCK"
        container.appendChild(elem)
        addEvent(elem)
    }

}

function addEvent(elem) {
    elem.onmousedown = () => {
        elem.classList.add("plock-explode");
        let url = Math.random() > .95 ? "./assets/audio/plock2.mp3" : './assets/audio/plock.mp3';
        new Audio(url)?.play();
    }
}
