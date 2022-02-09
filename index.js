// Dom selector 
let countShow = document.getElementById('count');
let addBtn = document.getElementById('add-btn');
let minusBtn = document.getElementById('minus-btn');

let newHeading = document.createElement('h3')
let count = 0


// counting show
show()
function show() {
    newHeading.innerText = count
    countShow.appendChild(newHeading)
}

// event listener
// add functionality
addBtn.addEventListener('click', function () {
    count++;
    show();
})

// minus functionality
minusBtn.addEventListener('click', function(){
    if(count > 0){
        count--;
        show()
    }
})
