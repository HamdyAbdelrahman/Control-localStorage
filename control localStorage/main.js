//select Elements
let allSpans= document .querySelectorAll(".buttons span");
let Results= document.querySelector(".results > span")
let theInput= document.getElementById("the-input")

allSpans.forEach(span => {

    span.addEventListener("click", (e) => {

        if(e.target.classList.contains("check-item")){

            checkItem();

        }
        if(e.target.classList.contains("add-item")){

            addItem();

        }
        if(e.target.classList.contains("delete-item")){

            deleteItem();

        }
        if(e.target.classList.contains("Show-item")){

            showItem();

        }
    })

});

function showMessage() {

    if(theInput.value === '') {

        Results.innerHTML = 'Input cant Be Empty';

    }
}

function checkItem(){

    if(theInput.value!==''){

    if(localStorage.getItem(theInput.value)){

        Results.innerHTML = `found localstorage item called <span> ${theInput.value}</span>`

    }else{

        Results.innerHTML=`not found`;
    }

    }else{
        showMessage();
    }
}
function addItem(){
    if(theInput.value!==''){

        if(localStorage.getItem(theInput.value)){
    
            Results.innerHTML = `founded localstorage item called <span> ${theInput.value}</span>`
    
        }else{
    
            localStorage.setItem(theInput.value, theInput.value);

            Results.innerHTML=`local storage item <span>${theInput.value}</span> Added`; 
        
            theInput.value= '';
        }
    
        }else{
            showMessage();
        }
}
function deleteItem(){
        if(theInput.value!==''){

        if(localStorage.getItem(theInput.value)){

            localStorage.removeItem(theInput.value);

            Results.innerHTML = `localstorage item called <span> ${theInput.value}</span> Deleted`
    
        }else{

            Results.innerHTML=`Not found local storage item called <span>${theInput.value}</span>`; 
        
            theInput.value= '';
        }
    
        }else{
            showMessage();
        }}
function showItem(){
    if (localStorage.length){
        
        Results.innerHTML='';

        Results.innerHTML=`local storage has ${localStorage.length}`

        for(let[key,value] of Object.entries(localStorage)){
            
            Results.innerHTML+= `<span class="keys"> ${key } </span>`
        }
        

    }else{

        Results.innerHTML='No items in local storage';

    }
}