let elTodoForm = document.querySelector('.todo__form');
let elInput = document.querySelector('.todo__inp');
let elTodoList = document.querySelector('.todo__list');


elTodoForm.addEventListener('submit', addItem);

elTodoList.addEventListener("click", (e) => {
  if(e.target.classList.contains('todo__trash')) {
   e.target.parentElement.remove(); 
  }
  
})
let infoArr = []

function addItem(e) {
  e.preventDefault();
  let inputValue = elInput.value;
  if(inputValue) {
    infoArr.push(inputValue)
    // create item
    let li = document.createElement('li');
    li.classList = 'todo__item';
 
     // create checkbox
    let checkbox = document.createElement('input')
    checkbox.classList = 'todo__check';
    checkbox.type = 'checkbox';


    // create text
    let ptext = document.createElement('p');
    ptext.classList = 'todo__text';
    infoArr.forEach((item => {
      ptext.append(item)
    }))

    
    // create trash button
    let trashBtn = document.createElement('button');
    trashBtn.classList = 'todo__trash';
    trashBtn.append("x")

    checkbox.addEventListener('change', () => {
      if(checkbox.checked) {
        ptext.classList.toggle('cm')
      } else {
        ptext.classList.toggle('cm')
      }
    })

    li.append(checkbox,ptext,trashBtn);
    elTodoList.append(li);
    
  }
  e.target.reset()
}


