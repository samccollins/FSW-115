let xhr = new XMLHttpRequest();
let todoDiv = document.getElementById('todolist');

xhr.open('GET', 'https://api.vschool.io/bob/todo');
xhr.send();

xhr.onreadystatechange = () => {
   if(xhr.readyState === 4 && xhr.status === 200) {
      let todos = JSON.parse(xhr.responseText);

      for(const todo of todos) {
          createTodo(todo);
      }
   }
}

createTodo = (todo) => {
    let style = 'title';
    if(todo.completed) {
        style = 'strikethrough';
    }
    let image = '';
    if(todo.imgUrl !== undefined) {
        image = `<img src="${todo.imgUrl}"/>`;
    }
    let cost = 0;
    if(todo.price !== 0) {
        cost = `${todo.price}`;
    }

        todoDiv.innerHTML += `<div><span class=${style}>${todo.title}</span>
        ${image} ${cost}</div>`;
}


