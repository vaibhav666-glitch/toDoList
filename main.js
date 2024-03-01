

function addToList(){
    const inputText=document.getElementById('input-container')
    const listContainer=document.getElementById('taskList')
    if(inputText.value!==''){
    const list=document.createElement('li')
        list.innerHTML=inputText.value;
        listContainer.appendChild(list)
        let span=document.createElement("span")
        span.innerHTML="x";
        list.appendChild(span)
    }
    inputText.value="";
}