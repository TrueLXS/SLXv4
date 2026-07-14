Array.from(document.querySelectorAll(".CardRead")).forEach(elem => {
    elem.addEventListener('click', e => {
        let x = elem.querySelector("div:not(.CardTop)");
        let plus = elem.querySelector(".CardTop h1:last-child");
        let isopen = e.target.parentElement.isopen;
        if (isopen) {
            x.style.height = "0px";
            plus.textContent = "+";
        } else {
            x.style.height = "255px";
            plus.textContent = "-";
        }
        e.target.parentElement.isopen = !isopen;
    });
});