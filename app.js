console.log('starting app')

// HOW TO QUERY THE DOM
// var titles = document.getElementsByClassName('title');

// Array.from(titles).forEach(function(item) {
//   console.log(item);  
// })


// const wmf = document.querySelector('#book-list li:nth-child(2) .name');

// console.log(wmf);

// var books = document.querySelector('#book-list li .name'); 
// console.log(books);

// books = document.querySelectorAll('#book-list .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//   console.log(book);
// })


// HOW TO EDIT THE HTML DOCUMENT AND INSERT TEXT INTO THE DOM.

// var books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//   // for us to append something we use the +=
//    book.textContent += '(book title)';
// })

// const booklist = document.querySelector('#book-list');

// booklist.innerHTML += '<p> this is how you add or append Html to the dom</p>';



// DOM NODES...

// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);

// console.log('#page-banner node name is:', banner.nodeName);

// console.log('#page-banner node name is:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// DOM TRANSVERSING...(parent to child and vice-versa)

// const booklist = document.querySelector('#book-list');

// console.log('the parent node is:', booklist.parentNode);

// console.log('the parent node is:',booklist.parentElement);

// // to get the children 
// console.log(booklist.children);

// // DOM TRANSVERSING...(sibling to sibling)

// console.log('the next sibling is:',booklist.nextSibling); 
// // Note the above will give us only the next textnode whic is the line break but if we want to get the next sibling we do;

// console.log('the next element sibling is:',booklist.nextElementSibling); 

// booklist.previousElementSibling.querySelector('p').innerHTML += '<br> Too cool for everyone else!';



// DOM EVENTS...
var btns = document.querySelectorAll('#book-list .delete');

// bcus we are trying to get the click event in multiple element we will loop through each element..

// Array.from(btns).forEach(function(btn){
//   btn.addEventListener('click',function(e){

//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li)
//   });
// }); 


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