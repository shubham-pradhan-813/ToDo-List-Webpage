document.getElementById('add-task-button').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteBtn);
        document.getElementById('task-list').appendChild(li);

        document.getElementById('new-task').value = '';
    }
});
