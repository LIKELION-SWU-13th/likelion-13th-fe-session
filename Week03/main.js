document.addEventListener('DOMContentLoaded', () => {
    const inputTodo = document.querySelector('#inputTodo');
    const addButton = document.querySelector('#addTodo');
    const todoList = document.querySelector('#listUp');

    const saveTodo = () => {
        let todos = [];
        const items = document.querySelectorAll('#listUp span');
        items.forEach(item => {
            todos.push(item.textContent);
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const loadTodo = () => {
        const saved = JSON.parse(localStorage.getItem('todos'));
        if (!saved) return;

        saved.forEach(text => {
            inputTodo.value = text;
            addTodo();
        });
    };

    const bidonggi = (result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(result);
            }, 500);
        });
    };

    const addTodo = () => {
        if (!inputTodo.value) {
            alert('내용을 입력하세요.');
        } else {
            const itemText = inputTodo.value;
            console.log(`${itemText}저장함`);
            inputTodo.value = '';

            bidonggi(itemText).then((result) => {
                const item = document.createElement('div');
                item.classList.add('todoList');

                const text = document.createElement('span');
                text.style.marginLeft = '5px';
                text.style.fontSize ='14px';
                text.textContent = result;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = "삭제";
                deleteButton.classList.add('delete-btn');

                item.appendChild(text);
                item.appendChild(deleteButton);
                todoList.appendChild(item);

                deleteButton.addEventListener('click', deleteTodo);
                text.addEventListener('click', toggleLineThrough);

                saveTodo();
            });
        }
    }

    const deleteTodo = (event) => {
        todoList.removeChild(event.currentTarget.parentNode);
        saveTodo();
    };

    const toggleLineThrough = (event) => {
        const text = event.currentTarget;
        text.style.textDecoration =
            text.style.textDecoration === "line-through" ? "none" : "line-through";
    };



    addButton.addEventListener('click', addTodo);
    loadTodo();
})