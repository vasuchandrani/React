import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
 
export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone: false}])
    let [newTodo, setNewTodo] = useState("");
 
    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos,{ task: newTodo, id :uuidv4(), isDone: false}];
        });
        setNewTodo("");
    }
 
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
 
    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    
    let markAsDone = (id) => {
        
        setTodos(todos.map((todo) => {
            if (todo.id == id) {
                
                return (
                    {
                        ...todo, 
                        isDone: true
                    }
                );
            }
            else {
                return todo;
            }
        }));
    }
    
    return (
        <div>
            <input placeholder="add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr />
 
            <h4>Task to do</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={ todo.isDone ? { textDecoration : 'line-through'} : {} }>{todo.task}</span>
                            &nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() => markAsDone(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}