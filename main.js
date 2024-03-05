
let listArr=[];

const inputText=document.getElementById('input-container')
const listContainer=document.getElementById('taskList')

function enqueue()
{

    if(inputText.value!=='')
        {
            listArr.push({name:inputText.value, check:false,priority:"low"});
            countTask();
        }

        inputText.value='';
        listContainer.innerHTML=''
        displayList("all");
        
}

function displayList(option)
{
    listArr.sort((a,b)=>{
        if(a.priority==='high')return -1;
        if(b.priority==='high')return 1;
        return 0;
    })
    for(let i=0;i<listArr.length;i++)
    {
        if(option==='all')
            createList(listArr[i]);
        
        else if(option==='check') { 
            if(listArr[i].check===true)
                createList(listArr[i])
            
        }
        else 
            if(listArr[i].check===false)
                createList(listArr[i]) 
        
    }
    
}

function createList(obj)
{
    
    const list=document.createElement('li')
    const checkbox=document.createElement('input')
    const spanInput=document.createElement('span')
    const setPriority=document.createElement('span');
    const spanDelete=document.createElement("span")
//Check Box
    checkbox.type='checkbox';
    if(obj.check===true)
        checkbox.checked=true;
    checkbox.addEventListener('click',()=>{
       obj.check= obj.check===true?false:true;
       countTask();
    })

// Input Text Value
    spanInput.innerHTML=obj.name;
    

// Set Priority

setPriority.innerHTML=`<i class="fa-solid fa-star"></i>`;
setPriority.id='priority';
    if(obj.priority==='high')
        {
            setPriority.classList.add('high')
        }
    setPriority.addEventListener('click',()=>{
      //  obj.priority= obj.priority==='high'?'low':'high';
      if(obj.priority==='low')
      {
        obj.priority='high';
        setPriority.classList.add('high');
      }
      else{
        obj.priority='low';
        setPriority.classList.remove('high');
      }
    })
// Delete 
    spanDelete.innerHTML=`<i class="fa-solid fa-xmark"></i>`;
    spanDelete.id='delete'
    spanDelete.addEventListener('click', ()=>{
    list.remove();
    listArr.splice(listArr.indexOf(obj),1);
    countTask();
    })

    list.appendChild(checkbox);
    list.appendChild(spanInput);
    list.appendChild(setPriority);
    list.appendChild(spanDelete)
    listContainer.appendChild(list)
    
}


//Display List options
    const listOption=document.getElementById("listOptions")
    const taskLeft=document.createElement('li')
    taskLeft.id='taskLeft'
    function countTask(){
    let cnt=0;
    listArr.forEach(i=>{
        if(i.check===false)
            {
                cnt++;
            }})
        taskLeft.innerHTML= cnt+" Task Left"
        }
    listOption.appendChild(taskLeft);


    const all=document.createElement('li')
    all.textContent="All"
    all.classList.add('options')
    all.addEventListener('click',()=>{
        listContainer.innerHTML=''
        displayList("all")
    })
    listOption.appendChild(all);

    const incompleteTask=document.createElement('li')
    incompleteTask.textContent="Incomplete"
    incompleteTask.classList.add('options')
    incompleteTask.addEventListener('click',()=>{
        listContainer.innerHTML=''
        displayList("uncheck")
    })
    listOption.appendChild(incompleteTask);

    const completedTask=document.createElement('li')
    completedTask.textContent='Completed';
    completedTask.classList.add('options')
    completedTask.addEventListener('click',()=>{
        listContainer.innerHTML=''
        displayList("check")
    })
    listOption.appendChild(completedTask);


//Task options
   const completeAllTask=document.getElementById('completeAllTask')
    completeAllTask.addEventListener('click',()=>{
        listArr.forEach(i=>{
            if(i.check===false)
                i.check=true;
        })
        listContainer.innerHTML=''
        displayList('all')
        countTask();
    })

    const dequeue=document.getElementById('dequeue')
    dequeue.addEventListener('click',()=>{
        listArr.shift();
        listContainer.innerHTML='';
        displayList('all');
        countTask();
    })


    let clearCompleted=document.getElementById('clearCompleted')
    clearCompleted.addEventListener('click',()=>{
        listArr=listArr.filter(value=>!value.check)
        listContainer.innerHTML=''
        displayList('all')
        countTask();
    })

   