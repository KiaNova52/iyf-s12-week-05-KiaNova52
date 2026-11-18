const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

let todos = [];
let currentFilter = "all";

function createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id;

    if (todo.completed) {
        li.classList.add("completed");
    }

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";
    deleteButton.type = "button";

    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

function updateStats() {
    const remaining = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent =
        `${remaining} ${remaining === 1 ? "item" : "items"} left`;
}

function renderTodos() {
    todoList.innerHTML = "";

    const filteredTodos = todos.filter(todo => {
        if (currentFilter === "active") {
            return !todo.completed;
        }

        if (currentFilter === "completed") {
            return todo.completed;
        }

        return true;
    });

    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateStats();
}

function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    renderTodos();
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }

        return todo;
    });

    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

function filterTodos(filter) {
    currentFilter = filter;

    filters.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );
    });

    renderTodos();
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    addTodo(text);
    input.value = "";
    input.focus();
});

todoList.addEventListener("click", function(event) {
    const task = event.target.closest(".todo-item");

    if (!task) {
        return;
    }

    const id = Number(task.dataset.id);

    if (event.target.closest("[data-action='delete']")) {
        deleteTodo(id);
        return;
    }

    if (event.target.classList.contains("todo-text")) {
        toggleTodo(id);
    }
});

filters.forEach(button => {
    button.addEventListener("click", function() {
        filterTodos(button.dataset.filter);
    });
});

clearCompletedBtn.addEventListener("click", function() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

renderTodos();