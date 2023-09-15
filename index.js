const inputDom = document.getElementById('input-box');
const btnDom = document.getElementById('submit-btn');
const tasks = document.querySelector('.tasks');
const form = document.querySelector(".form-control");
const notify = document.getElementById('notify');
arr = [];
if (arr.length == 0) {
    tasks.innerHTML = `<h3 class="empty-task">No Task Available</h3>`;
}
console.log(arr);
clickFunc = function (e) {

    e.preventDefault();
    if (inputDom.value != '') {
        e.preventDefault();
        arr.push(inputDom.value);
        console.log(arr);
        inputDom.value = "";
        const items = arr.map((items, index) => {
            return `<div class = "single-task">
            <p class="text">${items}</p>
            <div class="icon">
                <i id= "${index}" class="fa-solid fa-trash fa-shake delete"></i>
            </div>
        </div>`
        }).join("");
        tasks.innerHTML = items;
        notify.classList.toggle('notification-visible');
        notify.addEventListener('transitionend', function () {
            notify.classList.remove('notification-visible');
        })
        saveData();
    }
}
deleteFunc = function (e) {
    if (e.target.classList.contains('delete')) {
        const index = arr.indexOf(e.target.parentElement.previousElementSibling.innerHTML);
        if (index > -1) {
            arr.splice(index, 1);
        }
        e.target.parentElement.parentElement.remove();
    }
    if (arr.length == 0) {
        tasks.innerHTML = `<h3 class="empty-task">No Task Available</h3>`;
    }
    saveData();
}
function saveData()
{
    localStorage.setItem("data",tasks.innerHTML);
    let string = JSON.stringify(arr)
    // console.log(string);
    localStorage.setItem("temp",string);
}
function showTask()
{
    // console.log(localStorage.getItem("data"));
    tasks.innerHTML = localStorage.getItem("data");
    let retString = localStorage.getItem("temp")
    arr = JSON.parse(retString)
    console.log(arr);
}
btnDom.addEventListener("click", clickFunc)
tasks.addEventListener("click", deleteFunc)

showTask();