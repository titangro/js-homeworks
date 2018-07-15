'use strict';
const form = document.querySelector('.list-block'),
	tasks = document.getElementsByTagName('input'),
	result = document.querySelector('output');
let completedCount = 0;

for (let task of tasks) {
	task.addEventListener('change', changeCompleteTask);
	if (task.checked) {
		completedCount++;
	}
}

result.value = `${completedCount} из ${tasks.length}`;
checkCompleteTasks();

function changeCompleteTask(event) {
	if (event.currentTarget.checked) {
		completedCount++;
	} else {
		completedCount--;
	}
	result.value = `${completedCount} из ${tasks.length}`;
	checkCompleteTasks();
}

function checkCompleteTasks() {
	if (completedCount === tasks.length) {
		form.classList.add('complete');
	} else {
		form.classList.remove('complete')
	}
}