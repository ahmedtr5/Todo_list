window.onload = () => {

    let input = document.querySelector("input");
    let button = document.querySelector("#button-addon2");
    let ol = document.querySelector(".listtodo");

    button.onclick = () => {
        ajoutertask()
    }
    let ajoutertask = () => {
        let task = input.value;
        if (task.length === 0) {
            input.style.border = "1px solid #6d071a"
            return
        } else {
            input.style.border = "1px solid green"
        }

        let li = document.createElement('li');

        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');

        let span = document.createElement('span');

        span.innerText = task;

        li.appendChild(checkbox);
        li.appendChild(span);
        ol.appendChild(li);

        let count = 0;
        let nb = 0;
        checkbox.onclick = () => {
            li.classList.toggle("line");
            let oll_li = document.querySelectorAll('li');
            for (let i = 0; i < oll_li.length; i++) {
                if (oll_li[i].classList.contains("line")) {
                    nb += 1;
                }
            }
            count = nb;
            nb = 0;
            console.log(count)
            spanD.innerText = (`Task Done ${count}`);
        };
    }

    let done = document.querySelector(".done");
    let h1 = document.createElement('h1');
    let spanD = document.createElement('span');
    h1.appendChild(spanD);
    console.log(h1)
    done.appendChild(h1);

}