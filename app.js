// DOM EVENTS...
var btns = document.querySelectorAll('#book-list .delete');

// bcus we are trying to get the click event in multiple element we will loop through each element..

Array.from(btns).forEach(function(btn){
  btn.addEventListener('click',function(e){

    const li = e.target.parentElement;
    li.parentNode.removeChild(li)
  });
}); 


const link = document.querySelector('#page-banner a');

link.addEventListener('click',function(e){
  e.preventDefault();
  console.log('navigation to',e.target.textContent, 'was prevented');
})
 
// EVENT BUBBLING(in basic terms it is the bubbling of an event up through the dom)

const list = document.querySelector('#book-list ul');

//delete books

list.addEventListener('click', function(e){
  if(e.target.className === 'delete'){
    const li = e.target.parentElement;
    list.removeChild(li);
  }
})


// INTERACTING WITH FORMS..
// add books.. 

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add textContent
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    // add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete')

    // append to Dom..
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})