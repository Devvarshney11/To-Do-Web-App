const inp = document.getElementById('listinput');
const list = document.getElementById('list');
const btn = document.getElementById('add-btn');
console.log(inp.value);
clickFunc = function()
{
    if(inp.value != "")
    {
        const new_list = document.createElement('li');
        const text = document.createTextNode((list.childElementCount+1)+':- '+inp.value);
        new_list.appendChild(text);
        list.appendChild(new_list);
        new_list.id = list.childElementCount;
    }
}
btn.onclick = clickFunc;
