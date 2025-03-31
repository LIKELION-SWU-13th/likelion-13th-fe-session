//엔터키 눌렀을 때 addTask 함수 호출 js -> 할 일 등록
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") { 
        addTask();
    }
});

//할 일 추가 기능 js
function addTask() {
    const taskInput = document.getElementById("taskInput");  //입력창 값 가져오기
    const taskText = taskInput.value.trim();  //입력된 텍스트의 양옆 공백 제거
    if (!taskText) return;  //입력창의 텍스트가 비어 있으면 아무것도 안 함
    
    const taskList = document.getElementById("taskList");  //할 일 목록 가져오기
    const li = createTaskItem(taskText);  //할 일 항목 생성
    taskList.appendChild(li);  //할 일 목록에 추가
    taskInput.value = "";  //입력창 비우기

    showMessage("할 일 추가 완료!");
    setTimeout(() => showMessage(""), 2000);  //2초 후 메시지 지우기
}

//할 일 생성 기능 js
function createTaskItem(taskText) {
    const li = document.createElement("li");  //새 할 일 텍스트 생성
    const span = document.createElement("span");  //할 일 텍스트 감싸는 태크 생성
    span.textContent = taskText;  //할 일 텍스트를 span 태그 안에 넣기
    span.addEventListener('click', () => span.classList.toggle("completed"));  //클릭 시 완료 상태 변경
    
    const buttonContainer = createButtonContainer();  //버튼 컨테이너 생성
    li.appendChild(span); //텍스트 추가
    li.appendChild(buttonContainer); //버튼 추가
    return li; 
}

//버튼 컨테이너 생성 기능 js
function createButtonContainer() {
    const buttonContainer = document.createElement("div"); //버튼 div 생성
    buttonContainer.classList.add("task-buttons");  //버튼 컨테이너에 클래스 추가
    
    const editBtn = createButton("수정", "edit-btn", editTask);
    const deleteBtn = createButton("삭제", "delete-btn", deleteTask);
    
    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);
    return buttonContainer;
}

//버튼 생성 기능 js
function createButton(text, className, onClickFunction) {
    const button = document.createElement("button"); //버튼 생성
    button.textContent = text; //버튼 텍스트 넣기
    button.classList.add(className); //클래스 추가
    button.addEventListener('click', onClickFunction);  //버튼 클릭 시 실행
    return button;
}

//수정 버튼 클릭 시 동작 기능 js
function editTask(event) {
    const span = event.target.closest("li").querySelector("span");  //해당 텍스트 찾기
    const newText = prompt("수정할 내용을 입력하세요", span.textContent);
    if (newText) span.textContent = newText;  //새 텍스트로 변경
}

//삭제 버튼 클릭 시 동작 기능 js
function deleteTask(event) {
    showMessage("~ 삭제 중 ~");
    setTimeout(() => {
        const li = event.target.closest("li");  //해당 할 일 항목 찾기
        li.remove();  //삭제
        showMessage("삭제 완료!");
        setTimeout(() => showMessage(""), 1000);  //1초 후 메시지 지우기
    }, 1000);
}

//화면에 메시지를 표시 기능 js
function showMessage(msg) {
    document.getElementById("message").textContent = msg;
}
