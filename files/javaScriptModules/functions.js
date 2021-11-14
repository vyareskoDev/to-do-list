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
export const displayWarning = (warningText, container = document.body, time = 5000, ...classList) => {
    if (!warningText) return
    const warningMessage = document.createElement("div")
    warningMessage.classList.add("error-container")
    if (classList) classList.forEach(className => warningMessage.classList.add(className))
    warningMessage.innerHTML =
        `<div class="warning-message">
            ${warningText}
        </div>
        `
    container.appendChild(warningMessage)
    setTimeout(() => warningMessage.remove(), time)
}

export const createNewTask = (taskTitle, taskImportanceStatus = "notImportant") => {
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
        displayError("Please, enter the task title!", container, 5000)
        return
    }
    const newTask = createNewTask(taskTitle, taskImportanceStatus)
    container.appendChild(newTask)
    return false
}