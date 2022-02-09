// Dom selector 
let countShow = document.getElementById('count');
let addBtn = document.getElementById('add-btn');
let minusBtn = document.getElementById('minus-btn');

let count = 0

// event listener
addBtn.addEventListener('click', function(e){
    count++;
    countShow.innerText = count
})