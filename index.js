const inputDom = document.getElementById('input-box');
const btnDom = document.getElementById('submit-btn');
console.log(btnDom);
const tasks = document.querySelector('tasks');
const form =document.querySelector(".form-control")
const arr = [];
clickFunc = function(e)
{
    
    e.preventDefault()
    if(inputDom.value != '')
    {
        arr.push(inputDom.value);
        const items = arr.map((items,index) =>
        {
            return `<div class = "single-task">
            <p>temp<p>
            <div class="icon">
                <i class="fa-solid fa-trash fa-shake"></i>
            </div>
        </div>`
        })
        tasks.innerHTML = items;
    }
}
form.addEventListener("submit",clickFunc())