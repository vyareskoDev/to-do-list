"use strict"
import { createNewTask, deleteAllTasks, togglePopup, handleNewTaskFormSubmit } from "./files/javaScriptModules/functions.js"

const addTaskButton = document.querySelector("#add-new-task-button")
const deleteAllTasksButton = document.querySelector("#delete-all-tasks-button")
const popupWindow = document.querySelector(".popup-window")
const closePopupButton = document.querySelector("#close-popup-button")
const tasksContainer = document.querySelector("#tasks-container")


addTaskButton.addEventListener("click", () => togglePopup(popupWindow))

deleteAllTasksButton.addEventListener("click", () => {
    const tasks = document.querySelectorAll(".task")
    deleteAllTasks(tasks)
})

closePopupButton.addEventListener("click", () => togglePopup(popupWindow))
const form = document.querySelector("#create-new-task-form")
form.addEventListener("submit", () => {
    let inputValue = document.querySelector("#task-title-form").value
    let taskImportanceStatus = document.querySelector("input[name='importance']:checked").value
    handleNewTaskFormSubmit(inputValue, taskImportanceStatus, tasksContainer)
    inputValue = ""
    closePopupButton.click()
})