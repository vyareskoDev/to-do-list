"use strict"
import { deleteAllTasks, togglePopup, handleNewTaskFormSubmit, displayError, displayWarning } from "./files/javaScriptModules/functions.js"

const addTaskButton = document.querySelector("#add-new-task-button")
const deleteAllTasksButton = document.querySelector("#delete-all-tasks-button")
const popupWindow = document.querySelector(".popup-window")
const closePopupButton = document.querySelector("#close-popup-button")
const tasksContainer = document.querySelector("#tasks-container")


addTaskButton.addEventListener("click", () => togglePopup(popupWindow))

deleteAllTasksButton.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task")
    if (tasks.length == 0) {
        displayWarning("The task list is already empty!", tasksContainer, 5000, "warning-message")
    }

    deleteAllTasks(tasks)
})

closePopupButton.addEventListener("click", () => togglePopup(popupWindow))
const form = document.querySelector("#create-new-task-form")
form.addEventListener("submit", () => {
    let inputValue = document.querySelector("#task-title-form").value
    let taskImportanceStatus = document.querySelector("input[name='importance']:checked").value
    if (!inputValue || 0 > inputValue.length || 20 < inputValue.length) {
        displayError("Text length must be in range of 1, 18 symbols!", tasksContainer, 5000, "error-message")
        closePopupButton.click()
        return
    }
    handleNewTaskFormSubmit(inputValue, taskImportanceStatus, tasksContainer)
    closePopupButton.click()
})
