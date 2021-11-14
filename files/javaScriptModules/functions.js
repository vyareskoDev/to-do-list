const importanceStatusMap = {
    "veryImportant": "./files/pictures/veryImportant.jpg",
    "important": "./files/pictures/important.jpg",
    "notImportant": "./files/pictures/notImportant.jpg",
}

export const displayError = (errorText, container = document.body, time = 5000, ...classList) => {
    if (!errorText) return
    const errorMessage = document.createElement("div")
    errorMessage.classList.add("error-container")
    if (classList) classList.forEach(className => errorMessage.classList.add(className))
    errorMessage.innerHTML =
        `<div class="error-message">
            ${errorText}
        </div>
        `
    container.appendChild(errorMessage)
    setTimeout(() => errorMessage.remove(), time)
}

export const createNewTask = (taskTitle, taskImportanceStatus = "notImportant") => {
    if (!taskTitle || taskTitle < 0 || taskTitle > 18) displayError("Label lenght must be in range of 0, 18 symbols", document.querySelector("#create-new-task-form"), "error")
    const task = document.createElement("div")
    task.classList.add("task")
    task.innerHTML += `
    <div class="task__info">
    <div class="task__label">
        <h1>${taskTitle}</h1>
    </div>
    <div class="task__info-importance">
        <p>
            Importance: <img class="importance-image" alt="${taskImportanceStatus}" src="${importanceStatusMap[taskImportanceStatus]}" />
        </p>
    </div>
    </div>
    `
    return task
}

export const deleteAllTasks = (tasks) => {
    tasks.forEach(task => {
        task.remove()
    })
}

export const togglePopup = (popupWindow) => {
    if (!popupWindow) return
    popupWindow.classList.toggle("hiden")
    return false
}

export const handleNewTaskFormSubmit = (taskTitle, taskImportanceStatus, container) => {
    if (!taskTitle || !container) {
        displayError("Please, enter the task title!", container, 100000000)
        return
    }
    const newTask = createNewTask(taskTitle, taskImportanceStatus)
    container.appendChild(newTask)
    return false
}