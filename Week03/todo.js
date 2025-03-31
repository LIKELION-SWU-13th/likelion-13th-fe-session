const addBtn = document.getElementById('addBtn'); 
const todoInput = document.getElementById('todoInput'); 
const todoList = document.getElementById('todoList');  

addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();  

    if (todoText !== '') {
        const li = document.createElement('li'); // 리스트 생성
        const deleteBtn = document.createElement('button'); //삭제 버튼 생성
        const todoItem = document.createElement('span'); // 할 일 텍스트만 따로 감쌀 span 생성        
        todoItem.textContent = todoText; 

        //리스트에 텍스트와 버튼 삽입
        todoList.appendChild(li);
        li.appendChild(todoItem);
        li.appendChild(deleteBtn); 

        // 추가 버튼 클릭 시 목록 추가, 2초 메세지 팝업창 표시(비동기 처리)
        setTimeout(() => alert('할 일 추가 완료!'), 2000); 

        // 버튼에 삭제 텍스트 넣기
        deleteBtn.textContent = '삭제';
        
        // 입력창 다시 비우기
        todoInput.value = '';

        // 삭제 버튼 클릭 시 할 일 리스트 삭제+1초 뒤 메세지 팝업창 표시(비동기 처리)
        deleteBtn.addEventListener('click', () => {
            li.remove();  
            setTimeout(() => alert('할 일 삭제!'), 1000);
        }); 
        
        // 할 일 목록 클릭 시 취소선+회색으로 완료 표시     
        todoItem.addEventListener('click', () => {
            todoItem.style.textDecoration = "line-through";
            todoItem.style.color = "gray";
        }); 
        
        
    }
});
