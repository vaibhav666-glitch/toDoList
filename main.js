

function addToList(){
    const inputText=document.getElementById('input-container')
    const listContainer=document.getElementById('taskList')
    if(inputText.value!==''){
    const list=document.createElement('li')
    const checkbox=document.createElement('input')
    checkbox.type='checkbox'
    const spanInput=document.createElement('span')
    spanInput.innerHTML=inputText.value;
    spanInput.id='input-text'
    
    const span=document.createElement("span")
        span.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
        span.id='delete'
        span.addEventListener('click', ()=>{
            list.remove();
        })
    
    list.appendChild(checkbox);
    list.appendChild(spanInput);
    list.appendChild(span)
    listContainer.appendChild(list)
       
        
    }
    inputText.value="";
}