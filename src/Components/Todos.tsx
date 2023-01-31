import { useState, useEffect } from "react"

const storedTodos = localStorage.getItem("todos")

function Todos() {
    const [inputText, setInputText] = useState('')
	const [todoId, setTodoId] = useState(0)
	const [todos, setTodos] = useState(
        storedTodos
        ? JSON.parse(storedTodos) 
        : [ { text: "Buy milk", id: -3, done: false },
            { text: "Wash a car", id: -2, done: false },
            { text: "Send an email", id: -1, done: false }]
    )

	const addTodo = () => {
        if (inputText.length > 0) {
            setTodos((todo:string) => [{text: inputText, id: todoId, done: false}, ...todo])
		    setTodoId(() => todoId + 1)
            setInputText('')
        }
	}

    const addTodoOnEnter = (event:any) => {
        if (event.key === "Enter") return addTodo()
    }

	const deleteTodo = (i:number) => {
		setTodos(() => todos.filter((todo:any) => todo.id !== i))
	}

    const completed = () => {

    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [addTodo, deleteTodo])

    return (
        <div>
            <h1>TODOS</h1>
			<input 
				type="text"
				value={inputText}
                onKeyUp={addTodoOnEnter}
				onChange={e => setInputText(e.target.value)}
			/>
			<button onClick={addTodo}>add todo</button>
			<ul>
				{todos.map((todo:any) => (
                    <li key={todo.id}>
                        <div onClick={completed}></div>
                        <p>{todo.text}</p>
                        <button 
                            onClick={() => deleteTodo(todo.id)}>
                            delete
                        </button>
                    </li>
				))}
			</ul>
        </div>
    )
}

export default Todos 