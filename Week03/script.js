const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const message = document.getElementById('message');

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');
  li.classList.add('todo-item');

  // ✅ 체크 버튼 추가
  const checkBtn = document.createElement('button');
  checkBtn.className = 'check-btn';
  checkBtn.innerHTML = '○';

  const span = document.createElement('span');
  span.textContent = text;

  checkBtn.addEventListener('click', () => {
    const completed = li.classList.toggle('completed');
    checkBtn.innerHTML = completed ? '●' : '○';
  });

  const delBtn = document.createElement('button');
  delBtn.textContent = '삭제';
  delBtn.className = 'delete-btn';

  delBtn.addEventListener('click', () => {
    setTimeout(() => {
      li.remove();
      showMessage('할 일이 삭제되었습니다!');
    }, 1000);
  });

  li.appendChild(checkBtn);
  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = '';

  setTimeout(() => {
    showMessage('할 일 추가 완료!');
  }, 2000);
});

function showMessage(text) {
  message.textContent = text;
  setTimeout(() => {
    message.textContent = '';
  }, 2000);
}
