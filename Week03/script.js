document.getElementById('submit').addEventListener('click', () => {
    const input = document.getElementById('todoInput');
    const text = input.value.trim(); //양 끝 공백 제거
    if (text !== '') { 
        addTodo(text); //입력값이 비어있지 않으면 함수 호출 및 목록 추가
        input.value = ''; //다시 입력값을 비움
        setTimeout(() => showModal('할 일이 추가되었습니다.'), 2000); 
    }
})

function addTodo(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.className = 'deleteBtn';
    deleteButton.onclick = function() {
        setTimeout(() => {
            li.remove();
            showModal('목록이 삭제되었습니다.');
        }, 1000); 
    };

    li.appendChild(deleteButton);
    li.addEventListener('click', event => {
        if (event.target.tagName !== 'BUTTON') { //할 일 목록을 눌렀을 경우를 암시
            setTimeout(() => {
                li.style.textDecoration = li.style.textDecoration === 'line-through' ? '' : 'line-through';
                //취소선이 없으면 line-through을 통해 취소선을 그어줌
                li.style.color = 'red';
            }, 500);
        }
    });

    document.getElementById('todoList').appendChild(li);
}

function showModal(message) { //모달창 표시 기능 
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.getElementById('closeModal');

    modalText.textContent = message;
    modal.style.display = 'block';

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}
