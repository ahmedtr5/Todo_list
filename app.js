window.onload = () => {

    const todos = JSON.parse(localStorage.getItem('todos'));
    const todosCount = JSON.parse(localStorage.getItem('todosCount'));

    if (todos) {
        todos.forEach(todo => ajouterToUl(todo.text, todo.completed))
    }
    if (todosCount) {
    }



    let input = document.querySelector("input");
    let button = document.querySelector("#button-addon2");
    let ol = document.querySelector(".listtodo");

    input.onkeydown = (e) => {
        if (e.keyCode == 13) {
            ajoutertask()
        }
    }

    button.onclick = () => {
        ajoutertask()

    }

    let ajoutertask = () => {
        let li = document.querySelector("li");
        let task = input.value;
        if (task.length === 0) {
            input.style.border = "1px solid #6d071a"
            return
        } else {
            input.style.border = "1px solid green"
        }

        ajouterToUl(task, false);
        countliste(li, spanD);
        input.value = '';
        updateLS();
    }

    let done = document.querySelector(".done");
    let h1 = document.createElement('h1');
    let spanD = document.createElement('span');
    h1.appendChild(spanD);
    done.appendChild(h1);


    function ajouterToUl(task, completed) {
        let ol = document.querySelector(".listtodo");
        let li = document.createElement('li');
        li.setAttribute('id', 'input');

        let valid = document.createElement('img');
        valid.setAttribute('src', 'image/check.png');
        valid.setAttribute('width', '30px');

        let span = document.createElement('span');
        let image = document.createElement('img');
        image.setAttribute('src', 'image/delete.png');
        image.setAttribute('width', '30px');


        span.innerText = task;





        li.appendChild(span);
        li.appendChild(valid);
        li.appendChild(image);
        ol.appendChild(li);



        image.onclick = () => {
            li.remove();
            countliste(li, spanD);
            updateLS();
        }

        if (completed != li.classList.contains('line')) {
            li.classList.add('line')
        }
        checkboxStyle(valid, li);

    }

    function checkboxStyle(valid, li) {
        valid.onclick = () => {
            li.classList.toggle("line");
            countliste(li, spanD);
            updateLS();
        }

    }

    function countliste(li, spanD) {
        let count = 0;
        let nb = 0;
        let oll_li = document.querySelectorAll('li');
        for (let i = 0; i < oll_li.length; i++) {
            if (oll_li[i].classList.contains("line")) {
                nb += 1;
            }
        }
        count = nb;
        nb = 0;
        console.log(count)
        spanD.innerText = (`Task Done ${count} / ${oll_li.length}`);

        const todosCount = [];
        todosCount.push({
            nbr: count,
            len: oll_li.length
        })
        localStorage.setItem('todosCount', JSON.stringify(todosCount));
    }



    function updateLS() {
        let ol = document.querySelector('ol');
        todosEl = document.querySelectorAll('li');

        const todos = [];
        todosEl.forEach(todoEl => {
            todos.push({
                text: todoEl.innerText,
                completed: todoEl.classList.contains('line'),
            })
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }


}






